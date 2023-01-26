const express = require("express");
const router = express.Router();
const passport = require("passport");
const LigneBusModel = require("../../models/PlanDeTransport/ligneBus");
const LigneToPointModel = require("../../models/PlanDeTransport/ligneToPoint");
const PlanTransportModel = require("../../models/PlanDeTransport/planTransport");
const ModificationBusModel = require("../../models/PlanDeTransport/modificationBus");
const PointDeRassemblementModel = require("../../models/PlanDeTransport/pointDeRassemblement");
const cohesionCenterModel = require("../../models/cohesionCenter");
const schemaRepartitionModel = require("../../models/PlanDeTransport/schemaDeRepartition");
const {
  canViewLigneBus,
  canCreateLigneBus,
  canEditLigneBusGeneralInfo,
  canEditLigneBusCenter,
  canEditLigneBusPointDeRassemblement,
  ROLES,
  canViewPatchesHistory,
} = require("snu-lib/roles");
const { ERRORS } = require("../../utils");
const { capture } = require("../../sentry");
const Joi = require("joi");
const { ObjectId } = require("mongodb");

/**
 * Récupère toutes les ligneBus +  les points de rassemblemnts associés
 */
router.get("/all", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const ligneBus = await LigneBusModel.find({ deletedAt: { $exists: false } });
    let arrayMeetingPoints = [];
    ligneBus.map((l) => (arrayMeetingPoints = arrayMeetingPoints.concat(l.meetingPointsIds)));
    const meetingPoints = await PointDeRassemblementModel.find({ _id: { $in: arrayMeetingPoints } });
    return res.status(200).send({ ok: true, data: { ligneBus, meetingPoints } });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

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
            transportType: Joi.string().required().valid("train", "bus", "fusée", "avion"),
            stepPoints: Joi.array().items(
              Joi.object({
                address: Joi.string().required(),
                departureHour: Joi.string().required(),
                returnHour: Joi.string().required(),
                transportType: Joi.string().required().valid("train", "bus", "fusée", "avion"),
              }),
            ),
          }),
        )
        .allow(null, [])
        .default([]),
    }).validate(req.body);

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    if (!canCreateLigneBus(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });

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
      youngSeatsTaken: 0,
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

    // * Update slave PlanTransport
    const center = await cohesionCenterModel.findById(centerId);
    await PlanTransportModel.create({
      _id: bus._id,
      cohort,
      busId,
      departureString: departuredDate.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }),
      returnString: returnDate.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }),
      youngCapacity,
      totalCapacity,
      fillingRate: 0,
      followerCapacity,
      travelTime,
      km,
      lunchBreak,
      lunchBreakReturn,
      centerId,
      centerRegion: center?.region,
      centerDepartment: center?.department,
      centerZip: center?.zip,
      centerAddress: center?.address,
      centerName: center?.name,
      centerCode: center?.code2022,
      centerArrivalTime,
      centerDepartureTime,
      pointDeRassemblements: meetingPoints,
    });
    // * End update slave PlanTransport

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

router.put("/:id/info", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      id: Joi.string().required(),
      busId: Joi.string().required(),
      departuredDate: Joi.date().required(),
      returnDate: Joi.date().required(),
      youngCapacity: Joi.number().required(),
      totalCapacity: Joi.number().required(),
      followerCapacity: Joi.number().required(),
      travelTime: Joi.string().required(),
      lunchBreak: Joi.boolean().required(),
      lunchBreakReturn: Joi.boolean().required(),
    }).validate({ ...req.params, ...req.body });

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    if (!canEditLigneBusGeneralInfo(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });
    let { id, busId, departuredDate, returnDate, youngCapacity, totalCapacity, followerCapacity, travelTime, lunchBreak, lunchBreakReturn } = value;

    const ligne = await LigneBusModel.findById(id);
    if (!ligne) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    youngCapacity = parseInt(youngCapacity);
    totalCapacity = parseInt(totalCapacity);
    followerCapacity = parseInt(followerCapacity);

    if (totalCapacity < youngCapacity + followerCapacity) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    //add some checks

    ligne.set({
      busId,
      departuredDate,
      returnDate,
      youngCapacity,
      totalCapacity,
      followerCapacity,
      travelTime,
      lunchBreak,
      lunchBreakReturn,
    });

    await ligne.save({ fromUser: req.user });

    // * Update slave PlanTransport
    // ! Gerer logique si il y a deja des inscrits
    const planDeTransport = await PlanTransportModel.findById(id);
    planDeTransport.set({
      busId,
      departureString: departuredDate.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }),
      returnString: returnDate.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }),
      lineFillingRate: planDeTransport.youngCapacity && Math.floor((planDeTransport.youngSeatsTaken / planDeTransport.youngCapacity) * 100),
      youngCapacity,
      totalCapacity,
      followerCapacity,
      travelTime,
      lunchBreak,
      lunchBreakReturn,
    });
    await planDeTransport.save({ fromUser: req.user });
    // * End update slave PlanTransport

    const infoBus = await getInfoBus(ligne);

    return res.status(200).send({ ok: true, data: infoBus });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

router.put("/:id/centre", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      id: Joi.string().required(),
      centerArrivalTime: Joi.string().required(),
      centerDepartureTime: Joi.string().required(),
    }).validate({ ...req.params, ...req.body });

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    if (!canEditLigneBusCenter(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });
    let { id, centerArrivalTime, centerDepartureTime } = value;

    const ligne = await LigneBusModel.findById(id);
    if (!ligne) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    //add some checks

    ligne.set({
      centerArrivalTime,
      centerDepartureTime,
    });

    await ligne.save({ fromUser: req.user });

    const infoBus = await getInfoBus(ligne);

    return res.status(200).send({ ok: true, data: infoBus });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

router.put("/:id/pointDeRassemblement", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      id: Joi.string().required(),
      transportType: Joi.string().required(),
      meetingHour: Joi.string().required(),
      busArrivalHour: Joi.string().required(),
      departureHour: Joi.string().required(),
      returnHour: Joi.string().required(),
      meetingPointId: Joi.string().required(),
      newMeetingPointId: Joi.string().required(),
    }).validate({ ...req.params, ...req.body });

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    if (!canEditLigneBusPointDeRassemblement(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });
    const { id, transportType, meetingHour, busArrivalHour, departureHour, returnHour, meetingPointId, newMeetingPointId } = value;

    const ligne = await LigneBusModel.findById(id);
    if (!ligne) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    const ligneToPoint = await LigneToPointModel.findOne({ lineId: id, meetingPointId });
    if (!ligneToPoint) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    if ([ROLES.ADMIN, ROLES.TRANSPORTER].includes(req.user.role)) {
      ligneToPoint.set({
        transportType,
        meetingHour,
        busArrivalHour,
        departureHour,
        returnHour,
        ...(meetingPointId !== newMeetingPointId && { meetingPointId: newMeetingPointId }),
      });

      await ligneToPoint.save({ fromUser: req.user });

      if (meetingPointId !== newMeetingPointId) {
        const meetingPointsIds = ligne.meetingPointsIds.filter((id) => id !== meetingPointId);
        meetingPointsIds.push(newMeetingPointId);
        ligne.set({ meetingPointsIds });
        await ligne.save({ fromUser: req.user });
      }
    } else {
      ligneToPoint.set({
        transportType,
        meetingHour,
      });
      await ligneToPoint.save({ fromUser: req.user });
    }

    // * Update slave PlanTransport
    const planDeTransport = await PlanTransportModel.findById(id);
    const pointDeRassemblement = await PointDeRassemblementModel.findById(ObjectId(newMeetingPointId));
    const meetingPoint = planDeTransport.pointDeRassemblements.find((meetingPoint) => {
      return meetingPoint.meetingPointId === meetingPointId;
    });
    meetingPoint.set({
      meetingPointId: newMeetingPointId,
      ...pointDeRassemblement._doc,
      busArrivalHour: ligneToPoint.busArrivalHour,
      meetingHour: ligneToPoint.meetingHour,
      returnHour: ligneToPoint.returnHour,
      transportType: ligneToPoint.transportType,
    });

    await planDeTransport.save({ fromUser: req.user });
    // * End update slave PlanTransport

    const infoBus = await getInfoBus(ligne);

    return res.status(200).send({ ok: true, data: infoBus });
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
    if (!canViewLigneBus(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });

    const { id } = value;

    const ligneBus = await LigneBusModel.findById(id);
    if (!ligneBus) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    const infoBus = await getInfoBus(ligneBus);
    return res.status(200).send({ ok: true, data: infoBus });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

router.get("/:id/availablePDR", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      id: Joi.string().required(),
    }).validate(req.params);

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS });
    if (!canViewLigneBus(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });

    const { id } = value;

    const ligneBus = await LigneBusModel.findById(id);
    if (!ligneBus) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    const listGroup = await schemaRepartitionModel.find({ centerId: ligneBus.centerId });

    let idPDR = [];
    for (let group of listGroup) {
      for (let pdr of group.gatheringPlaces) {
        if (!idPDR.includes(pdr)) {
          idPDR.push(pdr);
        }
      }
    }

    const PDR = await PointDeRassemblementModel.find({ _id: { $in: idPDR } });

    return res.status(200).send({ ok: true, data: PDR });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

router.get("/:id/data-for-check", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      id: Joi.string().required(),
    }).validate(req.params);

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS });
    if (!canViewLigneBus(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });

    const { id } = value;

    const ligneBus = await LigneBusModel.findById(id);
    if (!ligneBus) return res.status(404).send({ ok: false, code: ERRORS.NOT_FOUND });

    //Get all youngs for this ligne and by meeting point
    const queryYoung = [
      { $match: { _id: ligneBus._id } },
      { $unwind: "$meetingPointsIds" },
      {
        $lookup: {
          from: "youngs",
          let: { meetingPoint: "$meetingPointsIds" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$cohort", ligneBus.cohort] },
                    { $eq: ["$status", "VALIDATED"] },
                    { $eq: ["$sessionPhase1Id", ligneBus.sessionId] },
                    { $eq: ["$meetingPointId", "$$meetingPoint"] },
                  ],
                },
              },
            },
          ],
          as: "youngs",
        },
      },
      {
        $lookup: {
          from: "youngs",
          let: { id: ligneBus._id.toString() },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ["$ligneId", "$$id"] }],
                },
              },
            },
          ],
          as: "youngsBus",
        },
      },
      {
        $project: { meetingPointsIds: 1, youngsCount: { $size: "$youngs" }, youngsBusCount: { $size: "$youngsBus" } },
      },
    ];

    const dataYoung = await LigneBusModel.aggregate(queryYoung).exec();

    let result = {
      meetingPoints: [],
    };
    let youngsCountBus = 0;
    for (let data of dataYoung) {
      result.meetingPoints.push({ youngsCount: data.youngsCount, meetingPointId: data.meetingPointsIds });
      youngsCountBus = data.youngsBusCount;
    }
    result.youngsCountBus = youngsCountBus;

    //Get young volume need for the destination center in schema
    const dataSchema = await schemaRepartitionModel.find({ sessionId: ligneBus.sessionId });

    let schemaVolume = 0;
    for (let data of dataSchema) {
      schemaVolume += data.youngsVolume;
    }

    result.schemaVolume = schemaVolume;

    //Get young volume need for the destination center in bus
    const dataBus = await LigneBusModel.find({ sessionId: ligneBus.sessionId, _id: { $ne: ligneBus._id } });

    let busVolume = 0;
    for (let data of dataBus) {
      busVolume += data.youngCapacity;
    }

    result.busVolume = busVolume;

    return res.status(200).send({ ok: true, data: result });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

router.get("/cohort/:cohort/hasValue", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    const { error, value } = Joi.object({
      cohort: Joi.string().required(),
    }).validate({ ...req.params });

    if (error) return res.status(400).send({ ok: false, code: ERRORS.INVALID_BODY });

    if (!canViewLigneBus(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });
    let { cohort } = value;

    const ligne = await LigneBusModel.findOne({ cohort });

    return res.status(200).send({ ok: true, data: !!ligne });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

async function getInfoBus(line) {
  const ligneToBus = await LigneToPointModel.find({ lineId: line._id });

  let meetingsPointsDetail = [];
  for (let line of ligneToBus) {
    const pointDeRassemblement = await PointDeRassemblementModel.findById(line.meetingPointId);
    meetingsPointsDetail.push({ ...line._doc, ...pointDeRassemblement._doc });
  }

  const centerDetail = await cohesionCenterModel.findById(line.centerId);

  return { ...line._doc, meetingsPointsDetail, centerDetail };
}

const PATCHES_COUNT_PER_PAGE = 50;

router.get("/patches/:cohort", passport.authenticate("referent", { session: false, failWithError: true }), async (req, res) => {
  try {
    // --- validate data
    const { error, value } = Joi.object({
      cohort: Joi.string().required(),
    }).validate(req.params);
    if (error) {
      console.log("🚀 ~ file: ligne-de-bus.js:551 ~ router.get ~ error", error);
      return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS });
    }

    const { error: errorQuery, value: valueQuery } = Joi.object({
      offset: Joi.number().default(0),
      limit: Joi.number().default(PATCHES_COUNT_PER_PAGE),
      // filter: Joi.string().trim().allow("", null),
    }).validate(req.query, {
      stripUnknown: true,
    });
    if (errorQuery) return res.status(400).send({ ok: false, code: ERRORS.INVALID_PARAMS });
    const { offset, limit /*, filter*/ } = valueQuery;

    // --- security
    if (!canViewPatchesHistory(req.user)) return res.status(403).send({ ok: false, code: ERRORS.OPERATION_UNAUTHORIZED });

    // --- query
    const { cohort } = value;
    const lines = await LigneBusModel.find({ cohort }, { _id: 1 });
    if (lines.length > 0) {
      const lineIds = lines.map((line) => line._id);
      const lineStringIds = lineIds.map((l) => l.toString());
      const lineToPoints = await LigneToPointModel.find({ lineId: { $in: lineStringIds } }, { _id: 1 });
      const lineToPointIds = lineToPoints.map((line) => line._id);
      const modificationBuses = await ModificationBusModel.find({ lineId: { $in: lineStringIds } }, { _id: 1 });
      const modificationBusIds = modificationBuses.map((line) => line._id);

      // const pipeline = [
      //   { $match: { ref: { $in: lineIds } } },
      //   { $unionWith: { coll: "lignetopoint_patches", pipeline: [{ $match: { ref: { $in: lineToPointIds } } }] } },
      //   { $unionWith: { coll: "modificationbus_patches", pipeline: [{ $match: { ref: { $in: modificationBusIds } } }] } },
      //
      //   // get total
      //   { $group: { _id: null, total: { $sum: 1 }, results: { $push: "$$ROOT" } } },
      //
      //   // sort, limit, offset
      //   { $sort: { date: 1 } },
      //   { $project: { total: 1, results: { $slice: ["$results", offset, limit] } } },
      // ];
      console.log("line ids: ", lineIds.map((l) => "ObjectId(\"" + l + "\")").join(","));
      console.log("point ids: ", lineToPointIds.map((l) => "ObjectId(\"" + l + "\")").join(","));
      console.log("modif: ", modificationBusIds.map((l) => "ObjectId(\"" + l + "\")").join(","));

      const pipeline = [
        // tout ceci est là pour remplacer un $unionWith qui n'existe pas dans la version de mongo < 4.4
        { $limit: 1 },
        { $project: { _id: 1 } },
        { $project: { _id: 0 } },
        { $lookup: { from: "lignebus_patches", pipeline: [{ $match: { ref: { $in: lineIds } } }], as: "ligneBuses" } },
        { $lookup: { from: "lignetopoint_patches", pipeline: [{ $match: { ref: { $in: lineToPointIds } } }], as: "ligneToPoints" } },
        { $lookup: { from: "modificationbus_patches", pipeline: [{ $match: { ref: { $in: modificationBusIds } } }], as: "modificationBuses" } },
        { $project: { union: { $concatArrays: ["$ligneBuses", "$ligneToPoints", "$modificationBuses"] } } },
        { $unwind: "$union" },
        { $replaceRoot: { newRoot: "$union" } },
        { $sort: { date: 1 } },

        // on déplie chaque op.
        { $unwind: "$ops" },
        {
          $addFields: {
            op: "$ops.op",
            path: "$ops.path",
            value: "$ops.value",
            originalValue: "$ops.orignalValue",
          },
        },
        { $project: { ops: 0, __v: 0 } },

        // get total
        { $group: { _id: null, total: { $sum: 1 }, results: { $push: "$$ROOT" } } },

        // sort, limit, offset
        { $project: { total: 1, results: { $slice: ["$results", offset, limit] } } },
      ];

      const patches = await LigneBusModel.aggregate(pipeline);
      console.log("PATCHES: ", patches);

      // --- results
      return res.status(200).send({
        ok: true,
        data: patches.results,
        pagination: { count: patches.total, pageCount: Math.ceil(patches.total / PATCHES_COUNT_PER_PAGE), page: Math.floor(offset / PATCHES_COUNT_PER_PAGE) },
      });
    } else {
      return res.status(200).send({ ok: true, data: [], pagination: { count: 0, pageCount: 0, page: 0 } });
    }
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERRORS.SERVER_ERROR });
  }
});

module.exports = router;
