import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddProject from './AddProject.js';
import {removeProjectThunk} from '../redux/projects.js';

class AllProjects extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = evt => {
		evt.preventDefault();
		this.props.remove(evt.target.id);
	};

	render() {
		const projects = this.props.projects;
		return projects.length ? (
			<div className="allItems">
				<div className="list">
					<ul>
						{projects.map(proj => (
							<li key={proj.id}>
								<div>
									<Link
										to={`/projects/${proj.id}`}
										key={proj.id}>
										<span>{proj.title}</span>
									</Link>
									<span>
										<button
											type="button"
											onClick={id =>
												this.handleClick(id)
											}>
											<img
												id={proj.id}
												src="http://www.clker.com/cliparts/b/5/2/d/1350385451825974658x-red-md.png"
												height="20"
												width="20"
											/>
										</button>
									</span>
								</div>
								<ul>
									<li>
										{proj.deadline
											? proj.deadline
											: 'No deadline'}
									</li>
								</ul>
							</li>
						))}
					</ul>
				</div>
				<AddProject />
			</div>
		) : (
			<div>
				<div>No Projects</div>
				<AddProject />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		remove: id => dispatch(removeProjectThunk(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllProjects);
