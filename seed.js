const {green, red} = require('chalk');
const {db, Project, Robot} = require('./server/db');
const anHourFromNow = new Date(Date.now() + 60 * (60 * 1000)).toString();

const coolBots = [
	{name: 'Billy', imageUrl: 'google.com', fuelType: 'gas', fuelLevel: '50'},
	{name: 'Johnny', imageUrl: 'go.com', fuelType: 'electric', fuelLevel: '90'},
	{name: 'Joel', imageUrl: 'google.com', fuelType: 'diesel', fuelLevel: '20'},
	{
		name: 'Steve',
		imageUrl: 'google.com',
		fuelType: 'diesel',
		fuelLevel: '85',
	},
];

const coolProjects = [
	{title: 'Build barn', description: 'Lorem Ipsum'},
	{title: 'Discover love', completed: true, deadline: anHourFromNow},
	{title: 'Open the pod bay doors', priority: 10},
	{title: 'Clean curtains', priority: 1},
];

const seed = async () => {
	try {
		await db.sync({force: true});

		const billy = await Robot.create(coolBots[0]);
		const johnny = await Robot.create(coolBots[1]);
		const joel = await Robot.create(coolBots[2]);
		const steve = await Robot.create(coolBots[3]);

		const barn = await Project.create(coolProjects[0]);
		const love = await Project.create(coolProjects[1]);
		const doors = await Project.create(coolProjects[2]);
		const curtains = await Project.create(coolProjects[3]);

		await love.addRobots(billy);
		await love.addRobots(joel);
		await johnny.addProjects(barn);
		await johnny.addProjects(doors);
	} catch (err) {
		console.log(red(err));
	}
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log(green('Seeding success!'));
			db.close();
		})
		.catch(err => {
			console.error(red('Oh noes! Something went wrong!'));
			console.error(err);
			db.close();
		});
}
