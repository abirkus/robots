import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { unassignProjectThunk} from '../redux/singlerobot';
import RobotInpuForm from './RobotInpuForm.js';

function SingleRobot(props) {
	const {robotId} = useParams()

	const dispatch = useDispatch()

	// if we update robot details this selector will update the dom
	const robot = useSelector( state => state.singleRobot)

	console.log('robot from selector before dispatch', robot)


	// we are only using this effect once when we open new single robot page
	useEffect(() => {
		try {
			console.log('inside use effect', robotId)
			dispatch({ type: 'FETCH_SINGLE_ROBOT', value: robotId })
		} catch (e) {
			console.error(e.message)
		}
	}, [robotId])


	console.log('robot from selector after dispatch', robot)
	const handleClick = evt => {
		dispatch({type: 'UNASSIGN_PRJCT_FROM_ROBOT', value: {robotId, projectId: evt.target.id}})
	};

		return robot.id ? (
			<div className="allItems">
				<div key={robot.id} className="list">
					<ul>
						<img src={robot.imageUrl} height="300" width="400" />
						<li>{robot.name}</li>
						<li>{robot.fuelType}</li>
						<li>{robot.fuelLevel}</li>
						{robot.projects.length ? (
							<ul className="associations">
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
													handleClick(evt);
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
					</ul>
				</div>
				<RobotInpuForm type="Update" />
			</div>
		) : (
			<div>No robot loading ...</div>
		);
}

export default SingleRobot
