const express = require("express");
const router = express.Router();
const passport = require("passport");
const LigneBusModel = require("../../models/PlanDeTransport/ligneBus");
const LigneToPointModel = require("../../models/PlanDeTransport/ligneToPoint");
const { canViewLigneBus, canCreateLigneBus } = require("snu-lib/roles");
const { ERRORS } = require("../../utils");
const { capture } = require("../../sentry");
const Joi = require("joi");

router.post("/", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      cohort: Joi.string().required(),
      busId: Joi.string().required(),
      departuredDate: Joi.date().required(),
      returnDate: Joi.date().required(),
      youngCapacity: Joi.number().required(),
      totalCapacity: Joi.number().required(),
      followerCapacity: Joi.number().required(),
      travelTime: Joi.string().required(),
      km: Joi.number().required(),
      lunchBreak: Joi.boolean().required(),
      lunchBreakReturn: Joi.boolean().required(),
      centerId: Joi.string().required(),
      centerArrivalTime: Joi.string().required(),
      centerDepartureTime: Joi.string().required(),
      meetingPoints: Joi.array()
        .items(
          Joi.object({
            meetingPointId: Joi.string().required(),
            departureHour: Joi.string().required(),
            meetingHour: Joi.string().required(),
            returnHour: Joi.string().required(),
            transportType: Joi.string().required().valid("train", "bus", "fusée"),
            stepPoints: Joi.array().items(
              Joi.object({
                address: Joi.string().required(),
                departureHour: Joi.string().required(),
                returnHour: Joi.string().required(),
                transportType: Joi.string().required().valid("train", "bus", "fusée"),
              }),
            ),
          }),
        )
        .allow(null, [])
        .default([]),
    }).validate(req.body);

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    if (!canCreateLigneBus(req.user)) return res.status(403).send({ ok: false, code: ERRORS.FORBIDDEN });

    const {
      cohort,
      busId,
      departuredDate,
      returnDate,
      youngCapacity,
      totalCapacity,
      followerCapacity,
      travelTime,
      km,
      lunchBreak,
      lunchBreakReturn,
      centerId,
      centerArrivalTime,
      centerDepartureTime,
      meetingPoints,
    } = value;

    //Check coherence ???

    const bus = await LigneBusModel.create({
      cohort,
      busId,
      departuredDate,
      returnDate,
      youngCapacity,
      totalCapacity,
      followerCapacity,
      travelTime,
      km,
      lunchBreak,
      lunchBreakReturn,
      centerId,
      centerArrivalTime,
      centerDepartureTime,
      meetingPointsId: meetingPoints.map((mp) => mp.meetingPointId),
    });

    const ligneToBus = [];

    for await (const mp of meetingPoints) {
      const res = await LigneToPointModel.create({
        lineId: bus._id.toString(),
        meetingPointId: mp.meetingPointId,
        departureHour: mp.departureHour,
        meetingHour: mp.meetingHour,
        returnHour: mp.returnHour,
        transportType: mp.transportType,
        stepPoints: mp.stepPoints,
      });
      ligneToBus.push(res);
    }

    return res.status(200).send({ ok: true, data: { ...bus, ligneToBus } });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

router.get("/:id", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      id: Joi.string().required(),
    }).validate(req.params);

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS });
    if (!canViewLigneBus(req.user, ligneBus)) return res.status(403).send({ ok: false, code: ERRORS.FORBIDDEN });

    const { id } = value;

    const ligneBus = await LigneBusModel.findById(id);
    if (!ligneBus) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    const ligneToBus = await LigneToPointModel.find({ lineId: id });

    return res.status(200).send({ ok: true, data: { ...ligneBus, ligneToBus } });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

module.exports = router;