const { DataTypes } = require("sequelize");
const { db } = require("../postgresql");

const OBJ = db.define(
  "log_structures",
  {
    evenement_nom: DataTypes.TEXT,
    evenement_valeur: DataTypes.TEXT,
    evenement_type: DataTypes.TEXT,
    structure_id: DataTypes.TEXT,
    structure_statut: DataTypes.TEXT,
    stucture_statusLegal: DataTypes.TEXT,
    structure_type: DataTypes.ARRAY(DataTypes.TEXT),
    structure_sousType: DataTypes.TEXT,
    structure_nom: DataTypes.TEXT,
    structure_departement: DataTypes.TEXT,
    structure_region: DataTypes.TEXT,
    structure_preparationMilitaire: DataTypes.TEXT,
    structure_reseau: DataTypes.TEXT,
    date: DataTypes.DATE,
    raw_data: DataTypes.JSONB,
  },
  {
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt", "raw_data"] },
    },
  }
);

OBJ.sync({ alter: true });
module.exports = OBJ;
