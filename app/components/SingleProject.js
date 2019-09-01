import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	fetchSingleProject,
	unassignRobotThunk,
	completeProjectThunk,
} from '../redux/singleproject';
import {Link} from 'react-router-dom';
import UpdateProject from './UpdateProject.js';

class SingleProject extends Component {
	componentDidMount() {
		try {
			const projectId = this.props.match.params.projectId;
			this.props.fetchSingleProject(projectId);
		} catch (error) {
			console.error(error);
		}
	}
	handleClick = evt => {
		const projectId = this.props.project.id;
		const robotId = evt.target.id;
		this.props.unassignRobot(projectId, robotId);
	};
	handleComplete = evt => {
		const completed = !this.props.project.completed;
		this.props.completeProject(evt.target.id, completed);
	};
	render() {
		const project = this.props.project;
		return project.id ? (
			<div className="allItems">
				<div key={project.id} className="list">
					<ul>
						<li>
							<span>Title: </span>
							{project.title}
						</li>
						<li>
							<span>Deadline: </span>
							{project.deadline}
						</li>
						<li>
							<span>Priority: </span>
							{project.priority}
						</li>
						<li>
							<span>Completed: </span>
							{project.completed ? 'YES' : 'NO'}
						</li>
						<li>
							<span>Description: </span>
							{project.description}
						</li>
						{project.robots[0] ? (
							<ul className="associations">
								{project.robots.map(bot => (
									<li key={bot.id}>
										<Link to={`/robots/${bot.id}`}>
											<span>Robot: </span>
											<span>{bot.name}</span>
										</Link>
										<span>
											<button
												type="button"
												id={bot.id}
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
							<li>No robots for this project</li>
						)}
						<div>
							<br />
							<button
								type="button"
								id={project.id}
								onClick={evt => {
									this.handleComplete(evt);
								}}>
								Complete
							</button>
						</div>
					</ul>
				</div>

				<div className="form">
					<UpdateProject
						params={this.props.match.params}
						fetchSingleProject={this.props.fetchSingleProject}
					/>
				</div>
			</div>
		) : (
			<div />
		);
	}
}

const mapStateToProps = state => {
	return {
		project: state.singleProject,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchSingleProject: id => dispatch(fetchSingleProject(id)),
		unassignRobot: (projectId, robotId) =>
			dispatch(unassignRobotThunk(projectId, robotId)),
		completeProject: (id, bool) => dispatch(completeProjectThunk(id, bool)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleProject);
