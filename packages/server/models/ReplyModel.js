const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const ReplyModel = sequelize.define('reply',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
	},
	messageId:{
		type:Sequelize.BIGINT,
		allowNull:false
	},
	content:{
		type:Sequelize.STRING(500),
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
  await ReplyModel.sync({force: false}) // force:true => delete it if exists
})()

module.exports = ReplyModel;