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

router.post('/', async (req, res, next) => {
	try {
		const robot = await Robot.create(req.body);
		res.json(robot);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		await Robot.destroy({
			where: {id},
		});
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
