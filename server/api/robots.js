const router = require('express').Router();
const {Robot, Project} = require('../db');

router.get('/', async (req, res, next) => {
	try {
		const result = await Robot.findAll({
			order: [['id', 'ASC']],
		});
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
		console.log('REQ BODY', req.body);
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

router.put('/:id', async (req, res, next) => {
	try {
		const currId = req.params.id;
		const robot = await Robot.findByPk(currId)
		await robot.update(req.body);
		const resp = await Robot.findOne({
			where: {
				id: currId
			},
			include: [Project],
		});
		res.json(resp.dataValues)
	} catch (err) {
		next(err);
	}
});

router.put('/assignments/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const robot = await Robot.findByPk(id);
		await robot.removeProject(req.body.id);
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
