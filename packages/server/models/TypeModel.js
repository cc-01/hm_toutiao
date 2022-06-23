const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const TypeModel = sequelize.define('type',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
	},
	name:{
		type:Sequelize.STRING(255),
		allowNull:false
	},
},{
	timestamps:false,
});
(async ()=> {
  await TypeModel.sync({force: false}) // force:true => delete it if exists
})()

module.exports = TypeModel;