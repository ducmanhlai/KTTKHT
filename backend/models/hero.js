const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hero', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classify: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_hero',
        key: 'id'
      }
    },
    coin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    baseHp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    armor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    magicDefense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    attackDamage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    magicDamage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 100
    },
    'attack speed': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    armorPierce: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    magicPierce: {
      type: DataTypes.INTEGER,
      allowNull: true
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
        name: "FK_hero_type_hero_idx",
        using: "BTREE",
        fields: [
          { name: "classify" },
        ]
      },
    ]
  });
};
