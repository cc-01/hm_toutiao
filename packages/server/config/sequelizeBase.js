//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mall','csj','834600',{
	host:'127.0.0.1',
	dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

module.exports = sequelize;