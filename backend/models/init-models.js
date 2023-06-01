var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _action = require("./action");
var _forgot_password = require("./forgot_password");
var _hero = require("./hero");
var _hero_of_users = require("./hero_of_users");
var _language = require("./language");
var _name_hero = require("./name_hero");
var _payment = require("./payment");
var _payment_method = require("./payment_method");
var _payment_status = require("./payment_status");
var _role = require("./role");
var _rule = require("./rule");
var _skill_hero = require("./skill_hero");
var _story_hero = require("./story_hero");
var _type_damage = require("./type_damage");
var _type_hero = require("./type_hero");
var _type_rule = require("./type_rule");
var _users = require("./users");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var action = _action(sequelize, DataTypes);
  var forgot_password = _forgot_password(sequelize, DataTypes);
  var hero = _hero(sequelize, DataTypes);
  var hero_of_users = _hero_of_users(sequelize, DataTypes);
  var language = _language(sequelize, DataTypes);
  var name_hero = _name_hero(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var payment_method = _payment_method(sequelize, DataTypes);
  var payment_status = _payment_status(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var rule = _rule(sequelize, DataTypes);
  var skill_hero = _skill_hero(sequelize, DataTypes);
  var story_hero = _story_hero(sequelize, DataTypes);
  var type_damage = _type_damage(sequelize, DataTypes);
  var type_hero = _type_hero(sequelize, DataTypes);
  var type_rule = _type_rule(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  hero.belongsToMany(users, { as: 'id_user_users', through: hero_of_users, foreignKey: "id_hero", otherKey: "id_user" });
  users.belongsToMany(hero, { as: 'id_hero_heros', through: hero_of_users, foreignKey: "id_user", otherKey: "id_hero" });
  forgot_password.belongsTo(account, { as: "id_account_account", foreignKey: "id_account"});
  account.hasMany(forgot_password, { as: "forgot_passwords", foreignKey: "id_account"});
  users.belongsTo(account, { as: "id_account_account", foreignKey: "id_account"});
  account.hasMany(users, { as: "users", foreignKey: "id_account"});
  hero_of_users.belongsTo(hero, { as: "id_hero_hero", foreignKey: "id_hero"});
  hero.hasMany(hero_of_users, { as: "hero_of_users", foreignKey: "id_hero"});
  name_hero.belongsTo(hero, { as: "id_character_hero", foreignKey: "id_character"});
  hero.hasMany(name_hero, { as: "name_heros", foreignKey: "id_character"});
  story_hero.belongsTo(hero, { as: "id_hero_hero", foreignKey: "id_hero"});
  hero.hasOne(story_hero, { as: "story_hero", foreignKey: "id_hero"});
  name_hero.belongsTo(language, { as: "id_language_language", foreignKey: "id_language"});
  language.hasMany(name_hero, { as: "name_heros", foreignKey: "id_language"});
  payment.belongsTo(payment_method, { as: "id_method_payment_method", foreignKey: "id_method"});
  payment_method.hasMany(payment, { as: "payments", foreignKey: "id_method"});
  payment.belongsTo(payment_status, { as: "status_payment_status", foreignKey: "status"});
  payment_status.hasMany(payment, { as: "payments", foreignKey: "status"});
  account.belongsTo(role, { as: "id_role", foreignKey: "id"});
  role.hasOne(account, { as: "account", foreignKey: "id"});
  type_rule.belongsTo(rule, { as: "id_rule_rule", foreignKey: "id_rule"});
  rule.hasMany(type_rule, { as: "type_rules", foreignKey: "id_rule"});
  hero.belongsTo(skill_hero, { as: "id_skill_1_skill_hero", foreignKey: "id_skill_1"});
  skill_hero.hasMany(hero, { as: "heros", foreignKey: "id_skill_1"});
  hero.belongsTo(skill_hero, { as: "id_skill_2_skill_hero", foreignKey: "id_skill_2"});
  skill_hero.hasMany(hero, { as: "id_skill_2_heros", foreignKey: "id_skill_2"});
  hero.belongsTo(skill_hero, { as: "id_skill_3_skill_hero", foreignKey: "id_skill_3"});
  skill_hero.hasMany(hero, { as: "id_skill_3_heros", foreignKey: "id_skill_3"});
  hero.belongsTo(skill_hero, { as: "id_normal_attack_skill_hero", foreignKey: "id_normal_attack"});
  skill_hero.hasMany(hero, { as: "id_normal_attack_heros", foreignKey: "id_normal_attack"});
  hero.belongsTo(skill_hero, { as: "id_skill_special_skill_hero", foreignKey: "id_skill_special"});
  skill_hero.hasMany(hero, { as: "id_skill_special_heros", foreignKey: "id_skill_special"});
  skill_hero.belongsTo(type_damage, { as: "type_damage_type_damage", foreignKey: "type_damage"});
  type_damage.hasMany(skill_hero, { as: "skill_heros", foreignKey: "type_damage"});
  hero.belongsTo(type_hero, { as: "classify_type_hero", foreignKey: "classify"});
  type_hero.hasMany(hero, { as: "heros", foreignKey: "classify"});
  hero_of_users.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(hero_of_users, { as: "hero_of_users", foreignKey: "id_user"});

  return {
    account,
    action,
    forgot_password,
    hero,
    hero_of_users,
    language,
    name_hero,
    payment,
    payment_method,
    payment_status,
    role,
    rule,
    skill_hero,
    story_hero,
    type_damage,
    type_hero,
    type_rule,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
