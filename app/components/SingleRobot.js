import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSingleRobot, unassignProjectThunk} from '../redux/singlerobot';
import UpdateRobot from './UpdateRobot.js';

class SingleRobot extends Component {
	componentDidMount() {
		try {
			const robotId = this.props.match.params.robotId;
			this.props.fetchSingleRobot(robotId);
		} catch (error) {
			console.error(error);
		}
	}

	handleClick = evt => {
		const robotId = this.props.robot.id;
		const projectId = evt.target.id;
		this.props.unassignProject(robotId, projectId);
	};

	render() {
		console.log('PROPS', this.props);
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
									<li key={proj.id}>
										<Link to={`/projects/${proj.id}`}>
											<span>{proj.title}</span>
										</Link>
										<span>
											<button
												type="button"
												id={proj.id}
												onClick={evt => {
													this.handleClick(evt);
												}}>
												Unassign
											</button>
										</span>
									</li>
								))}
							</ul>
						) : (
							<li>No projects for this robot</li>
						)}
					</div>
					<div>
						<h1>Update robot</h1>
						<UpdateRobot
							params={this.props.match.params}
							fetchSingleRobot={this.props.fetchSingleRobot}
						/>
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
		unassignProject: (robotId, projectId) =>
			dispatch(unassignProjectThunk(robotId, projectId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleRobot);
