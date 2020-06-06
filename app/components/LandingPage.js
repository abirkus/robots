import React from 'react';
import Greeting from './scrollMagic/greeting.js'
import Parallax from './scrollMagic/parallax.js'
import Employee from './scrollMagic/employee.js'

const LandingPage = () => {
	return (
		<div className="greeting">
			<Greeting />
			<Employee />
			<Parallax />
		</div>
	);
};

export default LandingPage;
