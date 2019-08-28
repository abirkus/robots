import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleProject} from '../redux/singleproject';
import {Link} from 'react-router-dom';

class SingleProject extends Component {
	componentDidMount() {
		try {
			const projectId = this.props.match.params.projectId;
			this.props.fetchSingleProject(projectId);
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const project = this.props.project;
		return project.id ? (
			<div>
				<ul>
					<div key={project.id}>
						<li>
							<span>Title: </span>
							{project.title}
						</li>
						<li>
							<span>Deadline: </span>
							{project.deadline}
						</li>
						<li>
							<span>Priority: </span>project.priority}
						</li>
						<li>
							<span>Description: </span>
							{project.description}
						</li>
						{project.robots[0] ? (
							<ul>
								{project.robots.map(bot => (
									<Link key={bot.id} to={`/robots/${bot.id}`}>
										<li>
											<span>Robot: </span>
											{bot.name}
										</li>
									</Link>
								))}
							</ul>
						) : (
							<li>No robots for this project</li>
						)}
					</div>
				</ul>
			</div>
		) : (
			<div />
		);
	}
}

//here we look at state in redux and only grab one array - singleproject
const mapStateToProps = state => {
	return {
		project: state.singleProject,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchSingleProject: id => dispatch(fetchSingleProject(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleProject);
