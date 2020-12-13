const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const fs = require('fs');
const moment = require('moment');
const date = moment().format('YYYY[_]MM[_]DD');
const time = moment().format('H:mm:ss');

const log = fs.createWriteStream(`./log/sequelize/${date}.log`, {'flags': 'a'});
log.write(`\n\n[${time}]\n`);
config.logging = msg =>  log.write(`${msg}\n`);

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

// log.write(content);
module.exports = db;






// 'use strict';

// const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config.json')[env];
// const fs = require('fs');
// const moment = require('moment');
// const db = {};
// const date = moment().format('YYYY[_]MM[_]DD');
// const time = moment().format('H:mm:ss');
// config.logging = msg => log.write(`[${time}]\n${msg}\n\n`);

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// db.Shop = require('./shoppingmall')(sequelize, Sequelize);
// db.Product = require('./product')(sequelize, Sequelize);

// db.Shop.hasMany(db.Product, {foreignKey: 'mall_id'});
// db.Product.belongsTo(db.Shop, {foreignKey: 'mall_id'});

// const log = fs.createWriteStream(`./${date}_sequelize.log`, {'flags': 'a'});
// module.exports = db;
