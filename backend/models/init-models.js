var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _action = require("./action");
var _forgot_password = require("./forgot_password");
var _hero = require("./hero");
var _hero_of_users = require("./hero_of_users");
var _item = require("./item");
var _payment = require("./payment");
var _payment_method = require("./payment_method");
var _payment_status = require("./payment_status");
var _role = require("./role");
var _rule = require("./rule");
var _skill_hero = require("./skill_hero");
var _skin = require("./skin");
var _skin_of_user = require("./skin_of_user");
var _story_hero = require("./story_hero");
var _type_damage = require("./type_damage");
var _type_hero = require("./type_hero");
var _type_item = require("./type_item");
var _type_rule = require("./type_rule");
var _type_skill = require("./type_skill");
var _type_skin = require("./type_skin");
var _users = require("./users");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var action = _action(sequelize, DataTypes);
  var forgot_password = _forgot_password(sequelize, DataTypes);
  var hero = _hero(sequelize, DataTypes);
  var hero_of_users = _hero_of_users(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var payment_method = _payment_method(sequelize, DataTypes);
  var payment_status = _payment_status(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var rule = _rule(sequelize, DataTypes);
  var skill_hero = _skill_hero(sequelize, DataTypes);
  var skin = _skin(sequelize, DataTypes);
  var skin_of_user = _skin_of_user(sequelize, DataTypes);
  var story_hero = _story_hero(sequelize, DataTypes);
  var type_damage = _type_damage(sequelize, DataTypes);
  var type_hero = _type_hero(sequelize, DataTypes);
  var type_item = _type_item(sequelize, DataTypes);
  var type_rule = _type_rule(sequelize, DataTypes);
  var type_skill = _type_skill(sequelize, DataTypes);
  var type_skin = _type_skin(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  forgot_password.belongsTo(account, { as: "id_account_account", foreignKey: "id_account"});
  account.hasMany(forgot_password, { as: "forgot_passwords", foreignKey: "id_account"});
  hero_of_users.belongsTo(account, { as: "id_user_account", foreignKey: "id_user"});
  account.hasMany(hero_of_users, { as: "hero_of_users", foreignKey: "id_user"});
  payment.belongsTo(account, { as: "id_account_account", foreignKey: "id_account"});
  account.hasMany(payment, { as: "payments", foreignKey: "id_account"});
  skin_of_user.belongsTo(account, { as: "id_user_account", foreignKey: "id_user"});
  account.hasMany(skin_of_user, { as: "skin_of_users", foreignKey: "id_user"});
  users.belongsTo(account, { as: "id_account_account", foreignKey: "id_account"});
  account.hasMany(users, { as: "users", foreignKey: "id_account"});
  hero_of_users.belongsTo(hero, { as: "id_hero_hero", foreignKey: "id_hero"});
  hero.hasMany(hero_of_users, { as: "hero_of_users", foreignKey: "id_hero"});
  skill_hero.belongsTo(hero, { as: "id_hero_hero", foreignKey: "id_hero"});
  hero.hasMany(skill_hero, { as: "skill_heros", foreignKey: "id_hero"});
  skin.belongsTo(hero, { as: "id_hero_hero", foreignKey: "id_hero"});
  hero.hasMany(skin, { as: "skins", foreignKey: "id_hero"});
  story_hero.belongsTo(hero, { as: "id_hero_hero", foreignKey: "id_hero"});
  hero.hasOne(story_hero, { as: "story_hero", foreignKey: "id_hero"});
  payment.belongsTo(payment_method, { as: "id_method_payment_method", foreignKey: "id_method"});
  payment_method.hasMany(payment, { as: "payments", foreignKey: "id_method"});
  payment.belongsTo(payment_status, { as: "status_payment_status", foreignKey: "status"});
  payment_status.hasMany(payment, { as: "payments", foreignKey: "status"});
  account.belongsTo(role, { as: "id_role_role", foreignKey: "id_role"});
  role.hasMany(account, { as: "accounts", foreignKey: "id_role"});
  type_rule.belongsTo(rule, { as: "id_rule_rule", foreignKey: "id_rule"});
  rule.hasMany(type_rule, { as: "type_rules", foreignKey: "id_rule"});
  item.belongsTo(skin, { as: "id_skin_skin", foreignKey: "id_skin"});
  skin.hasMany(item, { as: "items", foreignKey: "id_skin"});
  skin_of_user.belongsTo(skin, { as: "id_skin_skin", foreignKey: "id_skin"});
  skin.hasMany(skin_of_user, { as: "skin_of_users", foreignKey: "id_skin"});
  skill_hero.belongsTo(type_damage, { as: "type_damage_type_damage", foreignKey: "type_damage"});
  type_damage.hasMany(skill_hero, { as: "skill_heros", foreignKey: "type_damage"});
  hero.belongsTo(type_hero, { as: "classify_type_hero", foreignKey: "classify"});
  type_hero.hasMany(hero, { as: "heros", foreignKey: "classify"});
  item.belongsTo(type_item, { as: "type_type_item", foreignKey: "type"});
  type_item.hasMany(item, { as: "items", foreignKey: "type"});
  skill_hero.belongsTo(type_skill, { as: "type_skill_type_skill", foreignKey: "type_skill"});
  type_skill.hasMany(skill_hero, { as: "skill_heros", foreignKey: "type_skill"});
  skin.belongsTo(type_skin, { as: "classify_type_skin", foreignKey: "classify"});
  type_skin.hasMany(skin, { as: "skins", foreignKey: "classify"});

  return {
    account,
    action,
    forgot_password,
    hero,
    hero_of_users,
    item,
    payment,
    payment_method,
    payment_status,
    role,
    rule,
    skill_hero,
    skin,
    skin_of_user,
    story_hero,
    type_damage,
    type_hero,
    type_item,
    type_rule,
    type_skill,
    type_skin,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
