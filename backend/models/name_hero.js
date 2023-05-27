const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('name_hero', {
    id_character: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hero',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_language: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'language',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'name_hero',
    timestamps: false,
    indexes: [
      {
        name: "FK_name_hero_character",
        using: "BTREE",
        fields: [
          { name: "id_character" },
        ]
      },
      {
        name: "FK_name_hero_language",
        using: "BTREE",
        fields: [
          { name: "id_language" },
        ]
      },
    ]
  });
};
