import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
	completeProjectThunk
} from '../redux/singleproject';
import {Link, useParams} from 'react-router-dom';
import ProjectInputForm from './ProjectInputForm.js';
import AssignRobots from './AssignRobots.js'



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

	const handleClick = robotId => {
		dispatch({type: 'UPDATE_PROJECT_ASSIGNMENT', value: {projectId, robotId: robotId }})
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
						<li>Robots assigned to this project:</li>
						<AssignRobots handleClick={handleClick} />
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
					<ProjectInputForm type="Update" />
			</div>
		) : (
			<div />
		);	
}

export default SingleProject;
