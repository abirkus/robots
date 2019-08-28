const db = require('./database');
const Sequelize = require('sequelize');

const Robot = db.define('robot', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageUrl: Sequelize.STRING,
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
			// isInRange(value) {
			// 	if (value < 0 || value > 100) {
			// 		throw new Error('Fuel level must be between 0 and 100');
			// 	}
			// },
		},
		defaultValue: 100,
	},
});

module.exports = Robot;
