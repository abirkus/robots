import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { unassignProjectThunk} from '../redux/singlerobot';
import RobotInpuForm from './RobotInpuForm.js';
import AssignProjects from './AssignProjects'
import { Row, Col, Card } from 'antd';

const { Meta } = Card;


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
			<Row align="middle">
				<Col span={12}>
					<Row justify="center">
						<Col>

						<Card
							hoverable
							style={{width: '300px', background: 'silver'}}
							cover={<img alt="example" src={robot.imageUrl} />}
						>
							<Meta title={robot.name} />
							<ul>
								<li>Fuel Type: {robot.fuelType}</li>
								<li>Fuel Level: {robot.fuelLevel}</li>
								<li>Assigned Projects:</li>
								<AssignProjects />
							</ul>
						</Card>
						</Col>
					</Row>
				</Col>
			<Col span={12}>
				<Row justify="center">
					<Col>
						<RobotInpuForm type="Update" />
					</Col>
				</Row>
			</Col>

			</Row>
		) : (
			<div>No robot loading ...</div>
		);
}

export default SingleRobot
