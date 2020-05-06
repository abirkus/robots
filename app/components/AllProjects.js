import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import AddProject from './AddProject.js';
import {removeProjectThunk, fetchProjectsThunk, clearProjectsThunk} from '../redux/projects.js';
import { Table } from 'antd';
import { ProjectNameCell } from './Cells/nameCell'
import DeleteRowCell from './Cells/DeleteCell'

const columns = [
	{
	  dataIndex: 'title',
	  key: 'title',
	  render: (value, row) => <ProjectNameCell value={value} id={row.id}/>
	},
	{
		dataIndex: 'id',
		render: (record) => <DeleteRowCell record={record} type="project" />,
		key: 'id',
	  },
  ];


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
			<div className="allItems">
				<div className="list">
					<Table dataSource={projects} columns={columns} pagination={false} />
				</div>
				<AddProject />
			</div>
		) : (
			<div>
				<div>No Projects Found</div>
				<AddProject />
			</div>
		)

}

export default AllProjects;
