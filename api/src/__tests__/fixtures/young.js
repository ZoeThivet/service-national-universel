const faker = require("faker");

faker.locale = "fr";

function getNewYoungFixture(fields = {}) {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    frenchNationality: "true",
    birthCountry: faker.address.country(),
    email: faker.internet.email().toLowerCase(),
    phone: faker.phone.phoneNumber(),
    gender: faker.name.gender(),
    birthdateAt: faker.date.past().toISOString(),
    cohort: "2019",
    acceptCGU: "true",
    phase: "CONTINUE",
    status: "REFUSED",
    statusPhase1: "AFFECTED",
    statusPhase2: "IN_PROGRESS",
    statusPhase3: "VALIDATED",
    lastStatusAt: faker.date.past().toISOString(),
    withdrawnReason: "",
    withdrawnMessage: "",
    inscriptionStep: "PROFIL",
    cohesion2020Step: "JDC",
    historic: [],
    password: faker.internet.password(),
    cniFiles: [],
    cohesionStayPresence: "true",
    cohesionStayMedicalFileReceived: "false",
    cohesionCenterId: "",
    cohesionCenterName: "",
    cohesionCenterZip: "",
    cohesionCenterCity: "",
    autoAffectationPhase1ExpiresAt: faker.date.past().toISOString(),
    phase2ApplicationStatus: [],
    phase3StructureName: "",
    phase3MissionDomain: "",
    phase3MissionDescription: "",
    phase3MissionStartAt: faker.date.past().toISOString(),
    phase3MissionEndAt: faker.date.past().toISOString(),
    phase3TutorFirstName: "",
    phase3TutorLastName: "",
    phase3TutorEmail: "",
    phase3TutorPhone: "",
    phase3TutorNote: "",
    phase3Token: "3",
    address: "",
    complementAddress: "",
    zip: faker.address.zipCode(),
    city: faker.address.city(),
    cityCode: faker.address.zipCode(),
    department: faker.address.state(),
    region: faker.address.country(),
    country: "France",
    location: {
      lat: Number(faker.address.latitude()),
      lon: Number(faker.address.longitude()),
    },
    populationDensity: "DENSE",
    qpv: "false",
    situation: "Etudiant",
    grade: "",
    schoolCertification: "false",
    schooled: "true",
    schoolName: faker.address.state(),
    schoolType: "Lycée",
    schoolAddress: faker.address.streetName(),
    schoolComplementAdresse: "",
    schoolZip: faker.address.zipCode(),
    schoolCity: faker.address.city(),
    schoolDepartment: faker.address.state(),
    schoolRegion: faker.address.state(),
    schoolLocation: {
      lat: Number(faker.address.latitude()),
      lon: Number(faker.address.longitude()),
    },
    schoolId: String(faker.datatype.number()),
    academy: "Strasbourg",
    parent1Status: "",
    parent1FirstName: faker.name.firstName(),
    parent1LastName: faker.name.lastName(),
    parent1Email: faker.internet.email(),
    parent1Phone: faker.phone.phoneNumber(),
    parent1OwnAddress: "true",
    parent1Address: faker.address.streetAddress(),
    parent1ComplementAddress: "",
    parent1Zip: faker.address.zipCode(),
    parent1City: faker.address.city(),
    parent1Department: faker.address.state(),
    parent1Region: faker.address.country(),
    parent1Location: {
      lat: Number(faker.address.latitude()),
      lon: Number(faker.address.longitude()),
    },
    parent1FromFranceConnect: "true",
    parent2Status: "",
    parent2FirstName: faker.name.firstName(),
    parent2LastName: faker.name.lastName(),
    parent2Email: faker.internet.email(),
    parent2Phone: faker.phone.phoneNumber(),
    parent2OwnAddress: "true",
    parent2Address: faker.address.streetAddress(),
    parent2ComplementAddress: "",
    parent2Zip: faker.address.zipCode(),
    parent2City: faker.address.city(),
    parent2Department: faker.address.state(),
    parent2Region: faker.address.country(),
    parent2Location: {
      lat: Number(faker.address.latitude()),
      lon: Number(faker.address.longitude()),
    },
    parent2FromFranceConnect: "false",
    handicap: "true",
    ppsBeneficiary: "false",
    paiBeneficiary: "false",
    medicosocialStructure: "true",
    medicosocialStructureName: faker.address.country(),
    medicosocialStructureAddress: faker.address.streetAddress(),
    medicosocialStructureComplementAddress: "",
    medicosocialStructureZip: faker.address.zipCode(),
    medicosocialStructureCity: faker.address.city(),
    medicosocialStructureDepartment: faker.address.state(),
    medicosocialStructureRegion: faker.address.country(),
    medicosocialStructureLocation: {
      lat: Number(faker.address.latitude()),
      lon: Number(faker.address.longitude()),
    },
    engagedStructure: "Maison",
    specificAmenagment: "false",
    specificAmenagmentType: "Aucun",
    highSkilledActivity: "true",
    highSkilledActivityType: "Sport",
    highSkilledActivityProofFiles: [],
    parentConsentment: "true",
    parentConsentmentFiles: [],
    parentConsentmentFilesCompliant: "false",
    parentConsentmentFilesCompliantInfo: "",
    consentment: "false",
    imageRight: "false",
    imageRightFiles: [],
    autoTestPCR: "true",
    autoTestPCRFiles: [],
    rulesYoung: "true",
    rulesParent1: "true",
    rulesParent2: "true",
    rulesFiles: [],
    jdc: "false",
    motivations: "SNU",
    domains: [""],
    professionnalProject: "UNIFORM",
    professionnalProjectPrecision: "",
    period: "DURING_SCHOOL",
    periodRanking: [""],
    mobilityNearSchool: "false",
    mobilityNearHome: "false",
    mobilityNearRelative: "true",
    mobilityNearRelativeName: "",
    mobilityNearRelativeAddress: "",
    mobilityNearRelativeZip: faker.address.zipCode(),
    mobilityTransport: [faker.vehicle.vehicle()],
    mobilityTransportOther: faker.lorem.sentences(),
    missionFormat: "CONTINUOUS",
    engaged: "true",
    engagedDescription: faker.lorem.sentences(),
    desiredLocation: faker.lorem.sentences(),
    defenseInterest: faker.lorem.sentences(),
    defenseTypeInterest: faker.lorem.sentences(),
    defenseDomainInterest: faker.lorem.sentences(),
    defenseMotivationInterest: faker.lorem.sentences(),
    securityInterest: faker.lorem.sentences(),
    securityDomainInterest: faker.lorem.sentences(),
    solidarityInterest: faker.lorem.sentences(),
    healthInterest: faker.lorem.sentences(),
    educationInterest: faker.lorem.sentences(),
    cultureInterest: faker.lorem.sentences(),
    sportInterest: faker.lorem.sentences(),
    environmentInterest: faker.lorem.sentences(),
    citizenshipInterest: faker.lorem.sentences(),
    ...fields,
  };
}

module.exports = getNewYoungFixture;
