const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const GoodsModel = sequelize.define('goods',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
	},
	name:{
		type:Sequelize.STRING(500),
		allowNull:false
	},
	typeId:{
		type:Sequelize.BIGINT,
		allowNull:false
	},
	img:{
		type:Sequelize.STRING(500),
		allowNull:true
	},
	desc:{
		type:Sequelize.TEXT,
		allowNull:true
	},
	updatetime:{
		type:Sequelize.DATE,
		allowNull:false
	},
	createtime:{
		type:Sequelize.DATE,
		allowNull:false
	},
},{
	timestamps:false,
});
(async ()=> {
  await GoodsModel.sync({force: false}) // force:true => delete it if exists
})()

module.exports = GoodsModel;