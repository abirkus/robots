import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import RobotInpuForm from './RobotInpuForm.js';
import AssignProjects from './AssignProjects'


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
	const handleClick = projectId => {
		dispatch({type: 'UPDATE_ROBOT_ASSIGNMENT', value: {robotId, projectId: projectId }})
	};

		return robot.id ? (
			<div className="allItems">
				<div key={robot.id} className="list">
					<ul>
						<img src={robot.imageUrl} height="300" width="400" />
						<li>{robot.name}</li>
						<li>{robot.fuelType}</li>
						<li>{robot.fuelLevel}</li>
						<li>Projects assigned to this robot:</li>
						<AssignProjects handleClick={handleClick} />
					</ul>
				</div>
				<RobotInpuForm type="Update" />
			</div>
		) : (
			<div>No robot loading ...</div>
		);
}

export default SingleRobot
