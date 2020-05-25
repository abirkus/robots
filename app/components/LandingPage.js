import React from 'react';
import Greeting from './scrollMagic/greeting.js'
import About from './scrollMagic/about.js'
import Parallax from './scrollMagic/parallax.js'

const LandingPage = () => {
	return (
		<div>
			<Greeting />
			<About />
			<Parallax />
		</div>
	);
};

export default LandingPage;
