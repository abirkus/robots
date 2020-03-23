import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import AddProject from './AddProject.js';
import {removeProjectThunk, fetchProjectsThunk, clearProjectsThunk} from '../redux/projects.js';

function AllProjects() {

	const dispatch = useDispatch()
	const projects = useSelector( state => state.projects)

	useEffect(() => {
		try {
			dispatch(fetchProjectsThunk())
		} catch (e) {
			console.error(e.message)
		}
		return () => { dispatch(clearProjectsThunk()) }
	}, projects)

	const handleClick = evt => {
		evt.preventDefault();
		if (evt.target.id) {
			dispatch(removeProjectThunk(evt.target.id))
		}
	};

		return projects.length ? (
			<div className="allItems">
				<div className="list">
					<ul className="redx">
						{projects.map(proj => (
							<li
								key={proj.id}
								id={proj.id}
								type="button"
								onClick={id => handleClick(id)}>
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
				<div>No000 Projects</div>
				<AddProject />
			</div>
		)

}

export default AllProjects;

// const mapStateToProps = state => {
// 	return {
// 		projects: state.projects,
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchProjects: () => dispatch(fetchProjectsThunk()),
// 		remove: id => dispatch(removeProjectThunk(id)),
// 		clearProjects: () => dispatch(clearProjectsThunk())
// 	};
// };

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(AllProjects);
