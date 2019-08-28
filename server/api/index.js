'use strict';
const router = require('express').Router();
const {Robot, Project} = require('../db');
// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.get('/robots', async (req, res, next) => {
	try {
		const result = await Robot.findAll();
		res.json(result);
	} catch (err) {
		next(err);
	}
});

router.get('/robots/:id', async (req, res, next) => {
	try {
		console.log('INSIDE API, the route is working');
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

router.get('/projects', async (req, res, next) => {
	try {
		const result = await Project.findAll();
		res.send(result);
	} catch (err) {
		next(err);
	}
});

router.get('/projects/:id', async (req, res, next) => {
	try {
		const oneProject = await Project.findById({
			where: {
				id: req.params.id,
			},
			include: [{model: Robot}],
		});
		res.send(oneProject);
	} catch (err) {
		next(err);
	}
});

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
