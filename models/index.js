const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Order = require('./order')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.OrderProduct = require('./order_product')(sequelize, Sequelize);

//order와 user는 1:N관계. user는 여러개의 order를 가질 수 있다.
db.User.hasMany(db.Order, { foreignKey: 'user_idx' });
db.Order.belongsTo(db.User, { foreignKey: 'user_idx' });

module.exports = db;
