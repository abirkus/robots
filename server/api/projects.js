const router = require('express').Router();
const {Robot, Project} = require('../db');

router.get('/', async (req, res, next) => {
	try {
		const result = await Project.findAll();
		res.send(result);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const oneProject = await Project.findOne({
			where: {
				id: req.params.id,
			},
			include: [Robot],
		});
		res.send(oneProject);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const project = await Project.create(req.body);
		res.json(project);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		await Project.destroy({
			where: {id},
		});
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
