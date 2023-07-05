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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_skin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skin',
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
        name: "fk_skin_idx",
        using: "BTREE",
        fields: [
          { name: "id_skin" },
        ]
      },
      {
        name: "fk_type_idx",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
