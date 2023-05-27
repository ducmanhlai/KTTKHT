const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hero_of_users', {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_hero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hero',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'hero_of_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_user" },
          { name: "id_hero" },
        ]
      },
      {
        name: "hero_of_users_hero",
        using: "BTREE",
        fields: [
          { name: "id_hero" },
        ]
      },
    ]
  });
};
