import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {Button, Select, Menu, Dropdown} from 'antd'
import {DownOutlined} from '@ant-design/icons'

const {Option} = Select

function AssignProjects(props) {
	const projects = useSelector((state) => state.projects)

	const dispatch = useDispatch()

	const children = []

	projects.forEach((el) => {
		children.push(<Option key={el.id}>{el.title}</Option>)
	})

	// if we update robot details this selector will update the dom
	const robot = useSelector((state) => state.singleRobot)

	const initialArr = []
	robot.projects.forEach((proj) => {
		initialArr.push(proj.title)
	})
	console.log('robot from selector before dispatch', robot)

	// we are only using this effect once when we open new single robot page
	useEffect(() => {
		try {
			dispatch({type: 'FETCH_PROJECTS'})
		} catch (e) {
			console.error(e.message)
		}
	}, [])

	const handleChange = (evt) => {
		// use this handle change to assign and unassign projects
		console.log(evt)
	}

	console.log('robot from selector after dispatch', robot)
	const handleClick = (evt) => {
		dispatch({
			type: 'UNASSIGN_PRJCT_FROM_ROBOT',
			value: {robotId, projectId: evt.target.id},
		})
	}

	return children.length ? (
		<div>
			<Select
				mode='multiple'
				style={{width: '100%'}}
				placeholder='Please select'
				defaultValue={initialArr}
				onChange={handleChange}>
				{children}
			</Select>
		</div>
	) : (
		<div />
	)
}

export default AssignProjects
