import React from 'react';
import Greeting from './scrollMagic/greeting.js'
import Parallax from './scrollMagic/parallax.js'

const LandingPage = () => {
	return (
		<div className="greeting">
			<Greeting />
			<Parallax />
		</div>
	);
};

export default LandingPage;
