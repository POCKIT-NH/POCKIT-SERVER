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
db.Cart = require('./cart')(sequelize, Sequelize);
db.Order = require('./order')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);

db.Order.hasOne(db.Cart, { foreignKey: 'cart_idx' });
db.Cart.hasMany(db.Product, { foreignKey: 'product_idx' });

db.Product.belongsTo(db.Cart, { foreignKey: 'product_idx' });
db.Cart.belongsTo(db.Order, { foreignKey: 'cart_idx' });

module.exports = db;
