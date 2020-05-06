import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
	fetchSingleProject,
	unassignRobotThunk,
	completeProjectThunk,
	clearProjectThunk
} from '../redux/singleproject';
import {Link, useParams} from 'react-router-dom';
import UpdateProject from './UpdateProject.js';

function SingleProject (props) {
	const {projectId} = useParams()
	const dispatch = useDispatch()
	const project = useSelector( state => state.singleProject)

	useEffect(() => {
		try {
			dispatch({type: 'FETCH_SINGLE_PROJECT', value: projectId})
		} catch (e) {
			console.error(e.message)
		}
	}, [projectId])

	const handleClick = evt => {
		dispatch(unassignRobotThunk(projectId, evt.target.id))
	};
	const handleComplete = evt => {
		const completed = !props.project.completed;
		dispatch(completeProjectThunk(evt.target.id, completed))
	};

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
													handleClick(evt);
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
									handleComplete(evt);
								}}>
								Complete
							</button>
						</div>
					</ul>
				</div>

				<div className="form">
					<UpdateProject
						params={props.match.params}
						fetchSingleProject={props.fetchSingleProject}
					/>
				</div>
			</div>
		) : (
			<div />
		);	
}

export default SingleProject;
