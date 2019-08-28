import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AllRobots = props => {
	const robots = props.robots;
	return (
		<div>
			{robots[0].id ? (
				<ul>
					{robots.map(bot => (
						<Link to={`/robots/${bot.id}`} key={bot.id}>
							<img src={bot.imageUrl} />
							<p>{bot.name}</p>
						</Link>
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
