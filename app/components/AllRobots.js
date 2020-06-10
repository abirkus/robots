import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { createSelector } from 'reselect';
import {Link, useParams} from 'react-router-dom';
import RobotInpuForm from './RobotInpuForm.js';
import { Table, List, Avatar, Row, Col } from 'antd';
import DeleteRowCell from './Cells/DeleteCell'
import { RobotNameCell } from './Cells/nameCell'


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
			<Row align="middle">
				<Col span={12} >
					<Row justify="center">
					<Col>
					<List
						itemLayout="horizontal"
						dataSource={robots}
						renderItem={item => (
						<List.Item>
							<List.Item.Meta
							avatar={<Avatar src={`${item.imageUrl}`} />}
							title={<Link to={`/robots/${item.id}`}>{item.name}</Link>}
							/>
							<div><DeleteRowCell record={item} /></div>
						</List.Item>
						)}
					/>
					</Col>
					</Row>
				</Col>
				<Col span={12} >
					<Row justify="center">
						<Col>
							<RobotInpuForm type="Add" />
						</Col>
					</Row>
				</Col>
			</Row>
		) : (
			<Row align="middle"> 
			<Col span={24} >
			<Row justify="center">
				<Col>
				<h1>No Robots Found</h1>
					<RobotInpuForm type="Add" />
				</Col>
			</Row>
			</Col>

			</Row>
		);
}

export default AllRobots;
