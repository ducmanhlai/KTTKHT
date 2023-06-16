const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skin_of_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    id_skin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skin',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'skin_of_user',
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
        name: "FK_skin_user_idx",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "FK_skin_user_skin_idx",
        using: "BTREE",
        fields: [
          { name: "id_skin" },
        ]
      },
    ]
  });
};
