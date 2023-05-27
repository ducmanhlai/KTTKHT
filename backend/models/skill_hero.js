const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_hero', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    type_damage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'type_damage',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'skill_hero',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_skill_type_damage",
        using: "BTREE",
        fields: [
          { name: "type_damage" },
        ]
      },
    ]
  });
};
