const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_account: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    id_method: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payment_method',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payment_status',
        key: 'id'
      }
    },
    id_order: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment',
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
        name: "payment_method_idx",
        using: "BTREE",
        fields: [
          { name: "id_method" },
        ]
      },
      {
        name: "payment_status_idx",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "FK_payment_acc_idx",
        using: "BTREE",
        fields: [
          { name: "id_account" },
        ]
      },
    ]
  });
};
