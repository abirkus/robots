import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddRobot from './AddRobot.js';
import {removeRobotThunk} from '../redux/robots.js';
import {fetchRobots} from '../redux/robots';

function AllRobots(props) {

		console.log("props ---", props)


		useEffect(() => {
			console.log("using effect - robots length", props.robots.length)
			props.fetchRobots()
		}, [props.robots.length])

		const robots = props.robots || []

		const handleClick = evt => {
			evt.preventDefault();
			if (evt.target.id) {
				props.remove(evt.target.id);
			}
		};

		return robots.length ? (
			<div className="allItems">
				<div className="list">
					<ul className="redx">
						{robots.map(bot => (
							<li
								key={bot.id}
								id={bot.id}
								type="button"
								onClick={id => handleClick(id)}>
								<span className="preview" href={bot.imageUrl}>
									<Link to={`/robots/${bot.id}`} key={bot.id}>
										{bot.name}
										<span>
											<img src={bot.imageUrl} />
										</span>
									</Link>
								</span>
							</li>
						))}
					</ul>
					<div />
				</div>
				<AddRobot />
			</div>
		) : (
			<div>
				<h1>No Robots Found</h1>
				<AddRobot />
			</div>
		);
}


const mapStateToProps = state => {
	return {
		robots: state.robots,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchRobots: () => dispatch(fetchRobots()),
		remove: id => dispatch(removeRobotThunk(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllRobots);
