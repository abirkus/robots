import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddProject from './AddProject.js';

const AllProjects = props => {
	const projects = props.projects;
	return projects[0].id ? (
		<div>
			<ul>
				{projects.map(proj => (
					<Link to={`/projects/${proj.id}`} key={proj.id}>
						<h4>{proj.title}</h4>
						<ul>
							<li>
								{proj.deadline ? proj.deadline : 'No deadline'}
							</li>
						</ul>
					</Link>
				))}
			</ul>
			<div>
				<h1>Add a new project</h1>
				<AddProject />
			</div>
		</div>
	) : (
		<div>
			<div>No Projects</div>
			<h1>Add a new project</h1>
			<AddProject />
		</div>
	);
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState)(AllProjects)

const mapStateToProps = state => {
	return {
		projects: state.projects,
	};
};

export default connect(mapStateToProps)(AllProjects);
