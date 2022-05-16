function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

$parcel$export(module.exports, "isInRuralArea", () => $882b6d93070905b3$export$bd2568e431ffdbc8);
$parcel$export(module.exports, "isEndOfInscriptionManagement2021", () => $882b6d93070905b3$export$e1babf29d3e7014c);
$parcel$export(module.exports, "inscriptionModificationOpenForYoungs", () => $882b6d93070905b3$export$a11b35a948dd04fc);
$parcel$export(module.exports, "inscriptionCreationOpenForYoungs", () => $882b6d93070905b3$export$c3f0ea9d0ea503e6);
$parcel$export(module.exports, "getFilterLabel", () => $882b6d93070905b3$export$b930b05e2df061b7);
$parcel$export(module.exports, "getResultLabel", () => $882b6d93070905b3$export$d942f318be5113a4);
$parcel$export(module.exports, "getLabelWithdrawnReason", () => $882b6d93070905b3$export$57e31ecac76b98e8);
$parcel$export(module.exports, "canUpdateYoungStatus", () => $882b6d93070905b3$export$9a5605a036c727a1);
$parcel$export(module.exports, "youngCanChangeSession", () => $882b6d93070905b3$export$4b226c960197eead);
$parcel$export(module.exports, "formatPhoneNumberFR", () => $882b6d93070905b3$export$c60f17cb8a23432c);
var $af8d31735c159a26$exports = {};

$parcel$export($af8d31735c159a26$exports, "YOUNG_STATUS", () => $af8d31735c159a26$export$c56bd0fd9d9960d9);
$parcel$export($af8d31735c159a26$exports, "YOUNG_STATUS_PHASE1", () => $af8d31735c159a26$export$c7395e8f4b3d2705);
$parcel$export($af8d31735c159a26$exports, "YOUNG_STATUS_PHASE1_MOTIF", () => $af8d31735c159a26$export$727e805c62cbed9a);
$parcel$export($af8d31735c159a26$exports, "YOUNG_STATUS_PHASE2", () => $af8d31735c159a26$export$636ab285125fadd3);
$parcel$export($af8d31735c159a26$exports, "CONTRACT_STATUS", () => $af8d31735c159a26$export$2401ec011db71fc7);
$parcel$export($af8d31735c159a26$exports, "YOUNG_STATUS_PHASE3", () => $af8d31735c159a26$export$6e6e7225a85e4f63);
$parcel$export($af8d31735c159a26$exports, "YOUNG_PHASE", () => $af8d31735c159a26$export$b3953bfdcecdb247);
$parcel$export($af8d31735c159a26$exports, "PHASE_STATUS", () => $af8d31735c159a26$export$1c98830beec598e4);
$parcel$export($af8d31735c159a26$exports, "SESSION_STATUS", () => $af8d31735c159a26$export$b2a86d15c1a3657f);
$parcel$export($af8d31735c159a26$exports, "APPLICATION_STATUS", () => $af8d31735c159a26$export$d4738e4fb0f752bf);
$parcel$export($af8d31735c159a26$exports, "PROFESSIONNAL_PROJECT", () => $af8d31735c159a26$export$6847dd8348069106);
$parcel$export($af8d31735c159a26$exports, "PROFESSIONNAL_PROJECT_PRECISION", () => $af8d31735c159a26$export$e662609167010697);
$parcel$export($af8d31735c159a26$exports, "MISSION_DOMAINS", () => $af8d31735c159a26$export$3945d5a04bb1d55b);
$parcel$export($af8d31735c159a26$exports, "YOUNG_SITUATIONS", () => $af8d31735c159a26$export$5848ca522165e8cd);
$parcel$export($af8d31735c159a26$exports, "FORMAT", () => $af8d31735c159a26$export$1807f7ee4b7fca93);
$parcel$export($af8d31735c159a26$exports, "REFERENT_ROLES", () => $af8d31735c159a26$export$44fbcac3119cddc6);
$parcel$export($af8d31735c159a26$exports, "REFERENT_DEPARTMENT_SUBROLE", () => $af8d31735c159a26$export$8e7c27804698708);
$parcel$export($af8d31735c159a26$exports, "REFERENT_REGION_SUBROLE", () => $af8d31735c159a26$export$dad3a4534cc93937);
$parcel$export($af8d31735c159a26$exports, "MISSION_STATUS", () => $af8d31735c159a26$export$60556fc25bc14eff);
$parcel$export($af8d31735c159a26$exports, "PERIOD", () => $af8d31735c159a26$export$f12f51f6e19d77e1);
$parcel$export($af8d31735c159a26$exports, "TRANSPORT", () => $af8d31735c159a26$export$d1ccc74e2d49f400);
$parcel$export($af8d31735c159a26$exports, "MISSION_PERIOD_DURING_HOLIDAYS", () => $af8d31735c159a26$export$995bb7bc63faadfb);
$parcel$export($af8d31735c159a26$exports, "MISSION_PERIOD_DURING_SCHOOL", () => $af8d31735c159a26$export$a89ff5fdd401b318);
$parcel$export($af8d31735c159a26$exports, "STRUCTURE_STATUS", () => $af8d31735c159a26$export$cdf501088939ce09);
$parcel$export($af8d31735c159a26$exports, "DEFAULT_STRUCTURE_NAME", () => $af8d31735c159a26$export$8cb77cd507ea1f4d);
$parcel$export($af8d31735c159a26$exports, "COHORTS", () => $af8d31735c159a26$export$f1a98e82c0c821bd);
$parcel$export($af8d31735c159a26$exports, "INTEREST_MISSION_LIMIT_DATE", () => $af8d31735c159a26$export$face23be394227a9);
$parcel$export($af8d31735c159a26$exports, "ES_NO_LIMIT", () => $af8d31735c159a26$export$cadb3595f94feee9);
$parcel$export($af8d31735c159a26$exports, "SENDINBLUE_TEMPLATES", () => $af8d31735c159a26$export$4ae9eff6ec35c575);
$parcel$export($af8d31735c159a26$exports, "ZAMMAD_GROUP", () => $af8d31735c159a26$export$2a9efabbdb2e08d7);
$parcel$export($af8d31735c159a26$exports, "WITHRAWN_REASONS", () => $af8d31735c159a26$export$f1bf0940d3ebf7b3);
$parcel$export($af8d31735c159a26$exports, "COHESION_STAY_LIMIT_DATE", () => $af8d31735c159a26$export$31dabc846cb58733);
$parcel$export($af8d31735c159a26$exports, "COHESION_STAY_START", () => $af8d31735c159a26$export$ff269dc24610ff99);
$parcel$export($af8d31735c159a26$exports, "COHESION_STAY_END", () => $af8d31735c159a26$export$8683e1f650d209d4);
$parcel$export($af8d31735c159a26$exports, "PHASE1_HEADCENTER_ACCESS_LIMIT", () => $af8d31735c159a26$export$9dd16f3194d1b970);
$parcel$export($af8d31735c159a26$exports, "PHASE1_HEADCENTER_OPEN_ACCESS_CHECK_PRESENCE", () => $af8d31735c159a26$export$9e783af828d4e0bf);
$parcel$export($af8d31735c159a26$exports, "START_DATE_SESSION_PHASE1", () => $af8d31735c159a26$export$2f09bc450f3c0501);
$parcel$export($af8d31735c159a26$exports, "CONSENTMENT_TEXTS", () => $af8d31735c159a26$export$d49b5482dba716f0);
$parcel$export($af8d31735c159a26$exports, "FILE_STATUS_PHASE1", () => $af8d31735c159a26$export$f7babda420d975e);
var $93761635a3889559$exports = {};

$parcel$export($93761635a3889559$exports, "ROLES", () => $93761635a3889559$export$d1cfdc29cbc61821);
$parcel$export($93761635a3889559$exports, "SUB_ROLES", () => $93761635a3889559$export$705846d0c402a1ba);
$parcel$export($93761635a3889559$exports, "SUPPORT_ROLES", () => $93761635a3889559$export$f41d723959c93797);
$parcel$export($93761635a3889559$exports, "VISITOR_SUBROLES", () => $93761635a3889559$export$3f4a9e829bc25054);
$parcel$export($93761635a3889559$exports, "CENTER_ROLES", () => $93761635a3889559$export$415f6299d27c85b);
$parcel$export($93761635a3889559$exports, "ROLES_LIST", () => $93761635a3889559$export$b5a00962a55949b2);
$parcel$export($93761635a3889559$exports, "SUB_ROLES_LIST", () => $93761635a3889559$export$1e4e795e5f0fc340);
$parcel$export($93761635a3889559$exports, "SUPPORT_ROLES_LIST", () => $93761635a3889559$export$e49a2a795edbe61c);
$parcel$export($93761635a3889559$exports, "VISITOR_SUB_ROLES_LIST", () => $93761635a3889559$export$defdc826d71e4f7c);
$parcel$export($93761635a3889559$exports, "canInviteUser", () => $93761635a3889559$export$1358da49e6d6ba89);
$parcel$export($93761635a3889559$exports, "canDeleteStructure", () => $93761635a3889559$export$99a2d427839b9203);
$parcel$export($93761635a3889559$exports, "canDeleteYoung", () => $93761635a3889559$export$f273724001d31234);
$parcel$export($93761635a3889559$exports, "isAdmin", () => $93761635a3889559$export$fc970ed23da99565);
$parcel$export($93761635a3889559$exports, "canEditYoung", () => $93761635a3889559$export$dcc34e9956eaaab5);
$parcel$export($93761635a3889559$exports, "canDeleteReferent", () => $93761635a3889559$export$3a8f8afd3b567c49);
$parcel$export($93761635a3889559$exports, "canViewPatchesHistory", () => $93761635a3889559$export$ea96048cc2f43bb5);
$parcel$export($93761635a3889559$exports, "canViewEmailHistory", () => $93761635a3889559$export$c8cffdf76f567ac9);
$parcel$export($93761635a3889559$exports, "canViewReferent", () => $93761635a3889559$export$d0b9bc0bfb20a49d);
$parcel$export($93761635a3889559$exports, "canUpdateReferent", () => $93761635a3889559$export$492557efdecf2bcd);
$parcel$export($93761635a3889559$exports, "canViewYoungMilitaryPreparationFile", () => $93761635a3889559$export$26d3e35107d827f5);
$parcel$export($93761635a3889559$exports, "canRefuseMilitaryPreparation", () => $93761635a3889559$export$b736af23cd74fd30);
$parcel$export($93761635a3889559$exports, "canViewYoungFile", () => $93761635a3889559$export$7d7acb3973791bd5);
$parcel$export($93761635a3889559$exports, "canCreateOrUpdateCohesionCenter", () => $93761635a3889559$export$88956c0273a4df0e);
$parcel$export($93761635a3889559$exports, "canCreateEvent", () => $93761635a3889559$export$1d97f872679d5e3);
$parcel$export($93761635a3889559$exports, "canCreateOrUpdateSessionPhase1", () => $93761635a3889559$export$5fb68a45ba6ba98e);
$parcel$export($93761635a3889559$exports, "canSearchSessionPhase1", () => $93761635a3889559$export$ec5af2fe5a864eb1);
$parcel$export($93761635a3889559$exports, "canViewSessionPhase1", () => $93761635a3889559$export$d07153e4090efe5f);
$parcel$export($93761635a3889559$exports, "canCreateOrModifyMission", () => $93761635a3889559$export$5e40ac7c20f821d4);
$parcel$export($93761635a3889559$exports, "canCreateOrUpdateProgram", () => $93761635a3889559$export$14e24d78e1a06098);
$parcel$export($93761635a3889559$exports, "canModifyStructure", () => $93761635a3889559$export$90a6f6b39e04ed0d);
$parcel$export($93761635a3889559$exports, "canCreateStructure", () => $93761635a3889559$export$a6085579cbfa5b3d);
$parcel$export($93761635a3889559$exports, "isReferentOrAdmin", () => $93761635a3889559$export$eee2538416d4652f);
$parcel$export($93761635a3889559$exports, "FORCE_DISABLED_ASSIGN_COHESION_CENTER", () => $93761635a3889559$export$d2002d9fd4445dc1);
$parcel$export($93761635a3889559$exports, "canAssignCohesionCenter", () => $93761635a3889559$export$4c8f6122b33bf8e0);
$parcel$export($93761635a3889559$exports, "FORCE_DISABLED_ASSIGN_MEETING_POINT", () => $93761635a3889559$export$4963b46ea5024bf0);
$parcel$export($93761635a3889559$exports, "canAssignMeetingPoint", () => $93761635a3889559$export$f9709ea5fa43797);
$parcel$export($93761635a3889559$exports, "canEditPresenceYoung", () => $93761635a3889559$export$b919412a7e2b5b42);
$parcel$export($93761635a3889559$exports, "canSigninAs", () => $93761635a3889559$export$44e0aec5abb41f25);
$parcel$export($93761635a3889559$exports, "canSendFileByMail", () => $93761635a3889559$export$bdf21f040d1fd023);
$parcel$export($93761635a3889559$exports, "canSearchAssociation", () => $93761635a3889559$export$48b6d878f9056b1);
$parcel$export($93761635a3889559$exports, "canViewCohesionCenter", () => $93761635a3889559$export$bc70a8ae8d2dd202);
$parcel$export($93761635a3889559$exports, "canGetReferentByEmail", () => $93761635a3889559$export$225a634d37e1aa1d);
$parcel$export($93761635a3889559$exports, "canViewMeetingPoints", () => $93761635a3889559$export$1dc78839f43aad28);
$parcel$export($93761635a3889559$exports, "canSearchMeetingPoints", () => $93761635a3889559$export$ce32f646b54d13f3);
$parcel$export($93761635a3889559$exports, "canUpdateInscriptionGoals", () => $93761635a3889559$export$2b09ea89465f8ed);
$parcel$export($93761635a3889559$exports, "canViewInscriptionGoals", () => $93761635a3889559$export$462ef0745832181a);
$parcel$export($93761635a3889559$exports, "canViewTicketTags", () => $93761635a3889559$export$db72b63873c4aee4);
$parcel$export($93761635a3889559$exports, "canGetYoungByEmail", () => $93761635a3889559$export$aac8a325a7d36f4f);
$parcel$export($93761635a3889559$exports, "canViewYoung", () => $93761635a3889559$export$e23cb35cc85d7308);
$parcel$export($93761635a3889559$exports, "canViewBus", () => $93761635a3889559$export$d43e27fe370aefee);
$parcel$export($93761635a3889559$exports, "canViewMission", () => $93761635a3889559$export$da9787607b15231a);
$parcel$export($93761635a3889559$exports, "canViewStructures", () => $93761635a3889559$export$c03975bbaed9e8a9);
$parcel$export($93761635a3889559$exports, "canModifyMissionStructureId", () => $93761635a3889559$export$37836f9d5427ef5a);
$parcel$export($93761635a3889559$exports, "canViewStructureChildren", () => $93761635a3889559$export$2d95169dc0ef53a8);
$parcel$export($93761635a3889559$exports, "canDownloadYoungDocuments", () => $93761635a3889559$export$b83f48c1f1788aaa);
$parcel$export($93761635a3889559$exports, "canInviteYoung", () => $93761635a3889559$export$a87349c842bdebf9);
$parcel$export($93761635a3889559$exports, "canSendTemplateToYoung", () => $93761635a3889559$export$2eee2971be7b96b);
$parcel$export($93761635a3889559$exports, "canViewYoungApplications", () => $93761635a3889559$export$824b4e5a049f62d2);
$parcel$export($93761635a3889559$exports, "canCreateYoungApplication", () => $93761635a3889559$export$fb666447bfb3036a);
$parcel$export($93761635a3889559$exports, "canCreateOrUpdateContract", () => $93761635a3889559$export$2e567317b8862b8d);
$parcel$export($93761635a3889559$exports, "canViewContract", () => $93761635a3889559$export$fa099ce32d533be3);
$parcel$export($93761635a3889559$exports, "canCreateOrUpdateDepartmentService", () => $93761635a3889559$export$f8a7ee181222d087);
$parcel$export($93761635a3889559$exports, "canChangeYoungCohort", () => $93761635a3889559$export$eb82de5cbf8606f6);
$parcel$export($93761635a3889559$exports, "canViewDepartmentService", () => $93761635a3889559$export$11770ac6d15b4087);
$parcel$export($93761635a3889559$exports, "canSearchInElasticSearch", () => $93761635a3889559$export$c6e0b875eebe5723);
$parcel$export($93761635a3889559$exports, "canSendTutorTemplate", () => $93761635a3889559$export$aa6f6a18e0fd1969);
const $93761635a3889559$export$d1cfdc29cbc61821 = {
    ADMIN: "admin",
    REFERENT_DEPARTMENT: "referent_department",
    REFERENT_REGION: "referent_region",
    RESPONSIBLE: "responsible",
    SUPERVISOR: "supervisor",
    HEAD_CENTER: "head_center",
    VISITOR: "visitor"
};
const $93761635a3889559$export$705846d0c402a1ba = {
    manager_department: "manager_department",
    assistant_manager_department: "assistant_manager_department",
    manager_phase2: "manager_phase2",
    secretariat: "secretariat",
    coordinator: "coordinator",
    assistant_coordinator: "assistant_coordinator",
    none: ""
};
const $93761635a3889559$export$f41d723959c93797 = {
    admin: "Modérateur",
    referent: "Référent",
    structure: "Structure",
    head_center: "Chef de Centre",
    young: "Volontaire",
    public: "Public",
    visitor: "Visiteur"
};
const $93761635a3889559$export$3f4a9e829bc25054 = {
    recteur_region: "Recteur de région académique",
    recteur: "Recteur d’académie",
    vice_recteur: "Vice-recteur d'académie",
    dasen: "Directeur académique des services de l’éducation nationale (DASEN)",
    sgra: "Secrétaire général de région académique (SGRA)",
    sga: "Secrétaire général d’académie (SGA)",
    drajes: "Délégué régional académique à la jeunesse, à l’engagement et aux sports (DRAJES)",
    other: "Autre"
};
const $93761635a3889559$export$415f6299d27c85b = {
    chef: "Chef de centre",
    adjoint: "Chef de centre adjoint",
    cadre_specialise: "Cadre spécialisé",
    cadre_compagnie: "Cadre de compagnie",
    tuteur: "Tuteur de maisonnée"
};
const $93761635a3889559$export$b5a00962a55949b2 = Object.values($93761635a3889559$export$d1cfdc29cbc61821);
const $93761635a3889559$export$1e4e795e5f0fc340 = Object.values($93761635a3889559$export$705846d0c402a1ba);
const $93761635a3889559$export$e49a2a795edbe61c = Object.keys($93761635a3889559$export$f41d723959c93797);
const $93761635a3889559$export$defdc826d71e4f7c = Object.keys($93761635a3889559$export$3f4a9e829bc25054);
function $93761635a3889559$export$1358da49e6d6ba89(actorRole, targetRole) {
    // Admins can invite any user
    if (actorRole === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN) return true;
    // REFERENT_DEPARTMENT can invite REFERENT_DEPARTMENT, RESPONSIBLE, SUPERVISOR, HEAD_CENTER
    if (actorRole === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT) return [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(targetRole);
    // REFERENT_REGION can invite REFERENT_DEPARTMENT, REFERENT_REGION, RESPONSIBLE, SUPERVISOR, HEAD_CENTER, VISITOR
    if (actorRole === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION) return [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR,
        $93761635a3889559$export$d1cfdc29cbc61821.VISITOR
    ].includes(targetRole);
    // RESPONSIBLE and SUPERVISOR can invite only RESPONSIBLE and SUPERVISOR.
    if (actorRole === $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE || actorRole === $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR) return targetRole === $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE || targetRole === $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR;
    return false;
}
function $93761635a3889559$export$99a2d427839b9203(actor) {
    return actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
}
function $93761635a3889559$export$f273724001d31234(actor, target) {
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const actorAndTargetInTheSameRegion = actor.region === target.region;
    const actorAndTargetInTheSameDepartment = actor.department === target.department;
    const referentRegionFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actorAndTargetInTheSameRegion;
    const referentDepartmentFromTheSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actorAndTargetInTheSameDepartment;
    const authorized = $93761635a3889559$export$fc970ed23da99565 || referentRegionFromTheSameRegion || referentDepartmentFromTheSameDepartment;
    return authorized;
}
function $93761635a3889559$export$dcc34e9956eaaab5(actor, target) {
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isHeadCenter = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER;
    const actorAndTargetInTheSameRegion = actor.region === target.region;
    const actorAndTargetInTheSameDepartment = actor.department === target.department;
    const referentRegionFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actorAndTargetInTheSameRegion;
    const referentDepartmentFromTheSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actorAndTargetInTheSameDepartment;
    const authorized = $93761635a3889559$export$fc970ed23da99565 || isHeadCenter || referentRegionFromTheSameRegion || referentDepartmentFromTheSameDepartment;
    return authorized;
}
function $93761635a3889559$export$3a8f8afd3b567c49({ actor: actor , originalTarget: originalTarget , structure: structure  }) {
    // TODO: we must handle rights more precisely.
    // See: https://trello.com/c/Wv2TrQnQ/383-admin-ajouter-onglet-utilisateurs-pour-les-r%C3%A9f%C3%A9rents
    const isMe = actor._id === originalTarget._id;
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isSupervisor = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR;
    const actorAndTargetInTheSameRegion = actor.region === (originalTarget.region || structure && structure.region);
    const actorAndTargetInTheSameDepartment = actor.department === (originalTarget.department || structure && structure.department);
    const targetIsReferentRegion = originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION;
    const targetIsReferentDepartment = originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT;
    const targetIsSupervisor = originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR;
    const targetIsResponsible = originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE;
    const targetIsVisitor = originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.VISITOR;
    const targetIsHeadCenter = originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER;
    // actor is referent region
    const referentRegionFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && targetIsReferentRegion && actorAndTargetInTheSameRegion;
    const referentDepartmentFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && targetIsReferentDepartment && actorAndTargetInTheSameRegion;
    const referentResponsibleFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && targetIsResponsible && actorAndTargetInTheSameRegion;
    const responsibleFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && targetIsResponsible && actorAndTargetInTheSameRegion;
    const visitorFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && targetIsVisitor && actorAndTargetInTheSameRegion;
    const headCenterFromTheSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && targetIsHeadCenter && actorAndTargetInTheSameRegion;
    // actor is referent department
    const referentDepartmentFromTheSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && targetIsReferentDepartment && actorAndTargetInTheSameDepartment;
    const responsibleFromTheSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && targetIsResponsible && actorAndTargetInTheSameDepartment;
    const headCenterFromTheSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && targetIsHeadCenter && actorAndTargetInTheSameDepartment;
    // same substructure
    const responsibleFromSameStructure = (targetIsResponsible || targetIsSupervisor) && actor.structureId === originalTarget.structureId;
    const supervisorOfMainStructure = structure && isSupervisor && actor.structureId === structure.networkId;
    const authorized = $93761635a3889559$export$fc970ed23da99565 || referentRegionFromTheSameRegion || referentDepartmentFromTheSameRegion || referentResponsibleFromTheSameRegion || responsibleFromTheSameRegion || visitorFromTheSameRegion || headCenterFromTheSameRegion || referentDepartmentFromTheSameDepartment || responsibleFromTheSameDepartment || headCenterFromTheSameDepartment || responsibleFromSameStructure && !isMe || supervisorOfMainStructure;
    return authorized;
}
function $93761635a3889559$export$ea96048cc2f43bb5(actor) {
    const isAdminOrReferent = [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
    return isAdminOrReferent;
}
function $93761635a3889559$export$c8cffdf76f567ac9(actor) {
    const isAdminOrReferent = [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
    return isAdminOrReferent;
}
function $93761635a3889559$export$d0b9bc0bfb20a49d(actor, target) {
    const isMe = actor.id === target.id;
    const isAdminOrReferent = [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
    const isResponsibleModifyingResponsible = [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role) && [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(target.role);
    // See: https://trello.com/c/Wv2TrQnQ/383-admin-ajouter-onglet-utilisateurs-pour-les-r%C3%A9f%C3%A9rents
    return isMe || isAdminOrReferent || isResponsibleModifyingResponsible;
}
function $93761635a3889559$export$492557efdecf2bcd({ actor: actor , originalTarget: originalTarget , modifiedTarget: modifiedTarget = null , structure: structure  }) {
    const isMe = actor.id === originalTarget.id;
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const withoutChangingRole = modifiedTarget === null || !("role" in modifiedTarget) || modifiedTarget.role === originalTarget.role;
    const isResponsibleModifyingResponsibleWithoutChangingRole = // Is responsible...
    [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role) && // ... modifying responsible ...
    [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(originalTarget.role) && withoutChangingRole;
    const isMeWithoutChangingRole = // Is me ...
    isMe && // ... without changing its role.
    withoutChangingRole;
    // TODO: we must handle rights more precisely.
    // See: https://trello.com/c/Wv2TrQnQ/383-admin-ajouter-onglet-utilisateurs-pour-les-r%C3%A9f%C3%A9rents
    const isReferentModifyingReferentWithoutChangingRole = // Is referent...
    [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role) && // ... modifying referent ...
    [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE
    ].includes(originalTarget.role) && (modifiedTarget === null || [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE
    ].includes(modifiedTarget.role));
    const isReferentModifyingHeadCenterWithoutChangingRole = // Is referent...
    [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role) && // ... modifying referent ...
    originalTarget.role === $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER && (modifiedTarget === null || [
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(modifiedTarget.role));
    const isActorAndTargetInTheSameRegion = actor.region === (originalTarget.region || structure && structure.region);
    const isActorAndTargetInTheSameDepartment = actor.department === (originalTarget.department || structure && structure.department);
    const authorized = (isMeWithoutChangingRole || $93761635a3889559$export$fc970ed23da99565 || isResponsibleModifyingResponsibleWithoutChangingRole || isReferentModifyingReferentWithoutChangingRole || isReferentModifyingHeadCenterWithoutChangingRole) && (actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION ? isActorAndTargetInTheSameRegion : true) && (actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT ? isActorAndTargetInTheSameDepartment : true);
    return authorized;
}
function $93761635a3889559$export$26d3e35107d827f5(actor, target) {
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferentDepartmentFromTargetDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actor.department === target.department;
    const isReferentRegionFromTargetRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actor.region === target.region;
    const authorized = $93761635a3889559$export$fc970ed23da99565 || isReferentDepartmentFromTargetDepartment || isReferentRegionFromTargetRegion;
    return authorized;
}
function $93761635a3889559$export$b736af23cd74fd30(actor, target) {
    return $93761635a3889559$export$26d3e35107d827f5(actor, target) || [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
}
function $93761635a3889559$export$7d7acb3973791bd5(actor, target) {
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferentDepartmentFromTargetDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actor.department === target.department;
    const isReferentRegionFromTargetRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actor.region === target.region;
    const authorized = $93761635a3889559$export$fc970ed23da99565 || isReferentDepartmentFromTargetDepartment || isReferentRegionFromTargetRegion;
    return authorized;
}
function $93761635a3889559$export$88956c0273a4df0e(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
}
function $93761635a3889559$export$1d97f872679d5e3(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$5fb68a45ba6ba98e(actor, target) {
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferent = [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
    const isHeadCenter = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER && actor.id === target.headCenterId;
    return $93761635a3889559$export$fc970ed23da99565 || isReferent || isHeadCenter;
}
function $93761635a3889559$export$ec5af2fe5a864eb1(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
}
function $93761635a3889559$export$d07153e4090efe5f(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
}
function $93761635a3889559$export$5e40ac7c20f821d4(user, mission) {
    return !(user.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && user.department !== mission.department || user.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && user.region !== mission.region) && user.role !== $93761635a3889559$export$d1cfdc29cbc61821.VISITOR;
}
function $93761635a3889559$export$14e24d78e1a06098(user, program) {
    const isAdminOrReferent = [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(user.role);
    return isAdminOrReferent && !(user.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && user.department !== program.department || user.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && user.region !== program.region);
}
function $93761635a3889559$export$90a6f6b39e04ed0d(user, structure) {
    const $93761635a3889559$export$fc970ed23da99565 = user.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferentRegionFromSameRegion = user.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && user.region === structure.region;
    const isReferentDepartmentFromSameDepartment = user.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && user.department === structure.department;
    const isResponsibleModifyingOwnStructure = [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(user.role) && structure._id.equals(user.structureId);
    const isSupervisorModifyingChild = user.role === $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR && user.structureId === structure.networkId;
    return $93761635a3889559$export$fc970ed23da99565 || isReferentRegionFromSameRegion || isReferentDepartmentFromSameDepartment || isResponsibleModifyingOwnStructure || isSupervisorModifyingChild;
}
function $93761635a3889559$export$a6085579cbfa5b3d(user) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(user.role);
}
function $93761635a3889559$export$eee2538416d4652f(user) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(user.role);
}
function $93761635a3889559$export$fc970ed23da99565(user) {
    return $93761635a3889559$export$d1cfdc29cbc61821.ADMIN === user.role;
}
const $93761635a3889559$export$d2002d9fd4445dc1 = false;
const $93761635a3889559$export$4c8f6122b33bf8e0 = (user)=>!$93761635a3889559$export$d2002d9fd4445dc1 && $93761635a3889559$export$fc970ed23da99565(user)
;
const $93761635a3889559$export$4963b46ea5024bf0 = false;
const $93761635a3889559$export$f9709ea5fa43797 = (user)=>!$93761635a3889559$export$4963b46ea5024bf0 && $93761635a3889559$export$eee2538416d4652f(user)
;
const $93761635a3889559$export$b919412a7e2b5b42 = (actor)=>{
    // todo affiner les droits
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
};
const $93761635a3889559$export$44e0aec5abb41f25 = (actor, target)=>{
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferentRegionFromSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actor.region === target.region;
    const isReferentDepartmentFromSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actor.department === target.department;
    return target.constructor.modelName === "referent" && $93761635a3889559$export$fc970ed23da99565 || target.constructor.modelName === "young" && ($93761635a3889559$export$fc970ed23da99565 || isReferentRegionFromSameRegion || isReferentDepartmentFromSameDepartment);
};
const $93761635a3889559$export$bdf21f040d1fd023 = (actor, target)=>{
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferentRegionFromSameRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actor.region === target.region;
    const isReferentDepartmentFromSameDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actor.department === target.department;
    return $93761635a3889559$export$fc970ed23da99565 || isReferentRegionFromSameRegion || isReferentDepartmentFromSameDepartment;
};
function $93761635a3889559$export$48b6d878f9056b1(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$bc70a8ae8d2dd202(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
}
function $93761635a3889559$export$225a634d37e1aa1d(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
}
function $93761635a3889559$export$1dc78839f43aad28(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
}
function $93761635a3889559$export$ce32f646b54d13f3(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$2b09ea89465f8ed(actor) {
    return actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
}
function $93761635a3889559$export$462ef0745832181a(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER,
        $93761635a3889559$export$d1cfdc29cbc61821.VISITOR
    ].includes(actor.role);
}
function $93761635a3889559$export$db72b63873c4aee4(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$aac8a325a7d36f4f(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$e23cb35cc85d7308(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$d43e27fe370aefee(actor) {
    return actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
}
function $93761635a3889559$export$da9787607b15231a(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$c03975bbaed9e8a9(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$37836f9d5427ef5a(actor) {
    return actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
}
function $93761635a3889559$export$2d95169dc0ef53a8(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$b83f48c1f1788aaa(actor, target) {
    return $93761635a3889559$export$dcc34e9956eaaab5(actor, target);
}
function $93761635a3889559$export$a87349c842bdebf9(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$2eee2971be7b96b(actor, target) {
    return $93761635a3889559$export$dcc34e9956eaaab5(actor, target);
}
function $93761635a3889559$export$824b4e5a049f62d2(actor, target) {
    return $93761635a3889559$export$dcc34e9956eaaab5(actor, target) || [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$fb666447bfb3036a(actor, target) {
    return $93761635a3889559$export$dcc34e9956eaaab5(actor, target) || [
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$2e567317b8862b8d(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$fa099ce32d533be3(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}
function $93761635a3889559$export$f8a7ee181222d087(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
}
function $93761635a3889559$export$eb82de5cbf8606f6(actor, target) {
    const $93761635a3889559$export$fc970ed23da99565 = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.ADMIN;
    const isReferentDepartmentFromTargetDepartment = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT && actor.department === target.department;
    const isReferentRegionFromTargetRegion = actor.role === $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION && actor.region === target.region;
    const authorized = $93761635a3889559$export$fc970ed23da99565 || isReferentDepartmentFromTargetDepartment || isReferentRegionFromTargetRegion;
    return authorized;
}
function $93761635a3889559$export$11770ac6d15b4087(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
}
function $93761635a3889559$export$c6e0b875eebe5723(actor, index) {
    if (index === "mission") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
    else if (index === "school") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
    else if (index === "young-having-school-in-department") return [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
    else if (index === "young-having-school-in-region") return [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION
    ].includes(actor.role);
    else if (index === "cohesionyoung") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
    else if (index === "sessionphase1young") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
    else if (index === "structure") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
    else if (index === "referent") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR,
        $93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER
    ].includes(actor.role);
    else if (index === "application") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
    else if (index === "cohesioncenter") return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
    else if (index === "team") return [
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT
    ].includes(actor.role);
    return false;
}
function $93761635a3889559$export$aa6f6a18e0fd1969(actor) {
    return [
        $93761635a3889559$export$d1cfdc29cbc61821.ADMIN,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION,
        $93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT,
        $93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE,
        $93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR
    ].includes(actor.role);
}


const $af8d31735c159a26$export$c56bd0fd9d9960d9 = {
    WAITING_VALIDATION: "WAITING_VALIDATION",
    WAITING_CORRECTION: "WAITING_CORRECTION",
    VALIDATED: "VALIDATED",
    REFUSED: "REFUSED",
    IN_PROGRESS: "IN_PROGRESS",
    WITHDRAWN: "WITHDRAWN",
    DELETED: "DELETED",
    WAITING_LIST: "WAITING_LIST",
    NOT_ELIGIBLE: "NOT_ELIGIBLE",
    ABANDONED: "ABANDONED"
};
const $af8d31735c159a26$export$c7395e8f4b3d2705 = {
    WAITING_AFFECTATION: "WAITING_AFFECTATION",
    AFFECTED: "AFFECTED",
    EXEMPTED: "EXEMPTED",
    DONE: "DONE",
    NOT_DONE: "NOT_DONE",
    WITHDRAWN: "WITHDRAWN",
    WAITING_LIST: "WAITING_LIST"
};
const $af8d31735c159a26$export$727e805c62cbed9a = {
    ILLNESS: "ILLNESS",
    DEATH: "DEATH",
    ADMINISTRATION_CANCEL: "ADMINISTRATION_CANCEL",
    OTHER: "OTHER"
};
const $af8d31735c159a26$export$636ab285125fadd3 = {
    WAITING_REALISATION: "WAITING_REALISATION",
    IN_PROGRESS: "IN_PROGRESS",
    VALIDATED: "VALIDATED",
    WITHDRAWN: "WITHDRAWN"
};
const $af8d31735c159a26$export$2401ec011db71fc7 = {
    DRAFT: "DRAFT",
    SENT: "SENT",
    VALIDATED: "VALIDATED"
};
const $af8d31735c159a26$export$6e6e7225a85e4f63 = {
    WAITING_REALISATION: "WAITING_REALISATION",
    WAITING_VALIDATION: "WAITING_VALIDATION",
    VALIDATED: "VALIDATED",
    WITHDRAWN: "WITHDRAWN"
};
const $af8d31735c159a26$export$b3953bfdcecdb247 = {
    INSCRIPTION: "INSCRIPTION",
    COHESION_STAY: "COHESION_STAY",
    INTEREST_MISSION: "INTEREST_MISSION",
    CONTINUE: "CONTINUE"
};
const $af8d31735c159a26$export$1c98830beec598e4 = {
    IN_PROGRESS: "IN_PROGRESS",
    IN_COMING: "IN_COMING",
    VALIDATED: "VALIDATED",
    CANCEL: "CANCEL",
    WAITING_AFFECTATION: "WAITING_AFFECTATION"
};
const $af8d31735c159a26$export$b2a86d15c1a3657f = {
    VALIDATED: "VALIDATED",
    DRAFT: "DRAFT"
};
const $af8d31735c159a26$export$d4738e4fb0f752bf = {
    WAITING_VALIDATION: "WAITING_VALIDATION",
    WAITING_VERIFICATION: "WAITING_VERIFICATION",
    WAITING_ACCEPTATION: "WAITING_ACCEPTATION",
    VALIDATED: "VALIDATED",
    REFUSED: "REFUSED",
    CANCEL: "CANCEL",
    IN_PROGRESS: "IN_PROGRESS",
    DONE: "DONE",
    ABANDON: "ABANDON"
};
const $af8d31735c159a26$export$6847dd8348069106 = {
    UNIFORM: "UNIFORM",
    OTHER: "OTHER",
    UNKNOWN: "UNKNOWN"
};
const $af8d31735c159a26$export$e662609167010697 = {
    FIREFIGHTER: "FIREFIGHTER",
    POLICE: "POLICE",
    ARMY: "ARMY"
};
const $af8d31735c159a26$export$3945d5a04bb1d55b = {
    CITIZENSHIP: "CITIZENSHIP",
    CULTURE: "CULTURE",
    DEFENSE: "DEFENSE",
    EDUCATION: "EDUCATION",
    ENVIRONMENT: "ENVIRONMENT",
    HEALTH: "HEALTH",
    SECURITY: "SECURITY",
    SOLIDARITY: "SOLIDARITY",
    SPORT: "SPORT"
};
const $af8d31735c159a26$export$5848ca522165e8cd = {
    GENERAL_SCHOOL: "GENERAL_SCHOOL",
    PROFESSIONAL_SCHOOL: "PROFESSIONAL_SCHOOL",
    AGRICULTURAL_SCHOOL: "AGRICULTURAL_SCHOOL",
    SPECIALIZED_SCHOOL: "SPECIALIZED_SCHOOL",
    APPRENTICESHIP: "APPRENTICESHIP",
    EMPLOYEE: "EMPLOYEE",
    INDEPENDANT: "INDEPENDANT",
    SELF_EMPLOYED: "SELF_EMPLOYED",
    ADAPTED_COMPANY: "ADAPTED_COMPANY",
    POLE_EMPLOI: "POLE_EMPLOI",
    MISSION_LOCALE: "MISSION_LOCALE",
    CAP_EMPLOI: "CAP_EMPLOI",
    NOTHING: "NOTHING"
};
const $af8d31735c159a26$export$1807f7ee4b7fca93 = {
    CONTINUOUS: "CONTINUOUS",
    DISCONTINUOUS: "DISCONTINUOUS",
    AUTONOMOUS: "AUTONOMOUS"
};
const $af8d31735c159a26$export$44fbcac3119cddc6 = $93761635a3889559$export$d1cfdc29cbc61821;
const $af8d31735c159a26$export$8e7c27804698708 = {
    manager_department: $93761635a3889559$export$705846d0c402a1ba.manager_department,
    assistant_manager_department: $93761635a3889559$export$705846d0c402a1ba.assistant_manager_department,
    manager_phase2: $93761635a3889559$export$705846d0c402a1ba.manager_phase2,
    secretariat: $93761635a3889559$export$705846d0c402a1ba.secretariat
};
const $af8d31735c159a26$export$dad3a4534cc93937 = {
    coordinator: $93761635a3889559$export$705846d0c402a1ba.coordinator,
    assistant_coordinator: $93761635a3889559$export$705846d0c402a1ba.assistant_coordinator,
    manager_phase2: $93761635a3889559$export$705846d0c402a1ba.manager_phase2
};
const $af8d31735c159a26$export$60556fc25bc14eff = {
    WAITING_VALIDATION: "WAITING_VALIDATION",
    WAITING_CORRECTION: "WAITING_CORRECTION",
    VALIDATED: "VALIDATED",
    DRAFT: "DRAFT",
    REFUSED: "REFUSED",
    CANCEL: "CANCEL",
    ARCHIVED: "ARCHIVED"
};
const $af8d31735c159a26$export$f12f51f6e19d77e1 = {
    DURING_HOLIDAYS: "DURING_HOLIDAYS",
    DURING_SCHOOL: "DURING_SCHOOL"
};
const $af8d31735c159a26$export$d1ccc74e2d49f400 = {
    PUBLIC_TRANSPORT: "PUBLIC_TRANSPORT",
    BIKE: "BIKE",
    MOTOR: "MOTOR",
    CARPOOLING: "CARPOOLING",
    OTHER: "OTHER"
};
const $af8d31735c159a26$export$995bb7bc63faadfb = {
    SUMMER: "SUMMER",
    AUTUMN: "AUTUMN",
    DECEMBER: "DECEMBER",
    WINTER: "WINTER",
    SPRING: "SPRING"
};
const $af8d31735c159a26$export$a89ff5fdd401b318 = {
    EVENING: "EVENING",
    END_DAY: "END_DAY",
    WEEKEND: "WEEKEND"
};
const $af8d31735c159a26$export$cdf501088939ce09 = {
    WAITING_VALIDATION: "WAITING_VALIDATION",
    WAITING_CORRECTION: "WAITING_CORRECTION",
    VALIDATED: "VALIDATED",
    DRAFT: "DRAFT"
};
const $af8d31735c159a26$export$8cb77cd507ea1f4d = "Ma nouvelle Structure";
const $af8d31735c159a26$export$f1a98e82c0c821bd = [
    "2019",
    "2020",
    "2021",
    "2022",
    "Février 2022",
    "Juin 2022",
    "Juillet 2022"
];
const $af8d31735c159a26$export$face23be394227a9 = {
    2019: "23 mars 2021",
    2020: "31 décembre 2021",
    2021: "30 juin 2022"
};
const $af8d31735c159a26$export$cadb3595f94feee9 = 10000;
const $af8d31735c159a26$export$4ae9eff6ec35c575 = {
    FORGOT_PASSWORD: "157",
    invitationReferent: {
        [$93761635a3889559$export$d1cfdc29cbc61821.REFERENT_DEPARTMENT]: "158",
        [$93761635a3889559$export$d1cfdc29cbc61821.REFERENT_REGION]: "159",
        [$93761635a3889559$export$d1cfdc29cbc61821.RESPONSIBLE]: "160",
        [$93761635a3889559$export$d1cfdc29cbc61821.SUPERVISOR]: "160",
        [$93761635a3889559$export$d1cfdc29cbc61821.ADMIN]: "161",
        [$93761635a3889559$export$d1cfdc29cbc61821.HEAD_CENTER]: "162",
        [$93761635a3889559$export$d1cfdc29cbc61821.VISITOR]: "286",
        NEW_STRUCTURE: "160",
        NEW_STRUCTURE_MEMBER: "163"
    },
    INVITATION_YOUNG: "166",
    // contract
    VALIDATE_CONTRACT: "176",
    REVALIDATE_CONTRACT: "175",
    referent: {
        WELCOME: "378",
        YOUNG_CHANGE_COHORT: "324",
        RECAP_BI_HEBDO_DEPARTMENT: "231",
        // MIG
        MISSION_WAITING_CORRECTION: "164",
        MISSION_WAITING_VALIDATION: "194",
        MISSION_VALIDATED: "63",
        MISSION_END: "213",
        MISSION_CANCEL: "233",
        NEW_MISSION: "192",
        NEW_MISSION_REMINDER: "195",
        MISSION_REFUSED: "165",
        CANCEL_APPLICATION: "155",
        ABANDON_APPLICATION: "214",
        VALIDATE_APPLICATION_TUTOR: "196",
        NEW_APPLICATION_MIG: "156",
        YOUNG_VALIDATED: "173",
        APPLICATION_REMINDER: "197",
        MISSION_ARCHIVED: "204",
        MISSION_ARCHIVED_1_WEEK_NOTICE: "205",
        // PREPA MILITAIRE
        MILITARY_PREPARATION_DOCS_SUBMITTED: "149",
        MILITARY_PREPARATION_DOCS_VALIDATED: "148",
        NEW_MILITARY_PREPARATION_APPLICATION: "185",
        NEW_APPLICATION: "new-application",
        //PHASE 3
        VALIDATE_MISSION_PHASE3: "174",
        // Support
        ANSWER_RECEIVED: "208",
        MESSAGE_NOTIFICATION: "218"
    },
    young: {
        CHANGE_COHORT: "325",
        // le contenu est specifique a la reinscription, il faudrait faire un message plus générique a terme
        ARCHIVED: "269",
        INSCRIPTION_STARTED: "219",
        INSCRIPTION_VALIDATED: "167",
        INSCRIPTION_REACTIVATED: "168",
        INSCRIPTION_WAITING_CORRECTION: "169",
        INSCRIPTION_WAITING_LIST: "171",
        INSCRIPTION_REFUSED: "172",
        INSCRIPTION_WAITING_VALIDATION: "65",
        PHASE_1_VALIDATED: "234",
        // MIG
        REFUSE_APPLICATION: "152",
        VALIDATE_APPLICATION: "151",
        MISSION_PROPOSITION: "170",
        MISSION_CANCEL: "261",
        MISSION_ARCHIVED: "227",
        MISSION_ARCHIVED_AUTO: "289",
        APPLICATION_CANCEL: "180",
        PHASE_2_VALIDATED: "154",
        MISSION_PROPOSITION_AUTO: "237",
        // PREPA MILITAIRE
        MILITARY_PREPARATION_DOCS_VALIDATED: "145",
        MILITARY_PREPARATION_DOCS_CORRECTION: "146",
        MILITARY_PREPARATION_DOCS_REFUSED: "147",
        MILITARY_PREPARATION_DOCS_REMINDER: "201",
        MILITARY_PREPARATION_DOCS_REMINDER_RENOTIFY: "228",
        //PHASE 3
        VALIDATE_PHASE3: "200",
        DOCUMENT: "182",
        CONTRACT_VALIDATED: "183",
        // Support
        ANSWER_RECEIVED: "208",
        // Personal and situation changes
        DEPARTMENT_CHANGE: "215",
        //Phase 1 pj
        PHASE_1_PJ_WAITING_VERIFICATION: "348",
        PHASE_1_PJ_WAITING_CORRECTION: "349",
        PHASE_1_PJ_VALIDATED: "350",
        PHASE_1_FOLLOW_UP_DOCUMENT: "353",
        PHASE_1_FOLLOW_UP_MEDICAL_FILE: "354",
        //send a download link to the young
        LINK: "410"
    },
    YOUNG_ARRIVED_IN_CENTER_TO_REPRESENTANT_LEGAL: "302"
};
const $af8d31735c159a26$export$2a9efabbdb2e08d7 = {
    YOUNG: "Jeunes",
    VOLONTAIRE: "Volontaires",
    REFERENT: "Référents",
    STRUCTURE: "Structures",
    CONTACT: "Contact",
    ADMIN: "Admin",
    VISITOR: "Visiteurs",
    HEAD_CENTER: "Chefs de centre"
};
const $af8d31735c159a26$export$f1bf0940d3ebf7b3 = [
    {
        value: "unavailable_perso",
        label: "Non disponibilité pour motif familial ou personnel"
    },
    {
        value: "unavailable_pro",
        label: "Non disponibilité pour motif scolaire ou professionnel"
    },
    {
        value: "no_interest",
        label: "Perte d'intérêt pour le SNU"
    },
    {
        value: "bad_affectation",
        label: "L'affectation ne convient pas"
    },
    {
        value: "can_not_go_metting_point",
        label: "Impossibilité de se rendre au point de rassemblement"
    },
    {
        value: "bad_mission",
        label: "L'offre de mission ne convient pas"
    },
    {
        value: "other",
        label: "Autre"
    }, 
];
const $af8d31735c159a26$export$31dabc846cb58733 = {
    2019: "du 16 au 28 juin 2019",
    2020: "du 21 juin au 2 juillet 2021",
    2021: "du 21 juin au 2 juillet 2021",
    "Février 2022": "du 13 au 25 Février 2022",
    "Juin 2022": "du 12 au 24 Juin 2022",
    "Juillet 2022": "du 3 au 15 Juillet 2022"
};
const $af8d31735c159a26$export$ff269dc24610ff99 = {
    2019: new Date("06/16/2019"),
    2020: new Date("06/21/2021"),
    2021: new Date("06/21/2021"),
    "Février 2022": new Date("02/13/2022"),
    "Juin 2022": new Date("06/12/2022"),
    "Juillet 2022": new Date("07/03/2022")
};
const $af8d31735c159a26$export$8683e1f650d209d4 = {
    2019: new Date("06/28/2019"),
    2020: new Date("07/02/2021"),
    2021: new Date("07/02/2021"),
    "Février 2022": new Date("02/25/2022"),
    "Juin 2022": new Date("06/24/2022"),
    "Juillet 2022": new Date("07/15/2022")
};
const $af8d31735c159a26$export$9dd16f3194d1b970 = {
    "Février 2022": new Date("05/25/2022"),
    "Juin 2022": new Date("09/24/2022"),
    "Juillet 2022": new Date("10/15/2022")
};
const $af8d31735c159a26$export$9e783af828d4e0bf = {
    "Février 2022": new Date("02/13/2022"),
    "Juin 2022": new Date("06/12/2022"),
    "Juillet 2022": new Date("07/03/2022"),
    2021: new Date("01/01/2021")
};
const $af8d31735c159a26$export$2f09bc450f3c0501 = {
    "Février 2022": new Date("03/13/2022"),
    "Juin 2022": new Date("06/12/2022"),
    "Juillet 2022": new Date("07/03/2022")
};
const $af8d31735c159a26$export$d49b5482dba716f0 = {
    young: [
        "A lu et accepte les Conditions générales d'utilisation de la plateforme du Service national universel ;",
        "A pris connaissance des modalités de traitement de mes données personnelles ;",
        "Est volontaire, sous le contrôle des représentants légaux, pour effectuer la session 2022 du Service National Universel qui comprend la participation au séjour de cohésion puis la réalisation d'une mission d'intérêt général ;",
        "Certifie l'exactitude des renseignements fournis ;",
        "Si en terminale, a bien pris connaissance que si je suis convoqué(e) pour les épreuves du second groupe du baccalauréat entre le 6 et le 8 juillet 2022, je ne pourrai pas participer au séjour de cohésion entre le 3 et le 15 juillet 2022(il n’y aura ni dérogation sur la date d’arrivée au séjour de cohésion ni report des épreuves).", 
    ],
    parents: [
        "Confirmation d'être titulaire de l'autorité parentale / le représentant légal du volontaire ;",
        "Autorisation du volontaire à participer à la session 2022 du Service National Universel qui comprend la participation au séjour de cohésion puis la réalisation d'une mission d & apos; intérêt général ;",
        "Engagement à renseigner le consentement relatif aux droits à l'image avant le début du séjour de cohésion ;",
        "Engagement à renseigner l'utilisation d'autotest COVID avant le début du séjour de cohésion ;",
        "Engagement à remettre sous pli confidentiel la fiche sanitaire ainsi que les documents médicaux et justificatifs nécessaires à son arrivée au centre de séjour de cohésion ;",
        "Engagement à ce que le volontaire soit à jour de ses vaccinations obligatoires, c'est-à-dire anti-diphtérie, tétanos et poliomyélite (DTP), et pour les volontaires résidents de Guyane, la fièvre jaune.", 
    ]
};
const $af8d31735c159a26$export$f7babda420d975e = {
    TO_UPLOAD: "TO_UPLOAD",
    WAITING_VERIFICATION: "WAITING_VERIFICATION",
    WAITING_CORRECTION: "WAITING_CORRECTION",
    VALIDATED: "VALIDATED"
};


var $5c8f05ade1dd9559$exports = {};

$parcel$export($5c8f05ade1dd9559$exports, "translate", () => $5c8f05ade1dd9559$export$d73ee8ef04f5226a);
$parcel$export($5c8f05ade1dd9559$exports, "translateState", () => $5c8f05ade1dd9559$export$31f51929973a95d);
$parcel$export($5c8f05ade1dd9559$exports, "translateCohort", () => $5c8f05ade1dd9559$export$1955c703e7b7fa80);
$parcel$export($5c8f05ade1dd9559$exports, "translateSessionStatus", () => $5c8f05ade1dd9559$export$8932cac70d054126);
$parcel$export($5c8f05ade1dd9559$exports, "translatePhase1", () => $5c8f05ade1dd9559$export$cca3a2d76716dca1);
$parcel$export($5c8f05ade1dd9559$exports, "translatePhase2", () => $5c8f05ade1dd9559$export$1bb757a0784ba715);
$parcel$export($5c8f05ade1dd9559$exports, "translateApplication", () => $5c8f05ade1dd9559$export$bf9d8ceac41bae9d);
$parcel$export($5c8f05ade1dd9559$exports, "translateEngagement", () => $5c8f05ade1dd9559$export$3167e33eaa6b76c3);
$parcel$export($5c8f05ade1dd9559$exports, "translateFileStatusPhase1", () => $5c8f05ade1dd9559$export$ea178f6ed1eab2f0);
const $5c8f05ade1dd9559$export$d73ee8ef04f5226a = (value)=>{
    switch(value){
        case "NONE":
            return "Aucun";
        case "AFFECTED":
            return "Affectée";
        case "NOT_DONE":
            return "Non réalisée";
        case "WAITING_VALIDATION":
            return "En attente de validation";
        case "WAITING_ACCEPTATION":
            return "En attente d'acceptation";
        case "WAITING_VERIFICATION":
            return "En attente de vérification d'éligibilité";
        case "WAITING_AFFECTATION":
            return "En attente d'affectation";
        case "WAITING_CORRECTION":
            return "En attente de correction";
        case "WAITING_UPLOAD":
            return "En attente de téléversement";
        case "IN_PROGRESS":
            return "En cours";
        case "VALIDATED":
            return "Validée";
        case "DELETED":
            return "Supprimée";
        case "WAITING_LIST":
            return "Sur liste complémentaire";
        case "CONTINUOUS":
            return "Mission regroupée sur des journées";
        case "DISCONTINUOUS":
            return "Mission répartie sur des heures";
        case "AUTONOMOUS":
            return "En autonomie";
        case "DRAFT":
            return "Brouillon";
        case "REFUSED":
            return "Refusée";
        case "CANCEL":
            return "Annulée";
        case "NOT_ELIGIBLE":
            return "Non éligible";
        case "EXEMPTED":
            return "Dispensée";
        case "ILLNESS":
            return "Maladie d'un proche ou du volontaire";
        case "DEATH":
            return "Mort d'un proche ou du volontaire";
        case "ADMINISTRATION_CANCEL":
            return "Annulation du séjour par l'administration (COVID 19)";
        case "ABANDON":
            return "Abandonnée";
        case "ABANDONED":
            return "Inscription Abandonnée";
        case "ARCHIVED":
            return "Archivée";
        case "DONE":
            return "Effectuée";
        case "WITHDRAWN":
            return "Désistée";
        case "NOT_COMPLETED":
            return "Non achevée";
        case "PRESELECTED":
            return "Présélectionnée";
        case "SIGNED_CONTRACT":
            return "Contrat signé";
        case "ASSOCIATION":
            return "Association";
        case "PUBLIC":
            return "Structure publique";
        case "PRIVATE":
            return "Structure privée";
        case "OTHER":
            return "Autre";
        case "GENERAL_SCHOOL":
            return "En enseignement général ou technologique";
        case "PROFESSIONAL_SCHOOL":
            return "En enseignement professionnel";
        case "AGRICULTURAL_SCHOOL":
            return "En lycée agricole";
        case "SPECIALIZED_SCHOOL":
            return "En établissement spécialisé";
        case "APPRENTICESHIP":
            return "En apprentissage";
        case "EMPLOYEE":
            return "Salarié(e)";
        case "INDEPENDANT":
            return "Indépendant(e)";
        case "SELF_EMPLOYED":
            return "Auto-entrepreneur";
        case "ADAPTED_COMPANY":
            return "En ESAT, CAT ou en entreprise adaptée";
        case "POLE_EMPLOI":
            return "Inscrit(e) à Pôle emploi";
        case "MISSION_LOCALE":
            return "Inscrit(e) à la Mission locale";
        case "CAP_EMPLOI":
            return "Inscrit(e) à Cap emploi";
        case "NOTHING":
            return "Inscrit(e) nulle part";
        case "admin":
            return "modérateur";
        case "referent_department":
            return "Référent départemental";
        case "referent_region":
            return "Référent régional";
        case "responsible":
            return "Responsable";
        case "head_center":
            return "Chef de centre";
        case "visitor":
            return "Visiteur";
        case "supervisor":
            return "Superviseur";
        case "manager_department":
            return "Chef de projet départemental";
        case "assistant_manager_department":
            return "Chef de projet départemental adjoint";
        case "manager_department_phase2":
            return "Référent départemental phase 2";
        case "manager_phase2":
            return "Référent phase 2";
        case "secretariat":
            return "Secrétariat";
        case "coordinator":
            return "Coordinateur régional";
        case "assistant_coordinator":
            return "Coordinateur régional adjoint";
        case "recteur_region":
            return "Recteur de région académique";
        case "recteur":
            return "Recteur d'académie";
        case "vice_recteur":
            return "Vice-recteur d'académie";
        case "dasen":
            return "Directeur académique des services de l'éducation nationale (DASEN)";
        case "sgra":
            return "Secrétaire général de région académique (SGRA)";
        case "sga":
            return "Secrétaire général d'académie (SGA)";
        case "drajes":
            return "Délégué régional académique à la jeunesse, à l'engagement et aux sports (DRAJES)";
        case "INSCRIPTION":
            return "Inscription";
        case "COHESION_STAY":
            return "Séjour de cohésion";
        case "INTEREST_MISSION":
            return "Mission d'intérêt général";
        case "CONTINUE":
            return "Poursuivre le SNU";
        case "SUMMER":
            return "Vacances d'été (juillet ou août)";
        case "AUTUMN":
            return "Vacances d'automne";
        case "DECEMBER":
            return "Vacances de fin d'année (décembre)";
        case "WINTER":
            return "Vacances d'hiver";
        case "SPRING":
            return "Vacances de printemps";
        case "EVENING":
            return "En soirée";
        case "END_DAY":
            return "Pendant l'après-midi";
        case "WEEKEND":
            return "Durant le week-end";
        case "CITIZENSHIP":
            return "Citoyenneté";
        case "CULTURE":
            return "Culture";
        case "DEFENSE":
            return "Défense et mémoire";
        case "EDUCATION":
            return "Éducation";
        case "ENVIRONMENT":
            return "Environnement";
        case "HEALTH":
            return "Santé";
        case "SECURITY":
            return "Sécurité";
        case "SOLIDARITY":
            return "Solidarité";
        case "SPORT":
            return "Sport";
        case "UNIFORM":
            return "Corps en uniforme";
        case "UNKNOWN":
            return "Non connu pour le moment";
        case "FIREFIGHTER":
            return "Pompiers";
        case "POLICE":
            return "Police";
        case "ARMY":
            return "Militaire";
        case "DURING_HOLIDAYS":
            return "Sur les vacances scolaires";
        case "DURING_SCHOOL":
            return "Sur le temps scolaire";
        case "true":
            return "Oui";
        case "false":
            return "Non";
        case "male":
            return "Homme";
        case "female":
            return "Femme";
        case "father":
            return "Père";
        case "mother":
            return "Mère";
        case "representant":
            return "Représentant légal";
        case "SERVER_ERROR":
            return "Erreur serveur";
        case "NOT_FOUND":
            return "Ressource introuvable";
        case "PASSWORD_TOKEN_EXPIRED_OR_INVALID":
            return "Lien expiré ou token invalide";
        case "USER_ALREADY_REGISTERED":
            return "Utilisateur déjà inscrit";
        case "PASSWORD_NOT_VALIDATED":
            return "Votre mot de passe doit contenir au moins 12 caractères, dont une majuscule, une minuscule, un chiffre et un symbole";
        case "INVITATION_TOKEN_EXPIRED_OR_INVALID":
            return "Invitation invalide";
        case "USER_NOT_FOUND":
            return "Utilisateur introuvable";
        case "USER_NOT_EXISTS":
            return "L'utilisateur n'existe pas";
        case "OPERATION_UNAUTHORIZED":
            return "Opération non autorisée";
        case "FILE_CORRUPTED":
            return "Ce fichier est corrompu";
        case "YOUNG_ALREADY_REGISTERED":
            return "Utilisateur déjà inscrit";
        case "OPERATION_NOT_ALLOWED":
            return "Opération non autorisée";
        case "BIKE":
            return "Vélo";
        case "MOTOR":
            return "Motorisé";
        case "CARPOOLING":
            return "Covoiturage";
        case "WAITING_REALISATION":
            return "En attente de réalisation";
        case "PUBLIC_TRANSPORT":
            return "Transport en commun";
        case "IN_COMING":
            return "À venir";
        case "other":
            return "Autre";
        case "SENT":
            return "Envoyée";
        case "UNSUPPORTED_TYPE":
            return "Type non pris en charge";
        case "LINKED_OBJECT":
            return "Objet lié";
        case "NO_TEMPLATE_FOUND":
            return "Template introuvable";
        case "INVALID_BODY":
            return "Requête invalide";
        case "INVALID_PARAMS":
            return "Requête invalide";
        case "EMAIL_OR_PASSWORD_INVALID":
            return "Email ou mot de passe invalide";
        case "PASSWORD_INVALID":
            return "Mot de passe invalide";
        case "EMAIL_INVALID":
            return "Email invalide";
        case "EMAIL_ALREADY_USED":
            return "Cette adresse e-mail est déjà utilisée";
        case "EMAIL_AND_PASSWORD_REQUIRED":
            return "Email et mot de passe requis";
        case "PASSWORD_NOT_MATCH":
            return "Les mots de passe ne correspondent pas";
        case "NEW_PASSWORD_IDENTICAL_PASSWORD":
            return "Le nouveau mot de passe est identique à l'ancien";
        default:
            return value;
    }
};
const $5c8f05ade1dd9559$export$31f51929973a95d = (state)=>{
    switch(state){
        case "open":
        case "OPEN":
            return "ouvert";
        case "new":
        case "NEW":
            return "nouveau";
        case "closed":
        case "CLOSED":
            return "archivé";
        case "pending reminder":
        case "PENDING REMINDER":
            return "rappel en attente";
        case "pending closure":
        case "PENDING CLOSURE":
            return "clôture en attente";
        case "pending":
        case "PENDING":
            return "en attente";
        default:
            return state;
    }
};
const $5c8f05ade1dd9559$export$1955c703e7b7fa80 = (cohort)=>{
    switch(cohort){
        case "Février 2022":
            return "du 13 au 25 Février 2022";
        case "Juin 2022":
            return "du 12 au 24 Juin 2022";
        case "Juillet 2022":
            return "du 3 au 15 Juillet 2022";
        default:
            return cohort;
    }
};
const $5c8f05ade1dd9559$export$8932cac70d054126 = (statut)=>{
    switch(statut){
        case "VALIDATED":
            return "Validé";
        case "DRAFT":
            return "Brouillon";
        default:
            return statut;
    }
};
const $5c8f05ade1dd9559$export$cca3a2d76716dca1 = (phase1)=>{
    switch(phase1){
        case "WAITING_AFFECTATION":
            return "En attente d'affectation";
        case "AFFECTED":
            return "Affectée";
        case "EXEMPTED":
            return "Dispensée";
        case "DONE":
            return "Validée";
        case "NOT_DONE":
            return "Non réalisée";
        case "WITHDRAWN":
            return "Désistée";
        case "CANCEL":
            return "Annulée";
        case "WAITING_LIST":
            return "Sur liste complémentaire";
        case "IN_COMING":
            return "À venir";
        default:
            return phase1;
    }
};
const $5c8f05ade1dd9559$export$1bb757a0784ba715 = (phase2)=>{
    switch(phase2){
        case "WAITING_REALISATION":
            return "Inactif";
        case "IN_PROGRESS":
            return "Actif";
        case "VALIDATED":
            return "Validée";
        case "WITHDRAWN":
            return "Désistée";
        case "IN_COMING":
            return "À venir";
        default:
            return phase2;
    }
};
const $5c8f05ade1dd9559$export$bf9d8ceac41bae9d = (candidature)=>{
    switch(candidature){
        case "WAITING_VALIDATION":
            return "Candidature en attente de validation";
        case "WAITING_VERIFICATION":
            return "En attente de vérification d'éligibilité";
        case "WAITING_ACCEPTATION":
            return "Proposition de mission en attente";
        case "VALIDATED":
            return "Candidature approuvée";
        case "REFUSED":
            return "Candidature non retenue";
        case "CANCEL":
            return "Candidature annulée";
        case "IN_PROGRESS":
            return "Mission en cours";
        case "DONE":
            return "Mission effectuée";
        case "ABANDON":
            return "Mission abandonnée";
        default:
            return candidature;
    }
};
const $5c8f05ade1dd9559$export$3167e33eaa6b76c3 = (engagement)=>{
    switch(engagement){
        case "DRAFT":
            return "Brouillon";
        case "SENT":
            return "Envoyée";
        case "VALIDATED":
            return "Contrat signé";
        default:
            return engagement;
    }
};
const $5c8f05ade1dd9559$export$ea178f6ed1eab2f0 = (status)=>{
    switch(status){
        case "TO_UPLOAD":
            return "À renseigner";
        case "WAITING_VERIFICATION":
            return "En attente de vérification";
        case "WAITING_CORRECTION":
            return "En attente de correction";
        case "VALIDATED":
            return "Validé";
        case "cohesionStayMedical":
            return "fiche sanitaire";
        case "autoTestPCR":
            return "consentement à l’utilisation d’autotest COVID";
        case "imageRight":
            return "consentement de droit à l'image";
        case "rules":
            return "règlement intérieur";
        default:
            return status;
    }
};


var $ff17e7637d9576cd$exports = {};

$parcel$export($ff17e7637d9576cd$exports, "departmentToAcademy", () => $ff17e7637d9576cd$export$6215b72979266a7c);
$parcel$export($ff17e7637d9576cd$exports, "academyToDepartments", () => $ff17e7637d9576cd$export$efdab54cf34d0564);
$parcel$export($ff17e7637d9576cd$exports, "academyList", () => $ff17e7637d9576cd$export$86c9cf41dcdb96a5);
const $ff17e7637d9576cd$export$6215b72979266a7c = {
    Allier: "Clermont-Ferrand",
    Cantal: "Clermont-Ferrand",
    "Haute-Loire": "Clermont-Ferrand",
    "Puy-de-Dôme": "Clermont-Ferrand",
    Ardèche: "Grenoble",
    Drôme: "Grenoble",
    Isère: "Grenoble",
    Savoie: "Grenoble",
    "Haute-Savoie": "Grenoble",
    Ain: "Lyon",
    Loire: "Lyon",
    Rhône: "Lyon",
    Doubs: "Besançon",
    Jura: "Besançon",
    "Haute-Saône": "Besançon",
    "Territoire de Belfort": "Besançon",
    "Côte-d'Or": "Dijon",
    Nièvre: "Dijon",
    "Saône-et-Loire": "Dijon",
    Yonne: "Dijon",
    "Côtes-d'Armor": "Rennes",
    Finistère: "Rennes",
    "Ille-et-Vilaine": "Rennes",
    Morbihan: "Rennes",
    Cher: "Orléans-Tours",
    "Eure-et-Loir": "Orléans-Tours",
    Indre: "Orléans-Tours",
    "Indre-et-Loire": "Orléans-Tours",
    "Loir-et-Cher": "Orléans-Tours",
    Loiret: "Orléans-Tours",
    "Corse-du-Sud": "Corse",
    "Haute-Corse": "Corse",
    "Meurthe-et-Moselle": "Nancy-Metz",
    Meuse: "Nancy-Metz",
    Moselle: "Nancy-Metz",
    Vosges: "Nancy-Metz",
    Ardennes: "Reims",
    Aube: "Reims",
    Marne: "Reims",
    "Haute-Marne": "Reims",
    "Bas-Rhin": "Strasbourg",
    "Haut-Rhin": "Strasbourg",
    Aisne: "Amiens",
    Oise: "Amiens",
    Somme: "Amiens",
    Nord: "Lille",
    "Pas-de-Calais": "Lille",
    "Seine-et-Marne": "Créteil",
    "Seine-Saint-Denis": "Créteil",
    "Val-de-Marne": "Créteil",
    Paris: "Paris",
    Yvelines: "Versailles",
    Essonne: "Versailles",
    "Hauts-de-Seine": "Versailles",
    "Val-d'Oise": "Versailles",
    Calvados: "Normandie",
    Eure: "Normandie",
    Manche: "Normandie",
    Orne: "Normandie",
    "Seine-Maritime": "Normandie",
    Dordogne: "Bordeaux",
    Gironde: "Bordeaux",
    Landes: "Bordeaux",
    "Lot-et-Garonne": "Bordeaux",
    "Pyrénées-Atlantiques": "Bordeaux",
    Corrèze: "Limoges",
    Creuse: "Limoges",
    "Haute-Vienne": "Limoges",
    Charente: "Poitiers",
    "Charente-Maritime": "Poitiers",
    "Deux-Sèvres": "Poitiers",
    Vienne: "Poitiers",
    Aude: "Montpellier",
    Gard: "Montpellier",
    Hérault: "Montpellier",
    Lozère: "Montpellier",
    "Pyrénées-Orientales": "Montpellier",
    Ariège: "Toulouse",
    Aveyron: "Toulouse",
    "Haute-Garonne": "Toulouse",
    Gers: "Toulouse",
    Lot: "Toulouse",
    "Hautes-Pyrénées": "Toulouse",
    Tarn: "Toulouse",
    "Tarn-et-Garonne": "Toulouse",
    "Loire-Atlantique": "Nantes",
    "Maine-et-Loire": "Nantes",
    Mayenne: "Nantes",
    Sarthe: "Nantes",
    Vendée: "Nantes",
    "Alpes-de-Haute-Provence": "Aix-Marseille",
    "Hautes-Alpes": "Aix-Marseille",
    "Bouches-du-Rhône": "Aix-Marseille",
    Vaucluse: "Aix-Marseille",
    "Alpes-Maritimes": "Nice",
    Var: "Nice",
    Guadeloupe: "Guadeloupe",
    Martinique: "Martinique",
    Mayotte: "Mayotte",
    Guyane: "Guyane",
    "La Réunion": "La Réunion",
    "Nouvelle-Calédonie": "Nouvelle-Calédonie",
    "Polynésie française": "Polynésie française",
    "Wallis-et-Futuna": "Wallis-et-Futuna",
    "Saint-Pierre-et-Miquelon": "Saint-Pierre-et-Miquelon"
};
const $ff17e7637d9576cd$export$efdab54cf34d0564 = {
    "Clermont-Ferrand": [
        "Allier",
        "Cantal",
        "Haute-Loire",
        "Puy-de-Dôme"
    ],
    Grenoble: [
        "Ardèche",
        "Drôme",
        "Isère",
        "Savoie",
        "Haute-Savoie"
    ],
    Lyon: [
        "Ain",
        "Loire",
        "Rhône"
    ],
    Besançon: [
        "Doubs",
        "Jura",
        "Haute-Saône",
        "Territoire de Belfort"
    ],
    Dijon: [
        "Côte-d'Or",
        "Nièvre",
        "Saône-et-Loire",
        "Yonne"
    ],
    Rennes: [
        "Côtes-d'Armor",
        "Finistère",
        "Ille-et-Vilaine",
        "Morbihan"
    ],
    "Orléans-Tours": [
        "Cher",
        "Eure-et-Loir",
        "Indre",
        "Indre-et-Loire",
        "Loir-et-Cher",
        "Loiret"
    ],
    Corse: [
        "Corse-du-Sud",
        "Haute-Corse"
    ],
    "Nancy-Metz": [
        "Meurthe-et-Moselle",
        "Meuse",
        "Moselle",
        "Vosges"
    ],
    Reims: [
        "Ardennes",
        "Aube",
        "Marne",
        "Haute-Marne"
    ],
    Strasbourg: [
        "Bas-Rhin",
        "Haut-Rhin"
    ],
    Amiens: [
        "Aisne",
        "Oise",
        "Somme"
    ],
    Lille: [
        "Nord",
        "Pas-de-Calais"
    ],
    Créteil: [
        "Seine-et-Marne",
        "Seine-Saint-Denis",
        "Val-de-Marne"
    ],
    Paris: [
        "Paris"
    ],
    Versailles: [
        "Yvelines",
        "Essonne",
        "Hauts-de-Seine",
        "Val-d'Oise"
    ],
    Normandie: [
        "Calvados",
        "Eure",
        "Manche",
        "Orne",
        "Seine-Maritime"
    ],
    Bordeaux: [
        "Dordogne",
        "Gironde",
        "Landes",
        "Lot-et-Garonne",
        "Pyrénées-Atlantiques"
    ],
    Limoges: [
        "Corrèze",
        "Creuse",
        "Haute-Vienne"
    ],
    Poitiers: [
        "Charente",
        "Charente-Maritime",
        "Deux-Sèvres",
        "Vienne"
    ],
    Montpellier: [
        "Aude",
        "Gard",
        "Hérault",
        "Lozère",
        "Pyrénées-Orientales"
    ],
    Toulouse: [
        "Ariège",
        "Aveyron",
        "Haute-Garonne",
        "Gers",
        "Lot",
        "Hautes-Pyrénées",
        "Tarn",
        "Tarn-et-Garonne"
    ],
    Nantes: [
        "Loire-Atlantique",
        "Maine-et-Loire",
        "Mayenne",
        "Sarthe",
        "Vendée"
    ],
    "Aix-Marseille": [
        "Alpes-de-Haute-Provence",
        "Hautes-Alpes",
        "Bouches-du-Rhône",
        "Vaucluse"
    ],
    Nice: [
        "Alpes-Maritimes",
        "Var"
    ],
    Guadeloupe: "Guadeloupe",
    Martinique: "Martinique",
    Mayotte: "Mayotte",
    Guyane: "Guyane",
    "La Réunion": "La Réunion",
    "Nouvelle-Calédonie": "Nouvelle-Calédonie",
    "Polynésie française": "Polynésie française",
    "Wallis-et-Futuna": "Wallis-et-Futuna",
    "Saint-Pierre-et-Miquelon": "Saint-Pierre-et-Miquelon"
};
const $ff17e7637d9576cd$export$86c9cf41dcdb96a5 = [
    ...new Set(Object.values($ff17e7637d9576cd$export$6215b72979266a7c))
];


var $16d2c5c76e3787af$exports = {};

$parcel$export($16d2c5c76e3787af$exports, "colors", () => $16d2c5c76e3787af$export$8f45430ccf837300);
$parcel$export($16d2c5c76e3787af$exports, "PHASE_STATUS_COLOR", () => $16d2c5c76e3787af$export$69d148ea73eb7f08);
$parcel$export($16d2c5c76e3787af$exports, "APPLICATION_STATUS_COLORS", () => $16d2c5c76e3787af$export$e08e31c1b7a31962);
$parcel$export($16d2c5c76e3787af$exports, "YOUNG_STATUS_COLORS", () => $16d2c5c76e3787af$export$deb90391078f7d44);
$parcel$export($16d2c5c76e3787af$exports, "MISSION_STATUS_COLORS", () => $16d2c5c76e3787af$export$3eab9b391bc8db69);
$parcel$export($16d2c5c76e3787af$exports, "STRUCTURE_STATUS_COLORS", () => $16d2c5c76e3787af$export$a9b762e76857eb29);
$parcel$export($16d2c5c76e3787af$exports, "CONTRACT_STATUS_COLORS", () => $16d2c5c76e3787af$export$f3196b2ea18147ac);
const $16d2c5c76e3787af$export$8f45430ccf837300 = {
    purple: "#5145cd",
    blue: "#2563EB",
    transPurple: "#5145cd66",
    darkPurple: "#382F79",
    green: "#6CC763",
    darkGreen: "#1C7713",
    red: "#BE3B12",
    lightOrange: "#ffa987",
    orange: "#FE7B52",
    yellow: "#FEB951",
    pink: "#F8A9AD",
    lightGold: "#d9bb71",
    extraLightGrey: "#fafafa",
    lightGrey: "#d7d7d7",
    grey: "#6e757c",
    lightBlueGrey: "#e6ebfa",
    darkBlue: "#00008b",
    black: "#111111"
};
const $16d2c5c76e3787af$export$69d148ea73eb7f08 = {
    VALIDATED: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    DONE: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    CANCEL: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    EXEMPTED: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    IN_PROGRESS: $16d2c5c76e3787af$export$8f45430ccf837300.purple,
    AFFECTED: $16d2c5c76e3787af$export$8f45430ccf837300.purple,
    WITHDRAWN: $16d2c5c76e3787af$export$8f45430ccf837300.red,
    WAITING_ACCEPTATION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow
};
const $16d2c5c76e3787af$export$e08e31c1b7a31962 = {
    WAITING_VALIDATION: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    WAITING_VERIFICATION: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    WAITING_ACCEPTATION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    VALIDATED: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    DONE: $16d2c5c76e3787af$export$8f45430ccf837300.darkGreen,
    REFUSED: $16d2c5c76e3787af$export$8f45430ccf837300.pink,
    CANCEL: $16d2c5c76e3787af$export$8f45430ccf837300.lightOrange,
    IN_PROGRESS: $16d2c5c76e3787af$export$8f45430ccf837300.darkPurple,
    ABANDON: $16d2c5c76e3787af$export$8f45430ccf837300.red
};
const $16d2c5c76e3787af$export$deb90391078f7d44 = {
    WAITING_VALIDATION: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    WAITING_CORRECTION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    VALIDATED: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    REFUSED: $16d2c5c76e3787af$export$8f45430ccf837300.pink,
    IN_PROGRESS: $16d2c5c76e3787af$export$8f45430ccf837300.darkPurple,
    WITHDRAWN: $16d2c5c76e3787af$export$8f45430ccf837300.lightGrey,
    WAITING_REALISATION: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    AFFECTED: $16d2c5c76e3787af$export$8f45430ccf837300.darkPurple,
    WAITING_AFFECTATION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    WAITING_ACCEPTATION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    NOT_ELIGIBLE: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    CANCEL: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    EXEMPTED: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    DONE: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    NOT_DONE: $16d2c5c76e3787af$export$8f45430ccf837300.red,
    WAITING_LIST: $16d2c5c76e3787af$export$8f45430ccf837300.lightOrange,
    DELETED: $16d2c5c76e3787af$export$8f45430ccf837300.lightGrey,
    ABANDONED: $16d2c5c76e3787af$export$8f45430ccf837300.red
};
const $16d2c5c76e3787af$export$3eab9b391bc8db69 = {
    WAITING_VALIDATION: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    WAITING_CORRECTION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    VALIDATED: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    DRAFT: $16d2c5c76e3787af$export$8f45430ccf837300.lightGold,
    REFUSED: $16d2c5c76e3787af$export$8f45430ccf837300.pink,
    CANCEL: $16d2c5c76e3787af$export$8f45430ccf837300.lightOrange,
    ARCHIVED: $16d2c5c76e3787af$export$8f45430ccf837300.lightGrey
};
const $16d2c5c76e3787af$export$a9b762e76857eb29 = {
    WAITING_VALIDATION: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    WAITING_CORRECTION: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    VALIDATED: $16d2c5c76e3787af$export$8f45430ccf837300.green,
    DRAFT: $16d2c5c76e3787af$export$8f45430ccf837300.lightGold
};
const $16d2c5c76e3787af$export$f3196b2ea18147ac = {
    DRAFT: $16d2c5c76e3787af$export$8f45430ccf837300.yellow,
    SENT: $16d2c5c76e3787af$export$8f45430ccf837300.orange,
    VALIDATED: $16d2c5c76e3787af$export$8f45430ccf837300.green
};


var $2f6ca5261b854f08$exports = {};

$parcel$export($2f6ca5261b854f08$exports, "formatDay", () => $2f6ca5261b854f08$export$a7f242eff11c1345);
$parcel$export($2f6ca5261b854f08$exports, "formatDateFR", () => $2f6ca5261b854f08$export$d4b0b6c4d7b35619);
$parcel$export($2f6ca5261b854f08$exports, "formatLongDateFR", () => $2f6ca5261b854f08$export$5987e69d7c75ed2f);
$parcel$export($2f6ca5261b854f08$exports, "formatDateFRTimezoneUTC", () => $2f6ca5261b854f08$export$85ac3265b15250b6);
$parcel$export($2f6ca5261b854f08$exports, "formatLongDateUTC", () => $2f6ca5261b854f08$export$51d0a3a78d1db90a);
$parcel$export($2f6ca5261b854f08$exports, "formatLongDateUTCWithoutTime", () => $2f6ca5261b854f08$export$21cc0cac9cb4f340);
$parcel$export($2f6ca5261b854f08$exports, "formatStringLongDate", () => $2f6ca5261b854f08$export$6e71cb020548e3d1);
$parcel$export($2f6ca5261b854f08$exports, "formatStringDate", () => $2f6ca5261b854f08$export$35aee217b3988d08);
$parcel$export($2f6ca5261b854f08$exports, "formatStringDateTimezoneUTC", () => $2f6ca5261b854f08$export$19e24656c41d924);
$parcel$export($2f6ca5261b854f08$exports, "dateForDatePicker", () => $2f6ca5261b854f08$export$b9b1fe0f5b4ade22);
$parcel$export($2f6ca5261b854f08$exports, "getAge", () => $2f6ca5261b854f08$export$b0932c69ff376ad3);
$parcel$export($2f6ca5261b854f08$exports, "getLimitDateForPhase2", () => $2f6ca5261b854f08$export$cdce9e87e4a0da9);
const $2f6ca5261b854f08$export$a7f242eff11c1345 = (date)=>{
    if (!date) return "-";
    return new Date(date).toISOString().split("T")[0];
};
const $2f6ca5261b854f08$export$d4b0b6c4d7b35619 = (d)=>{
    if (!d) return "-";
    const date = new Date(d);
    return date.toLocaleDateString("fr-FR");
};
const $2f6ca5261b854f08$export$5987e69d7c75ed2f = (d)=>{
    if (!d) return "-";
    const date = new Date(d);
    return date.toLocaleDateString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit"
    });
};
const $2f6ca5261b854f08$export$85ac3265b15250b6 = (d)=>{
    if (!d) return "-";
    const date = new Date(d);
    return date.toLocaleDateString("fr-FR", {
        timeZone: "UTC"
    });
};
const $2f6ca5261b854f08$export$51d0a3a78d1db90a = (d)=>{
    if (!d) return "-";
    const date = new Date(d);
    return date.toLocaleDateString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC"
    });
};
const $2f6ca5261b854f08$export$21cc0cac9cb4f340 = (d)=>{
    if (!d) return "-";
    const date = new Date(d);
    return date.toLocaleDateString("fr-FR", {
        timeZone: "UTC"
    });
};
const $2f6ca5261b854f08$export$6e71cb020548e3d1 = (date)=>{
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};
const $2f6ca5261b854f08$export$35aee217b3988d08 = (date)=>{
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
const $2f6ca5261b854f08$export$19e24656c41d924 = (date)=>{
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    });
};
function $2f6ca5261b854f08$export$b9b1fe0f5b4ade22(d) {
    return new Date(d).toISOString().split("T")[0];
}
function $2f6ca5261b854f08$export$b0932c69ff376ad3(d) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    const diffTime = Math.abs(date - now);
    const age = Math.floor(diffTime / 31557600000);
    if (!age || isNaN(age)) return "?";
    return age;
}
const $2f6ca5261b854f08$export$cdce9e87e4a0da9 = (cohort)=>{
    if (cohort === "2019") return "23 mars 2021";
    if (cohort === "2020") return "31 décembre 2021 ";
    return "30 juin 2022";
};


var $2c65a340d7abcd67$exports = {};

$parcel$export($2c65a340d7abcd67$exports, "download", () => $2c65a340d7abcd67$export$24422be91ad4011f);
function $2c65a340d7abcd67$export$24422be91ad4011f(file, fileName) {
    if (window.navigator.msSaveOrOpenBlob) //IE11 & Edge
    window.navigator.msSaveOrOpenBlob(file, fileName);
    else {
        //Other browsers
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
}



var $83a86f48478e68f7$exports = {};

$parcel$export($83a86f48478e68f7$exports, "putLocation", () => $83a86f48478e68f7$export$a8d8925c2da6c52e);
$parcel$export($83a86f48478e68f7$exports, "departmentLookUp", () => $83a86f48478e68f7$export$736c012b07910e78);
$parcel$export($83a86f48478e68f7$exports, "departmentList", () => $83a86f48478e68f7$export$61fd3560eb85b7c9);
$parcel$export($83a86f48478e68f7$exports, "getDepartmentNumber", () => $83a86f48478e68f7$export$a6bdb5f82fc881c7);
$parcel$export($83a86f48478e68f7$exports, "getDepartmentByZip", () => $83a86f48478e68f7$export$a448ed76622ee04c);
$parcel$export($83a86f48478e68f7$exports, "getRegionByZip", () => $83a86f48478e68f7$export$7b40f7a89c36af6e);
$parcel$export($83a86f48478e68f7$exports, "department2region", () => $83a86f48478e68f7$export$e33ab1c4d44a2879);
$parcel$export($83a86f48478e68f7$exports, "regionList", () => $83a86f48478e68f7$export$2481adcbd6e79bce);
$parcel$export($83a86f48478e68f7$exports, "region2department", () => $83a86f48478e68f7$export$323e43de540baa5b);
const $83a86f48478e68f7$export$a8d8925c2da6c52e = async (city, zip)=>{
    // try with municipality = city + zip
    const responseMunicipality = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(city + " " + zip)}&type=municipality`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const resMunicipality = await responseMunicipality.json();
    if (resMunicipality.features.length > 0) return {
        lon: resMunicipality.features[0].geometry.coordinates[0],
        lat: resMunicipality.features[0].geometry.coordinates[1]
    };
    // try with locality = city + zip
    const responseLocality = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(zip + " " + city)}&type=locality`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const resLocality = await responseLocality.json();
    if (resLocality.features.length > 0) return {
        lon: resLocality.features[0].geometry.coordinates[0],
        lat: resLocality.features[0].geometry.coordinates[1]
    };
    // try with postcode = zip
    let url = `https://api-adresse.data.gouv.fr/search/?q=${city || zip}`;
    if (zip) url += `&postcode=${zip}`;
    const responsePostcode = await fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const resPostcode = await responsePostcode.json();
    if (resPostcode.features.length > 0) return {
        lon: resPostcode.features[0].geometry.coordinates[0],
        lat: resPostcode.features[0].geometry.coordinates[1]
    };
    return {
        lon: 2.352222,
        lat: 48.856613
    };
};
const $83a86f48478e68f7$export$736c012b07910e78 = {
    "01": "Ain",
    "02": "Aisne",
    "03": "Allier",
    "04": "Alpes-de-Haute-Provence",
    "05": "Hautes-Alpes",
    "06": "Alpes-Maritimes",
    "07": "Ardèche",
    "08": "Ardennes",
    "09": "Ariège",
    10: "Aube",
    11: "Aude",
    12: "Aveyron",
    13: "Bouches-du-Rhône",
    14: "Calvados",
    15: "Cantal",
    16: "Charente",
    17: "Charente-Maritime",
    18: "Cher",
    19: "Corrèze",
    20: "Corse",
    21: "Côte-d'Or",
    22: "Côtes-d'Armor",
    23: "Creuse",
    24: "Dordogne",
    25: "Doubs",
    26: "Drôme",
    27: "Eure",
    28: "Eure-et-Loir",
    29: "Finistère",
    "2A": "Corse-du-Sud",
    "2B": "Haute-Corse",
    30: "Gard",
    31: "Haute-Garonne",
    32: "Gers",
    33: "Gironde",
    34: "Hérault",
    35: "Ille-et-Vilaine",
    36: "Indre",
    37: "Indre-et-Loire",
    38: "Isère",
    39: "Jura",
    40: "Landes",
    41: "Loir-et-Cher",
    42: "Loire",
    43: "Haute-Loire",
    44: "Loire-Atlantique",
    45: "Loiret",
    46: "Lot",
    47: "Lot-et-Garonne",
    48: "Lozère",
    49: "Maine-et-Loire",
    50: "Manche",
    51: "Marne",
    52: "Haute-Marne",
    53: "Mayenne",
    54: "Meurthe-et-Moselle",
    55: "Meuse",
    56: "Morbihan",
    57: "Moselle",
    58: "Nièvre",
    59: "Nord",
    60: "Oise",
    61: "Orne",
    62: "Pas-de-Calais",
    63: "Puy-de-Dôme",
    64: "Pyrénées-Atlantiques",
    65: "Hautes-Pyrénées",
    66: "Pyrénées-Orientales",
    67: "Bas-Rhin",
    68: "Haut-Rhin",
    69: "Rhône",
    70: "Haute-Saône",
    71: "Saône-et-Loire",
    72: "Sarthe",
    73: "Savoie",
    74: "Haute-Savoie",
    75: "Paris",
    76: "Seine-Maritime",
    77: "Seine-et-Marne",
    78: "Yvelines",
    79: "Deux-Sèvres",
    80: "Somme",
    81: "Tarn",
    82: "Tarn-et-Garonne",
    83: "Var",
    84: "Vaucluse",
    85: "Vendée",
    86: "Vienne",
    87: "Haute-Vienne",
    88: "Vosges",
    89: "Yonne",
    90: "Territoire de Belfort",
    91: "Essonne",
    92: "Hauts-de-Seine",
    93: "Seine-Saint-Denis",
    94: "Val-de-Marne",
    95: "Val-d'Oise",
    971: "Guadeloupe",
    "971b": "Saint-Barthélemy",
    972: "Martinique",
    973: "Guyane",
    974: "La Réunion",
    975: "Saint-Pierre-et-Miquelon",
    976: "Mayotte",
    978: "Saint-Martin",
    984: "Terres australes et antarctiques françaises",
    986: "Wallis-et-Futuna",
    987: "Polynésie française",
    988: "Nouvelle-Calédonie"
};
const $83a86f48478e68f7$export$61fd3560eb85b7c9 = Object.values($83a86f48478e68f7$export$736c012b07910e78);
const $83a86f48478e68f7$export$a6bdb5f82fc881c7 = (d)=>Object.keys($83a86f48478e68f7$export$736c012b07910e78).find((key)=>$83a86f48478e68f7$export$736c012b07910e78[key] === d
    )
;
const $83a86f48478e68f7$export$a448ed76622ee04c = (zip)=>{
    if (!zip) return;
    if (zip.length !== 5) return;
    const departmentCode = zip.substr(0, 2);
    return $83a86f48478e68f7$export$736c012b07910e78[departmentCode];
};
const $83a86f48478e68f7$export$7b40f7a89c36af6e = (zip)=>{
    if (!zip) return;
    if (zip.length !== 5) return;
    const departmentCode = zip.substr(0, 2);
    const department = $83a86f48478e68f7$export$736c012b07910e78[departmentCode];
    return $83a86f48478e68f7$export$e33ab1c4d44a2879[department];
};
const $83a86f48478e68f7$export$2481adcbd6e79bce = [
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Bretagne",
    "Centre-Val de Loire",
    "Corse",
    "Grand Est",
    "Hauts-de-France",
    "Île-de-France",
    "Normandie",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d'Azur",
    "Guadeloupe",
    "Martinique",
    "Guyane",
    "La Réunion",
    "Saint-Pierre-et-Miquelon",
    "Mayotte",
    "Terres australes et antarctiques françaises",
    "Wallis-et-Futuna",
    "Polynésie française",
    "Nouvelle-Calédonie", 
];
const $83a86f48478e68f7$export$e33ab1c4d44a2879 = {
    Ain: "Auvergne-Rhône-Alpes",
    Aisne: "Hauts-de-France",
    Allier: "Auvergne-Rhône-Alpes",
    "Alpes-de-Haute-Provence": "Provence-Alpes-Côte d'Azur",
    "Hautes-Alpes": "Provence-Alpes-Côte d'Azur",
    "Alpes-Maritimes": "Provence-Alpes-Côte d'Azur",
    Ardèche: "Auvergne-Rhône-Alpes",
    Ardennes: "Grand Est",
    Ariège: "Occitanie",
    Aube: "Grand Est",
    Aude: "Occitanie",
    Aveyron: "Occitanie",
    "Bouches-du-Rhône": "Provence-Alpes-Côte d'Azur",
    Calvados: "Normandie",
    Cantal: "Auvergne-Rhône-Alpes",
    Charente: "Nouvelle-Aquitaine",
    "Charente-Maritime": "Nouvelle-Aquitaine",
    Cher: "Centre-Val de Loire",
    Corrèze: "Nouvelle-Aquitaine",
    "Côte-d'Or": "Bourgogne-Franche-Comté",
    "Côtes-d'Armor": "Bretagne",
    Creuse: "Nouvelle-Aquitaine",
    Dordogne: "Nouvelle-Aquitaine",
    Doubs: "Bourgogne-Franche-Comté",
    Drôme: "Auvergne-Rhône-Alpes",
    Eure: "Normandie",
    "Eure-et-Loir": "Centre-Val de Loire",
    Finistère: "Bretagne",
    "Corse-du-Sud": "Corse",
    "Haute-Corse": "Corse",
    Gard: "Occitanie",
    "Haute-Garonne": "Occitanie",
    Gers: "Occitanie",
    Gironde: "Nouvelle-Aquitaine",
    Hérault: "Occitanie",
    "Ille-et-Vilaine": "Bretagne",
    Indre: "Centre-Val de Loire",
    "Indre-et-Loire": "Centre-Val de Loire",
    Isère: "Auvergne-Rhône-Alpes",
    Jura: "Bourgogne-Franche-Comté",
    Landes: "Nouvelle-Aquitaine",
    "Loir-et-Cher": "Centre-Val de Loire",
    Loire: "Auvergne-Rhône-Alpes",
    "Haute-Loire": "Auvergne-Rhône-Alpes",
    "Loire-Atlantique": "Pays de la Loire",
    Loiret: "Centre-Val de Loire",
    Lot: "Occitanie",
    "Lot-et-Garonne": "Nouvelle-Aquitaine",
    Lozère: "Occitanie",
    "Maine-et-Loire": "Pays de la Loire",
    Manche: "Normandie",
    Marne: "Grand Est",
    "Haute-Marne": "Grand Est",
    Mayenne: "Pays de la Loire",
    "Meurthe-et-Moselle": "Grand Est",
    Meuse: "Grand Est",
    Morbihan: "Bretagne",
    Moselle: "Grand Est",
    Nièvre: "Bourgogne-Franche-Comté",
    Nord: "Hauts-de-France",
    Oise: "Hauts-de-France",
    Orne: "Normandie",
    "Pas-de-Calais": "Hauts-de-France",
    "Puy-de-Dôme": "Auvergne-Rhône-Alpes",
    "Pyrénées-Atlantiques": "Nouvelle-Aquitaine",
    "Hautes-Pyrénées": "Occitanie",
    "Pyrénées-Orientales": "Occitanie",
    "Bas-Rhin": "Grand Est",
    "Haut-Rhin": "Grand Est",
    Rhône: "Auvergne-Rhône-Alpes",
    "Haute-Saône": "Bourgogne-Franche-Comté",
    "Saône-et-Loire": "Bourgogne-Franche-Comté",
    Sarthe: "Pays de la Loire",
    Savoie: "Auvergne-Rhône-Alpes",
    "Haute-Savoie": "Auvergne-Rhône-Alpes",
    Paris: "Île-de-France",
    "Seine-Maritime": "Normandie",
    "Seine-et-Marne": "Île-de-France",
    Yvelines: "Île-de-France",
    "Deux-Sèvres": "Nouvelle-Aquitaine",
    Somme: "Hauts-de-France",
    Tarn: "Occitanie",
    "Tarn-et-Garonne": "Occitanie",
    Var: "Provence-Alpes-Côte d'Azur",
    Vaucluse: "Provence-Alpes-Côte d'Azur",
    Vendée: "Pays de la Loire",
    Vienne: "Nouvelle-Aquitaine",
    "Haute-Vienne": "Nouvelle-Aquitaine",
    Vosges: "Grand Est",
    Yonne: "Bourgogne-Franche-Comté",
    "Territoire de Belfort": "Bourgogne-Franche-Comté",
    Essonne: "Île-de-France",
    "Hauts-de-Seine": "Île-de-France",
    "Seine-Saint-Denis": "Île-de-France",
    "Val-de-Marne": "Île-de-France",
    "Val-d'Oise": "Île-de-France",
    Guadeloupe: "Guadeloupe",
    Martinique: "Martinique",
    Guyane: "Guyane",
    "La Réunion": "La Réunion",
    "Saint-Pierre-et-Miquelon": "Saint-Pierre-et-Miquelon",
    Mayotte: "Mayotte",
    "Saint-Barthélemy": "Guadeloupe",
    "Saint-Martin": "Guadeloupe",
    "Terres australes et antarctiques françaises": "Terres australes et antarctiques françaises",
    "Wallis-et-Futuna": "Wallis-et-Futuna",
    "Polynésie française": "Polynésie française",
    "Nouvelle-Calédonie": "Nouvelle-Calédonie"
};
const $83a86f48478e68f7$export$323e43de540baa5b = {
    "Auvergne-Rhône-Alpes": [
        "Ain",
        "Allier",
        "Ardèche",
        "Cantal",
        "Drôme",
        "Isère",
        "Loire",
        "Haute-Loire",
        "Puy-de-Dôme",
        "Rhône",
        "Savoie",
        "Haute-Savoie"
    ],
    "Bourgogne-Franche-Comté": [
        "Côte-d'Or",
        "Doubs",
        "Jura",
        "Nièvre",
        "Haute-Saône",
        "Saône-et-Loire",
        "Yonne",
        "Territoire de Belfort"
    ],
    Bretagne: [
        "Côtes-d'Armor",
        "Finistère",
        "Ille-et-Vilaine",
        "Morbihan"
    ],
    "Centre-Val de Loire": [
        "Cher",
        "Eure-et-Loir",
        "Indre",
        "Indre-et-Loire",
        "Loir-et-Cher",
        "Loiret"
    ],
    Corse: [
        "Corse-du-Sud",
        "Haute-Corse"
    ],
    "Grand Est": [
        "Ardennes",
        "Aube",
        "Marne",
        "Haute-Marne",
        "Meurthe-et-Moselle",
        "Meuse",
        "Moselle",
        "Bas-Rhin",
        "Haut-Rhin",
        "Vosges"
    ],
    "Hauts-de-France": [
        "Aisne",
        "Nord",
        "Oise",
        "Pas-de-Calais",
        "Somme"
    ],
    "Île-de-France": [
        "Paris",
        "Seine-et-Marne",
        "Yvelines",
        "Essonne",
        "Hauts-de-Seine",
        "Seine-Saint-Denis",
        "Val-de-Marne",
        "Val-d'Oise"
    ],
    Normandie: [
        "Calvados",
        "Eure",
        "Manche",
        "Orne",
        "Seine-Maritime"
    ],
    "Nouvelle-Aquitaine": [
        "Charente",
        "Charente-Maritime",
        "Corrèze",
        "Creuse",
        "Dordogne",
        "Gironde",
        "Landes",
        "Lot-et-Garonne",
        "Pyrénées-Atlantiques",
        "Deux-Sèvres",
        "Vienne",
        "Haute-Vienne", 
    ],
    Occitanie: [
        "Ariège",
        "Aude",
        "Aveyron",
        "Gard",
        "Haute-Garonne",
        "Gers",
        "Hérault",
        "Lot",
        "Lozère",
        "Hautes-Pyrénées",
        "Pyrénées-Orientales",
        "Tarn",
        "Tarn-et-Garonne"
    ],
    "Pays de la Loire": [
        "Loire-Atlantique",
        "Maine-et-Loire",
        "Mayenne",
        "Sarthe",
        "Vendée"
    ],
    "Provence-Alpes-Côte d'Azur": [
        "Alpes-de-Haute-Provence",
        "Hautes-Alpes",
        "Alpes-Maritimes",
        "Bouches-du-Rhône",
        "Var",
        "Vaucluse"
    ],
    Guadeloupe: [
        "Guadeloupe",
        "Saint-Martin",
        "Saint-Barthélemy"
    ],
    Martinique: [
        "Martinique"
    ],
    Guyane: [
        "Guyane"
    ],
    "La Réunion": [
        "La Réunion"
    ],
    "Saint-Pierre-et-Miquelon": [
        "Saint-Pierre-et-Miquelon"
    ],
    Mayotte: [
        "Mayotte"
    ],
    "Terres australes et antarctiques françaises": [
        "Terres australes et antarctiques françaises"
    ],
    "Wallis-et-Futuna": [
        "Wallis-et-Futuna"
    ],
    "Polynésie française": [
        "Polynésie française"
    ],
    "Nouvelle-Calédonie": [
        "Nouvelle-Calédonie"
    ]
};



var $4447cd59100c69cb$exports = {};

$parcel$export($4447cd59100c69cb$exports, "ticketStates", () => $4447cd59100c69cb$export$727f93b5e5782d0d);
$parcel$export($4447cd59100c69cb$exports, "ticketStateNameById", () => $4447cd59100c69cb$export$767fc8949517976e);
$parcel$export($4447cd59100c69cb$exports, "ticketStateIdByName", () => $4447cd59100c69cb$export$cf6c8fb5edce4b7b);
$parcel$export($4447cd59100c69cb$exports, "totalOpenedTickets", () => $4447cd59100c69cb$export$29cb10c1571ef51);
$parcel$export($4447cd59100c69cb$exports, "totalNewTickets", () => $4447cd59100c69cb$export$916ba08af9a42b70);
$parcel$export($4447cd59100c69cb$exports, "totalClosedTickets", () => $4447cd59100c69cb$export$a3afd672d7664b57);
const $4447cd59100c69cb$export$727f93b5e5782d0d = {
    1: "new",
    2: "open",
    3: "pending reminder",
    4: "closed",
    7: "pending closure"
};
const $4447cd59100c69cb$export$767fc8949517976e = (id)=>$4447cd59100c69cb$export$727f93b5e5782d0d[id]
;
const $4447cd59100c69cb$export$cf6c8fb5edce4b7b = (name)=>{
    return Number(Object.keys($4447cd59100c69cb$export$727f93b5e5782d0d).reduce((ret, key)=>{
        ret[$4447cd59100c69cb$export$727f93b5e5782d0d[key]] = key;
        return ret;
    }, {})[name]);
};
const $4447cd59100c69cb$export$29cb10c1571ef51 = (tickets)=>{
    return (tickets || []).filter((ticket)=>(ticket || {}).status.toLowerCase() === "open"
    ).length;
};
const $4447cd59100c69cb$export$916ba08af9a42b70 = (tickets)=>{
    return (tickets || []).filter((ticket)=>(ticket || {}).status.toLowerCase() === "new"
    ).length;
};
const $4447cd59100c69cb$export$a3afd672d7664b57 = (tickets)=>{
    return (tickets || []).filter((ticket)=>(ticket || {}).status.toLowerCase() === "closed"
    ).length;
};



const $882b6d93070905b3$export$bd2568e431ffdbc8 = (v)=>{
    if (!v.populationDensity) return null;
    return [
        "PEU DENSE",
        "TRES PEU DENSE"
    ].includes(v.populationDensity) ? "true" : "false";
};
function $882b6d93070905b3$export$e1babf29d3e7014c() {
    return new Date() > new Date(2021, 4, 7); // greater than 7 mai 2021 morning
}
function $882b6d93070905b3$export$a11b35a948dd04fc(cohort) {
    switch(cohort){
        case "2019":
        case "2020":
        case "2021":
            return false;
        case "2022":
            return new Date() < new Date(2022, 4, 5); // before 5 mai 2022 morning
        case "Février 2022":
            return new Date() < new Date(2022, 0, 10); // before 10 janvier 2022 morning
        case "Juin 2022":
            return new Date() < new Date(2022, 3, 27); // before 27 avril 2022 morning
        case "Juillet 2022":
            return new Date() < new Date(2022, 4, 5); // before 5 mai 2022 morning
        default:
            return new Date() < new Date(2022, 4, 5); // before 5 mai 2022 morning
    }
}
function $882b6d93070905b3$export$c3f0ea9d0ea503e6(cohort) {
    switch(cohort){
        case "Février 2022":
            return new Date() < new Date(2022, 0, 10); // before 10 janvier 2022 morning
        case "Juin 2022":
            return new Date() < new Date(2022, 3, 25); // before 25 avril 2022 morning
        case "2022":
        case "Juillet 2022":
            return new Date() < new Date(2022, 4, 2); // before 2 mai 2022 morning
        default:
            return new Date() < new Date(2022, 4, 2); // before 2 mai 2022 morning
    }
}
const $882b6d93070905b3$export$b930b05e2df061b7 = (selected, placeholder = "Choisissez un filtre", prelabel = "")=>{
    if (Object.keys(selected).length === 0) return placeholder;
    const translator = (item)=>{
        if (prelabel === "Statut phase 2") return $5c8f05ade1dd9559$export$1bb757a0784ba715(item);
        else if (prelabel === "Statut phase 1") return $5c8f05ade1dd9559$export$cca3a2d76716dca1(item);
        else if (prelabel === "Statut mission (candidature)") return $5c8f05ade1dd9559$export$bf9d8ceac41bae9d(item);
        else if (prelabel === "Statut contrats") return $5c8f05ade1dd9559$export$3167e33eaa6b76c3(item);
        else return $5c8f05ade1dd9559$export$d73ee8ef04f5226a(item);
    };
    const translated = Object.keys(selected).map((item)=>{
        return translator(item);
    });
    let value = translated.join(", ");
    if (prelabel) value = prelabel + " : " + value;
    return value;
};
const $882b6d93070905b3$export$d942f318be5113a4 = (e, pageSize)=>`${pageSize * e.currentPage + 1}-${pageSize * e.currentPage + e.displayedResults} sur ${e.numberOfResults}`
;
const $882b6d93070905b3$export$57e31ecac76b98e8 = (value)=>$af8d31735c159a26$export$f1bf0940d3ebf7b3.find((e)=>e.value === value
    )?.label || value
;
function $882b6d93070905b3$export$9a5605a036c727a1({ body: body , current: current  }) {
    if (!body || !current) return true;
    const allStatus = [
        "status",
        "statusPhase1",
        "statusPhase2",
        "statusPhase3",
        "statusMilitaryPreparationFiles",
        "statusPhase2Contract"
    ];
    if (!allStatus.some((s)=>body[s] !== current[s]
    )) return true;
    const youngStatus = body.status === "VALIDATED" && current.status !== "VALIDATED";
    const youngStatusPhase1 = body.statusPhase1 === "DONE" && current.statusPhase1 !== "DONE";
    const youngStatusPhase2 = body.statusPhase2 === "VALIDATED" && current.statusPhase2 !== "VALIDATED";
    const youngStatusPhase3 = body.statusPhase3 === "VALIDATED" && current.statusPhase3 !== "VALIDATED";
    const youngStatusMilitaryPrepFiles = body.statusMilitaryPreparationFiles === "VALIDATED" && current.statusMilitaryPreparationFiles !== "VALIDATED";
    const youngStatusPhase2Contract = body.statusPhase2Contract === "VALIDATED" && current.statusPhase2Contract !== "VALIDATED";
    const notAuthorized = youngStatus || youngStatusPhase1 || youngStatusPhase2 || youngStatusPhase3 || youngStatusMilitaryPrepFiles || youngStatusPhase2Contract;
    return !notAuthorized;
}
const $882b6d93070905b3$export$4b226c960197eead = ({ cohort: cohort , status: status  })=>{
    if ([
        $af8d31735c159a26$export$c7395e8f4b3d2705.AFFECTED,
        $af8d31735c159a26$export$c7395e8f4b3d2705.NOT_DONE,
        $af8d31735c159a26$export$c7395e8f4b3d2705.WAITING_AFFECTATION
    ].includes(status)) {
        const now = Date.now();
        const limit = new Date($af8d31735c159a26$export$ff269dc24610ff99[cohort]);
        limit.setDate(limit.getDate() + 1);
        if (now < limit) return true;
    }
    return false;
};
const $882b6d93070905b3$export$c60f17cb8a23432c = (tel)=>{
    if (!tel) return "";
    const regex = /^((?:(?:\+|00)33|0)\s*[1-9])((?:[\s.-]*\d{2}){4})$/;
    const global = tel.match(regex);
    if (global?.length !== 3) return tel;
    const rest = global[2].match(/.{1,2}/g);
    const formatted = `${global[1]} ${rest.join(" ")}`;
    return formatted;
};
$parcel$exportWildcard(module.exports, $af8d31735c159a26$exports);
$parcel$exportWildcard(module.exports, $5c8f05ade1dd9559$exports);
$parcel$exportWildcard(module.exports, $ff17e7637d9576cd$exports);
$parcel$exportWildcard(module.exports, $16d2c5c76e3787af$exports);
$parcel$exportWildcard(module.exports, $2f6ca5261b854f08$exports);
$parcel$exportWildcard(module.exports, $2c65a340d7abcd67$exports);
$parcel$exportWildcard(module.exports, $83a86f48478e68f7$exports);
$parcel$exportWildcard(module.exports, $93761635a3889559$exports);
$parcel$exportWildcard(module.exports, $4447cd59100c69cb$exports);


//# sourceMappingURL=main.js.map