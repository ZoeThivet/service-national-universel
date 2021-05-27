require("dotenv").config({ path: "./../../.env-prod" });

require("../mongo");
const { sendEmail } = require("../sendinblue");
const path = require("path");
const fs = require("fs");
const { capture, captureMessage } = require("../sentry");
const YoungModel = require("../models/young");
const { assignNextYoungFromWaitingList } = require("../utils");

const delayDate = Date.now();

const clean = async () => {
  const youngsLimit = await YoungModel.find({ autoAffectationPhase1ExpiresAt: { $lte: delayDate } });
  captureMessage(`${Date.now()} - ${youngsLimit.length} youngs has autoAffectationPhase1ExpiresAt reached`);
  for (let i = 0; i < youngsLimit.length; i++) {
    const { __v, ...young } = youngsLimit[i];
    if (young.statusPhase1 === "WAITING_ACCEPTATION") {
      captureMessage(`${young._id} ${young.firstName} ${young.lastName} is not quick enough.`);
      // withdrawn young
      young.set({ statusPhase1: "WITHDRAWN" });
      // send mail saying it is too late :(
      await sendNoResponseAffectationMail(young);
      // assign next one from the waiting list
      await assignNextYoungFromWaitingList(young);
    } else {
      captureMessage(`${young._id} ${young.firstName} ${young.lastName} is not quick enough. but its statusPhase1 is '${young.statusPhase1}'`);
    }
    young.set({ autoAffectationPhase1ExpiresAt: undefined });
    await young.save();
  }
};

const sendNoResponseAffectationMail = async (young) => {
  await sendEmail(
    {
      name: `${young.firstName} ${young.lastName}`,
      email: young.email,
    },
    "La place proposée en séjour de cohésion n'est plus disponible",
    fs
      .readFileSync(path.resolve(__dirname, "../templates/noResponseAffectation.html"))
      .toString()
      .replace(/{{firstName}}/, young.firstName)
      .replace(/{{lastName}}/, young.lastName),
    { bcc: [{ email: "tangi.mendes@selego.co" }] }
  );
};

exports.handler = async () => {
  captureMessage(`${Date.now()} - START AUTO AFFECTATION EXPIRED`);
  try {
    clean();
  } catch (e) {
    capture(`ERROR`, JSON.stringify(e));
    capture(e);
  }
};

exports.test = async () => {
  captureMessage("test message every 60 secs");
};
