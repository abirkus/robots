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
		if (evt.target.id) {
			this.props.remove(evt.target.id);
		}
	};

	render() {
		const projects = this.props.projects;
		return projects.length ? (
			<div className="allItems">
				<div className="list">
					<ul className="redx">
						{projects.map(proj => (
							<li
								key={proj.id}
								id={proj.id}
								type="button"
								onClick={id => this.handleClick(id)}>
								<div>
									<span>
										<Link
											to={`/projects/${proj.id}`}
											key={proj.id}>
											{proj.title}
										</Link>
									</span>
								</div>
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
