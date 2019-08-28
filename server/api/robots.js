const router = require('express').Router();
const {Robot, Project} = require('../db');

router.get('/', async (req, res, next) => {
	try {
		const result = await Robot.findAll();
		res.json(result);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const oneRobot = await Robot.findOne({
			where: {
				id: req.params.id,
			},
			include: [Project],
		});
		res.json(oneRobot);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
