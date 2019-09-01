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
		if (evt.target.id) {
			this.props.remove(evt.target.id);
		}
	};

	render() {
		const robots = this.props.robots;
		return robots.length ? (
			<div className="allItems">
				<div className="list">
					<ul className="redx">
						{robots.map(bot => (
							<li
								key={bot.id}
								id={bot.id}
								type="button"
								onClick={id => this.handleClick(id)}>
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
