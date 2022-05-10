const express = require("express");
const passport = require("passport");
const router = express.Router({ mergeParams: true });
const Joi = require("joi");
const { canEditPresenceYoung } = require("snu-lib/roles");

const { capture } = require("../../sentry");
const YoungModel = require("../../models/young");
const { ERRORS } = require("../../utils");
const { serializeYoung } = require("../../utils/serializer");

router.post("/:key", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const allowedKeys = ["cohesionStayPresence", "presenceJDM", "cohesionStayMedicalFileReceived"];
    const { error, value } = Joi.object({
      value: Joi.string().trim().valid("true", "false").required(),
      key: Joi.string().trim().required().valid(...allowedKeys),
      id: Joi.string().required(),
    })
      .unknown()
      .validate({ ...req.params, ...req.body }, { stripUnknown: true });
    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY, error });

    const { value: newValue, key, id } = value;

    const young = await YoungModel.findById(value.id);
    if (!young) return res.status(404).send({ ok: false, code: ERRORS.YOUNG_NOT_FOUND });

    if (!canEditPresenceYoung(req.user, young)) {
      return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });
    }


    young.set({ [key]: newValue });
    await young.save({ fromUser: req.user });

    res.status(200).send({ ok: true, data: serializeYoung(young) });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

module.exports = router;
