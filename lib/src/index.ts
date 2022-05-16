import { COHESION_STAY_START, WITHRAWN_REASONS, YOUNG_STATUS_PHASE1 } from "./constants";
import { translate, translateApplication, translateEngagement, translateFileStatusPhase1, translatePhase1, translatePhase2 } from "./translation";

export * from "./academy";
export * from "./colors";
export * from "./date";
export * from "./file";
export * from "./constants";
export * from "./region-and-departments"
export * from "./roles";
export * from "./zammood";
export * from "./translation"

export const isInRuralArea = (v) => {
  if (!v.populationDensity) return null;
  return ["PEU DENSE", "TRES PEU DENSE"].includes(v.populationDensity) ? "true" : "false";
};

// See: https://trello.com/c/JBS3Jn8I/576-inscription-impact-fin-instruction-dossiers-au-6-mai
export function isEndOfInscriptionManagement2021() {
  return new Date() > new Date(2021, 4, 7); // greater than 7 mai 2021 morning
}

export function inscriptionModificationOpenForYoungs(cohort) {
  switch (cohort) {
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

export function inscriptionCreationOpenForYoungs(cohort) {
  switch (cohort) {
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

export const getFilterLabel = (selected, placeholder = "Choisissez un filtre", prelabel = "") => {
  if (Object.keys(selected).length === 0) return placeholder;
  const translator = (item) => {
    if (prelabel === "Statut phase 2") {
      return translatePhase2(item);
    } else if (prelabel === "Statut phase 1") {
      return translatePhase1(item);
    } else if (prelabel === "Statut mission (candidature)") {
      return translateApplication(item);
    } else if (prelabel === "Statut contrats") {
      return translateEngagement(item);
    } else if (prelabel === "Statut fichier phase 1") {
      return translateFileStatusPhase1(item);
    } else {
      return translate(item);
    }
  };
  const translated = Object.keys(selected).map((item) => {
    return translator(item);
  });
  let value = translated.join(", ");
  if (prelabel) value = prelabel + " : " + value;
  return value;
};

export const getResultLabel = (e, pageSize) => `${pageSize * e.currentPage + 1}-${pageSize * e.currentPage + e.displayedResults} sur ${e.numberOfResults}`;

export const getLabelWithdrawnReason = (value) => WITHRAWN_REASONS.find((e) => e.value === value)?.label || value;

export function canUpdateYoungStatus({ body, current }) {
  if (!body || !current) return true;
  const allStatus = ["status", "statusPhase1", "statusPhase2", "statusPhase3", "statusMilitaryPreparationFiles", "statusPhase2Contract"];
  if (!allStatus.some((s) => body[s] !== current[s])) return true;

  const youngStatus = body.status === "VALIDATED" && current.status !== "VALIDATED";
  const youngStatusPhase1 = body.statusPhase1 === "DONE" && current.statusPhase1 !== "DONE";
  const youngStatusPhase2 = body.statusPhase2 === "VALIDATED" && current.statusPhase2 !== "VALIDATED";
  const youngStatusPhase3 = body.statusPhase3 === "VALIDATED" && current.statusPhase3 !== "VALIDATED";
  const youngStatusMilitaryPrepFiles = body.statusMilitaryPreparationFiles === "VALIDATED" && current.statusMilitaryPreparationFiles !== "VALIDATED";
  const youngStatusPhase2Contract = body.statusPhase2Contract === "VALIDATED" && current.statusPhase2Contract !== "VALIDATED";

  const notAuthorized = youngStatus || youngStatusPhase1 || youngStatusPhase2 || youngStatusPhase3 || youngStatusMilitaryPrepFiles || youngStatusPhase2Contract;

  return !notAuthorized;
}

export const youngCanChangeSession = ({ cohort, status }) => {
  if ([YOUNG_STATUS_PHASE1.AFFECTED, YOUNG_STATUS_PHASE1.NOT_DONE, YOUNG_STATUS_PHASE1.WAITING_AFFECTATION].includes(status)) {
    const now = Date.now();
    const limit = new Date(COHESION_STAY_START[cohort]);
    limit.setDate(limit.getDate() + 1);

    if (now as any < (limit as any)) return true;
  }
  return false;
};

export const formatPhoneNumberFR = (tel) => {
  if (!tel) return "";
  const regex = /^((?:(?:\+|00)33|0)\s*[1-9])((?:[\s.-]*\d{2}){4})$/;
  const global = tel.match(regex);
  if (global?.length !== 3) {
    return tel;
  }
  const rest = global[2].match(/.{1,2}/g);
  const formatted = `${global[1]} ${rest.join(" ")}`;
  return formatted;
};