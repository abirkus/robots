import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSingleRobot} from '../redux/singlerobot';

class SingleRobot extends Component {
	componentDidMount() {
		try {
			const robotId = this.props.match.params.robotId;
			this.props.fetchSingleRobot(robotId);
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const robot = this.props.robot;
		return robot.id ? (
			<div>
				<ul>
					<div key={robot.id}>
						<li>{robot.name}</li>
						<img src={robot.imageUrl} />
						<li>{robot.fuelType}</li>
						<li>{robot.fuelLevel}</li>
						{robot.projects[0] ? (
							<ul>
								{robot.projects.map(proj => (
									<Link
										to={`/projects/${proj.id}`}
										key={proj.id}>
										<li>{proj.title}</li>
									</Link>
								))}
							</ul>
						) : (
							<li>No projects for this robot</li>
						)}
					</div>
				</ul>
			</div>
		) : (
			<div />
		);
	}
}

//here we look at state in redux and only grab one array - singleRobot
const mapStateToProps = state => {
	return {
		robot: state.singleRobot,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchSingleRobot: id => dispatch(fetchSingleRobot(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleRobot);
