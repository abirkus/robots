import React from 'react';
import {connect} from 'react-redux';
import SingleRobot from './SingleRobot';

const AllRobots = props => {
	console.log('ALLROBOTS', props.robots);
	return (
		<div>
			{props.robots[0].id ? (
				<ul>
					{props.robots.map(el => (
						<SingleRobot key={el.id} robot={el} />
					))}
				</ul>
			) : (
				<div>No Robots</div>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		robots: state.robots,
	};
};

export default connect(mapStateToProps)(AllRobots);
