import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddRobot from './AddRobot.js';
import {removeRobotThunk} from '../redux/robots.js';

class AllRobots extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = evt => {
		evt.preventDefault();
		this.props.remove(evt.target.id);
	};

	render() {
		const robots = this.props.robots;
		return robots[0].id ? (
			<div>
				<ul>
					{robots.map(bot => (
						<li key={bot.id}>
							<Link to={`/robots/${bot.id}`} key={bot.id}>
								{/* <img src={bot.imageUrl} /> */}
								<span>{bot.name}</span>
							</Link>
							<span>
								<button
									type="button"
									onClick={id => this.handleClick(id)}>
									<img
										id={bot.id}
										src="http://www.clker.com/cliparts/b/5/2/d/1350385451825974658x-red-md.png"
										height="20"
										width="20"
									/>
								</button>
							</span>
						</li>
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
	}
}

const mapStateToProps = state => {
	return {
		robots: state.robots,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		remove: id => dispatch(removeRobotThunk(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllRobots);
