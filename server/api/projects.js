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
		console.log('inside API request');
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

module.exports = router;
