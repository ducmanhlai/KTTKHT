const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'level_item',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'type_item',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'item',
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
        name: "fk_item_level_idx",
        using: "BTREE",
        fields: [
          { name: "level" },
        ]
      },
      {
        name: "fk_item_type_idx",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
