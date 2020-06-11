import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
	completeProjectThunk
} from '../redux/singleproject';
import {Link, useParams} from 'react-router-dom';
import ProjectInputForm from './ProjectInputForm.js';
import AssignRobots from './AssignRobots.js'
import { Row, Col, Card, Button } from 'antd';
import { ToolOutlined  } from '@ant-design/icons';


const { Meta } = Card;

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
		console.log("clicking", evt)
		//dispatch({type: 'UPDATE_PROJECT_ASSIGNMENT', value: {projectId, robotId: evt.target.id}})
	};
	const handleComplete = evt => {
		const completed = !props.project.completed;
		dispatch(completeProjectThunk(evt.target.id, completed))
	};

		return project.id ? (
			<Row align="middle">
				<Col span={12}>
					<Row justify="center">
						<Col>
						<Card
							hoverable
							style={{width: '300px', background: 'silver'}}
							cover={<ToolOutlined style={{fontSize: '30px'}} />}
						>
							<Meta title={project.title} />
							<ul>
								<li>Deadline: {project.deadline}</li>
								<li>Priority: {project.priority}</li>
								<li>Completed: {project.completed ? 'YES' : 'NO'}</li>
								<li>Description: {project.description}</li>
								<li>Assigned Robots:</li>
								<AssignRobots handleClick={handleClick} />
							</ul>
							<Button
										type="button"
										id={project.id}
										onClick={evt => {
											handleComplete(evt);
										}}>
										Complete
							</Button>
						</Card>
						</Col>
					</Row>
				</Col>
			<Col span={12}>
				<Row justify="center">
					<Col>
					<ProjectInputForm type="Update" />
					</Col>
				</Row>
			</Col>
			</Row>
		) : (
			<div />
		);	
}

export default SingleProject;
