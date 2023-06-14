const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    classify: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'type_skin',
        key: 'id'
      }
    },
    id_hero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hero',
        key: 'id'
      }
    },
    avatar: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'skin',
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
        name: "FK_skin_hero_idx",
        using: "BTREE",
        fields: [
          { name: "id_hero" },
        ]
      },
      {
        name: "FK_skin_type_idx",
        using: "BTREE",
        fields: [
          { name: "classify" },
        ]
      },
    ]
  });
};
