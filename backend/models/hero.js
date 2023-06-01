const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hero', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    classify: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'type_hero',
        key: 'id'
      }
    },
    id_skill_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skill_hero',
        key: 'id'
      }
    },
    id_skill_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skill_hero',
        key: 'id'
      }
    },
    id_skill_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skill_hero',
        key: 'id'
      }
    },
    id_skill_special: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skill_hero',
        key: 'id'
      }
    },
    id_normal_attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skill_hero',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'hero',
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
        name: "FK_hero_type_hero",
        using: "BTREE",
        fields: [
          { name: "classify" },
        ]
      },
      {
        name: "FK_hero_skill_1",
        using: "BTREE",
        fields: [
          { name: "id_skill_1" },
        ]
      },
      {
        name: "FK_hero_skill_2",
        using: "BTREE",
        fields: [
          { name: "id_skill_2" },
        ]
      },
      {
        name: "FK_hero_skill_3",
        using: "BTREE",
        fields: [
          { name: "id_skill_3" },
        ]
      },
      {
        name: "FK_hero_skill_special",
        using: "BTREE",
        fields: [
          { name: "id_skill_special" },
        ]
      },
      {
        name: "FK_hero_skill_id_normal_attack",
        using: "BTREE",
        fields: [
          { name: "id_normal_attack" },
        ]
      },
    ]
  });
};
