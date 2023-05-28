const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_rule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_type_rule: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_rule: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rule',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'type_rule',
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
        name: "FK_type_rule_rule",
        using: "BTREE",
        fields: [
          { name: "id_rule" },
        ]
      },
    ]
  });
};
