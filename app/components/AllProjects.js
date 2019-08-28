import React from 'react';
import {connect} from 'react-redux';

const AllProjects = props => {
	return (
		<div>
			{props.projects[0].id ? (
				<ul>
					{props.projects.map(el => (
						<div key={el.id}>
							<li>{el.title}</li>
							<li>{el.deadline ? el.deadline : 'No deadline'}</li>
						</div>
					))}
				</ul>
			) : (
				<div>No Projects</div>
			)}
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
