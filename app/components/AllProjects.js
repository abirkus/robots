import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import ProjectInputForm from './ProjectInputForm.js';
import {removeProjectThunk, fetchProjectsThunk, clearProjectsThunk} from '../redux/projects.js';
import { Table, List, Row, Col } from 'antd';
import { ProjectNameCell } from './Cells/nameCell'
import DeleteRowCell from './Cells/DeleteCell'

function AllProjects(props) {
	const dispatch = useDispatch()
	const projects = useSelector( state => state.projects)
	useEffect(() => {
		try {
			dispatch({ type: "FETCH_PROJECTS"})
		} catch (e) {
			console.error(e.message)
		}
		//we don't want to clear the redux state for this component but we can
		//using the return message below
		//return () => { dispatch(clearProjectsThunk()) }
	}, [props.match.path])

		return projects.length ? (
			<Row align="middle">
				<Col span={12}>
					<Row justify="center">
					<Col>
					<List
						itemLayout="horizontal"
						dataSource={projects}
						renderItem={item => (
						<List.Item>
							<List.Item.Meta
							title={<Link to={`/projects/${item.id}`}>{item.title}</Link>}
							/>
							<div><DeleteRowCell record={item} /></div>
						</List.Item>
						)}
					/>
					</Col>
					</Row>
				</Col>
					<Col span={12}>
						<Row justify="center">
							<Col>
								<ProjectInputForm type="Add" />
							</Col>
						</Row>
					</Col>
			</Row>) : (
				<Row>
					<Col span={24}>
						<Row justify="center">
							<Col>
								<h1>No Projects Found</h1>
								<ProjectInputForm type="Add" />
							</Col>
						</Row>
					</Col>
				</Row>

			)
}

export default AllProjects;
