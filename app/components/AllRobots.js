import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddRobot from './AddRobot.js';

const AllRobots = props => {
	const robots = props.robots;
	return robots[0].id ? (
		<div>
			<ul>
				{robots.map(bot => (
					<Link to={`/robots/${bot.id}`} key={bot.id}>
						<img src={bot.imageUrl} />
						<p>{bot.name}</p>
					</Link>
				))}
			</ul>
			<div>
				<h1>Add a new robot</h1>
				<AddRobot />
			</div>
		</div>
	) : (
		<div>
			<div>No Robots Found</div>
			<h1>Add a new robot</h1>
			<AddRobot />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		robots: state.robots,
	};
};

export default connect(mapStateToProps)(AllRobots);
