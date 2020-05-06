import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { createSelector } from 'reselect';
import {Link, useParams} from 'react-router-dom';
import AddRobot from './AddRobot.js';
import {removeRobotThunk, fetchRobotsThunk, clearRobotsThunk} from '../redux/robots.js';
import { Table } from 'antd';
import DeleteRowCell from './Cells/DeleteCell'
import { RobotNameCell } from './Cells/nameCell'

const columns = [
	{
	  dataIndex: 'name',
	  key: 'name',
	  render: (value, row) => <RobotNameCell value={value} id={row.id}/>
	},
	{
		dataIndex: 'id',
		render: (record) => <DeleteRowCell record={record} type="robot" />,
		key: 'id',
	  },
  ];
  

function AllRobots(props) {
		const dispatch = useDispatch()
		const robots = useSelector( state => state.robots)
		useEffect(() => {
			try {
				dispatch({ type: "FETCH_BOTS"})
			} catch (e) {
				console.error(e.message)
			}
			//we don't want to clear the redux state for this component but we can
			//using the return message below
			//return () => {dispatch(clearRobotsThunk())}
		}, [props.match.path])


		return robots.length ? (
			<div className="allItems">
				<div className="list">
					<Table dataSource={robots} columns={columns} pagination={false} />
					<div />
				</div>
				<AddRobot />
			</div>
		) : (
			<div>
				<h1>No Robots Found</h1>
				<AddRobot />
			</div>
		);
}

export default AllRobots;
