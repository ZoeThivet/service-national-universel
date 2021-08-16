const express = require("express");
const router = express.Router();
const passport = require("passport");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const renderFromHtml = require("../htmlToPdf");
const { capture } = require("../sentry");
const ContractObject = require("../models/contract");
const YoungObject = require("../models/young");
const ApplicationObject = require("../models/application");
const ReferentObject = require("../models/referent");
const { ERRORS } = require("../utils");
const { sendEmail } = require("../sendinblue");
const { APP_URL } = require("../config");
const contractTemplate = require("../templates/contractPhase2");
const { validateId, validateContract, validateOptionalId } = require("../utils/validator");

async function updateYoungStatusPhase2Contract(young) {
  const contracts = await ContractObject.find({ youngId: young._id });
  young.set({
    statusPhase2Contract: contracts.map((contract) => {
      if (!contract.invitationSent || contract.invitationSent === "false") return "DRAFT";
      // To find if everybody has validated we count actual tokens and number of validated. It should be improved later.
      const tokenKeys = ["parent1Token", "parent2Token", "projectManagerToken", "structureManagerToken", "youngContractToken"];
      const tokenCount = tokenKeys.reduce((acc, current) => (Boolean(contract[current]) ? acc + 1 : acc), 0);
      const validateKeys = ["parent1Status", "parent2Status", "projectManagerStatus", "structureManagerStatus", "youngContractStatus"];
      const validatedCount = validateKeys.reduce((acc, current) => (contract[current] === "VALIDATED" ? acc + 1 : acc), 0);
      if (validatedCount >= tokenCount) {
        return "VALIDATED";
      } else {
        return "SENT";
      }
    }),
  });

  await young.save();
}

async function createContract(data) {
  const { sendMessage } = data;
  const contract = await ContractObject.create(data);

  contract.projectManagerToken = crypto.randomBytes(40).toString("hex");
  contract.projectManagerStatus = "WAITING_VALIDATION";
  if (sendMessage) await sendProjectManagerContractEmail(contract);

  contract.structureManagerToken = crypto.randomBytes(40).toString("hex");
  contract.structureManagerStatus = "WAITING_VALIDATION";
  if (sendMessage) await sendStructureManagerContractEmail(contract);

  if (contract.isYoungAdult !== "true") {
    contract.parent1Token = crypto.randomBytes(40).toString("hex");
    contract.parent1Status = "WAITING_VALIDATION";
    if (sendMessage) await sendParent1ContractEmail(contract);
    if (contract.parent2Email) {
      contract.parent2Token = crypto.randomBytes(40).toString("hex");
      contract.parent2Status = "WAITING_VALIDATION";
      if (sendMessage) await sendParent2ContractEmail(contract);
    }
  } else {
    contract.youngContractToken = crypto.randomBytes(40).toString("hex");
    contract.youngContractStatus = "WAITING_VALIDATION";
    if (sendMessage) await sendYoungContractEmail(contract);
  }

  if (sendMessage) contract.invitationSent = "true";
  await contract.save();
  return contract;
}

async function updateContract(id, data) {
  const { sendMessage } = data;
  const previous = await ContractObject.findById(id);
  const contract = await ContractObject.findById(id);
  contract.set(data);
  await contract.save();

  // When we update, we have to send mail again to validated.
  if (
    previous.invitationSent !== "true" ||
    previous.projectManagerStatus === "VALIDATED" ||
    previous.projectManagerEmail !== contract.projectManagerEmail
  ) {
    contract.projectManagerStatus = "WAITING_VALIDATION";
    contract.projectManagerToken = crypto.randomBytes(40).toString("hex");
    if (sendMessage) await sendProjectManagerContractEmail(contract, previous.projectManagerStatus === "VALIDATED");
  }
  if (
    previous.invitationSent !== "true" ||
    previous.structureManagerStatus === "VALIDATED" ||
    previous.structureManagerEmail !== contract.structureManagerEmail
  ) {
    contract.structureManagerStatus = "WAITING_VALIDATION";
    contract.structureManagerToken = crypto.randomBytes(40).toString("hex");
    if (sendMessage) await sendStructureManagerContractEmail(contract, previous.structureManagerStatus === "VALIDATED");
  }
  if (
    contract.isYoungAdult !== "true" &&
    (previous.invitationSent !== "true" || previous.parent1Status === "VALIDATED" || previous.parent1Email !== contract.parent1Email)
  ) {
    contract.parent1Status = "WAITING_VALIDATION";
    contract.parent1Token = crypto.randomBytes(40).toString("hex");
    if (sendMessage) await sendParent1ContractEmail(contract, previous.parent1Status === "VALIDATED");
  }
  if (
    contract.isYoungAdult !== "true" &&
    contract.parent2Email &&
    (previous.invitationSent !== "true" || previous.parent2Status === "VALIDATED" || previous.parent2Email !== contract.parent2Email)
  ) {
    contract.parent2Status = "WAITING_VALIDATION";
    contract.parent2Token = crypto.randomBytes(40).toString("hex");
    if (sendMessage) await sendParent2ContractEmail(contract, previous.parent2Status === "VALIDATED");
  }
  if (
    contract.isYoungAdult === "true" &&
    (previous.invitationSent !== "true" || previous.youngContractStatus === "VALIDATED" || previous.youngEmail !== contract.youngEmail)
  ) {
    contract.youngContractStatus = "WAITING_VALIDATION";
    contract.youngContractToken = crypto.randomBytes(40).toString("hex");
    if (sendMessage) await sendYoungContractEmail(contract, previous.youngContractStatus === "VALIDATED");
  }

  if (sendMessage) contract.invitationSent = "true";
  await contract.save();
  return contract;
}

async function sendProjectManagerContractEmail(contract, isValidateAgainMail) {
  const departmentReferentPhase2 = await ReferentObject.findOne({
    department: contract.youngDepartment,
    subRole: { $in: ["manager_department_phase2", "manager_phase2"] },
  });

  return sendContractEmail(contract, {
    email: contract.projectManagerEmail,
    name: `${contract.projectManagerFirstName} ${contract.projectManagerLastName}`,
    token: contract.projectManagerToken,
    cc: departmentReferentPhase2 ? departmentReferentPhase2.email : null,
    ccName: departmentReferentPhase2 ? `${departmentReferentPhase2.firstName} ${departmentReferentPhase2.lastName}` : null,
    isValidateAgainMail,
  });
}

async function sendStructureManagerContractEmail(contract, isValidateAgainMail) {
  return sendContractEmail(contract, {
    email: contract.structureManagerEmail,
    name: `${contract.structureManagerFirstName} ${contract.structureManagerLastName}`,
    token: contract.structureManagerToken,
    isValidateAgainMail,
  });
}

async function sendParent1ContractEmail(contract, isValidateAgainMail) {
  return sendContractEmail(contract, {
    email: contract.parent1Email,
    name: `${contract.parent1FirstName} ${contract.parent1LastName}`,
    token: contract.parent1Token,
    isValidateAgainMail,
  });
}

async function sendParent2ContractEmail(contract, isValidateAgainMail) {
  return sendContractEmail(contract, {
    email: contract.parent2Email,
    name: `${contract.parent2FirstName} ${contract.parent2LastName}`,
    token: contract.parent2Token,
    isValidateAgainMail,
  });
}

async function sendYoungContractEmail(contract, isValidateAgainMail) {
  return sendContractEmail(contract, {
    email: contract.youngEmail,
    name: `${contract.youngFirstName} ${contract.youngLastName}`,
    token: contract.youngContractToken,
    isValidateAgainMail,
  });
}

async function sendContractEmail(contract, options) {
  let htmlContent, subject;
  if (options.isValidateAgainMail) {
    console.log("send (re)validation mail to " + JSON.stringify({ to: options.email, cc: options.cc }));
    subject = `(RE)Valider le contrat d'engagement de ${contract.youngFirstName} ${contract.youngLastName} sur la mission ${contract.missionName} suite à modifications effectuées`;
    htmlContent = fs
      .readFileSync(path.resolve(__dirname, "../templates/contract-revalidate.html"))
      .toString()
      .replace(/{{toName}}/g, options.name)
      .replace(/{{youngName}}/g, `${contract.youngFirstName} ${contract.youngLastName}`)
      .replace(/{{cta}}/g, `${APP_URL}/validate-contract?token=${options.token}&contract=${contract._id}`);
  } else {
    console.log("send validation mail to " + JSON.stringify({ to: options.email, cc: options.cc }));
    subject = `Valider le contrat d'engagement de ${contract.youngFirstName} ${contract.youngLastName} sur la mission ${contract.missionName}`;
    htmlContent = fs
      .readFileSync(path.resolve(__dirname, "../templates/contract.html"))
      .toString()
      .replace(/{{toName}}/g, options.name)
      .replace(/{{youngName}}/g, `${contract.youngFirstName} ${contract.youngLastName}`)
      .replace(/{{cta}}/g, `${APP_URL}/validate-contract?token=${options.token}&contract=${contract._id}`);
  }
  const to = { name: options.name, email: options.email };
  if (options.cc) {
    await sendEmail(to, subject, htmlContent, { cc: [{ name: options.ccName, email: options.cc }] });
  } else {
    await sendEmail(to, subject, htmlContent);
  }
}

// Create or update contract.
router.post("/", passport.authenticate(["referent"], { session: false }), async (req, res) => {
  try {
    const { error: idError, value: id } = validateOptionalId(req.body._id);
    if (idError) return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS, message: idError.message });
    const { error, value: data } = validateContract(req.body);
    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS, message: error.message });

    // Create or update contract.
    const contract = id ? await updateContract(id, data) : await createContract(data);

    // Update the application.
    const application = await ApplicationObject.findById(contract.applicationId);
    if (!application) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    application.contractId = contract._id;
    await application.save();

    // Update young status.
    const young = await YoungObject.findById(contract.youngId);
    if (!young) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    await updateYoungStatusPhase2Contract(young);

    return res.status(200).send({ ok: true, data: contract });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR, error: error.message });
  }
});

router.get("/:id", passport.authenticate(["referent", "young"], { session: false }), async (req, res) => {
  try {
    const data = await ContractObject.findOne({ _id: req.params.id });
    if (!data) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    if (req.user.statusPhase2) {
      //         ^-- Quick and dirty way to check if it's a young.
      const { parent1Token, projectManagerToken, structureManagerToken, parent2Token, youngContractToken, ...rest } = data.toObject();
      return res.status(200).send({ ok: true, data: { ...rest } });
    }
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR, error });
  }
});

// Get a contract by its token.
router.get("/token/:token", async (req, res) => {
  try {
    const token = String(req.params.token);
    if (!token) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    const data = await ContractObject.findOne({
      $or: [
        { youngContractToken: token },
        { parent1Token: token },
        { projectManagerToken: token },
        { structureManagerToken: token },
        { parent2Token: token },
      ],
    });

    if (!data) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    const { parent1Token, projectManagerToken, structureManagerToken, parent2Token, youngContractToken, ...rest } = data.toObject();
    return res.status(200).send({
      ok: true,
      data: { ...rest, isParentToken: token === parent1Token || token === parent2Token, isYoungContractToken: token === youngContractToken },
    });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR, error });
  }
});

// Validate token.
router.post("/token/:token", async (req, res) => {
  try {
    const token = String(req.params.token);
    if (!token) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    const data = await ContractObject.findOne({
      $or: [
        { youngContractToken: token },
        { parent1Token: token },
        { projectManagerToken: token },
        { structureManagerToken: token },
        { parent2Token: token },
      ],
    });
    if (!data) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    if (token === data.parent1Token) data.parent1Status = "VALIDATED";
    if (token === data.parent2Token) data.parent2Status = "VALIDATED";
    if (token === data.projectManagerToken) data.projectManagerStatus = "VALIDATED";
    if (token === data.structureManagerToken) data.structureManagerStatus = "VALIDATED";
    if (token === data.youngContractToken) data.youngContractStatus = "VALIDATED";

    await data.save();

    const young = await YoungObject.findById(data.youngId);
    if (!young) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });
    await updateYoungStatusPhase2Contract(young);

    return res.status(200).send({ ok: true });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR, error });
  }
});

router.post("/:id/download", passport.authenticate(["young", "referent"], { session: false }), async (req, res) => {
  try {
    console.log(`${req.user.id} download contract ${req.params.id}`);
    const contract = await ContractObject.findById(req.params.id);
    if (!contract) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    const options = req.body.options || { format: "A4", margin: 0 };
    //create html
    const newhtml = await contractTemplate.render(contract);
    if (!newhtml) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    const buffer = await renderFromHtml(newhtml, options);
    res.contentType("application/pdf");
    res.setHeader("Content-Dispositon", 'inline; filename="test.pdf"');
    res.set("Cache-Control", "public, max-age=1");
    res.send(buffer);
  } catch (e) {
    capture(e);
    res.status(500).send({ ok: false, e, code: ERRORS.SERVER_ERROR });
  }
});

module.exports = router;
