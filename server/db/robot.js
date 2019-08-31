const db = require('./database');
const Sequelize = require('sequelize');

const Robot = db.define('robot', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue:
			'https://media.giphy.com/media/1BdJd24oEwvuSvXYb0/giphy.gif',
	},
	fuelType: {
		type: Sequelize.STRING,
		validate: {
			isIn: [['gas', 'diesel', 'electric']],
		},
		defaultValue: 'electric',
	},
	fuelLevel: {
		type: Sequelize.REAL,
		validate: {
			min: 0,
			max: 100,
		},
		defaultValue: 100,
	},
});

module.exports = Robot;
