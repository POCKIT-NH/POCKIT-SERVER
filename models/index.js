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

db.Order.belongsToMany(db.Product, {
  through: 'order_product_tb',
  as: 'carting',
  foreignKey: {
    fieldName: 'product_idx',
  },
});

db.Product.belongsToMany(db.Order, {
  through: 'order_product_tb',
  as: 'carted',
  foreignKey: {
    fieldName: 'order_idx',
  },
});

module.exports = db;
