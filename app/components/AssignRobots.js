import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { Button, Modal, Select } from 'antd'

function AssignRobots(props) {
    
    const robots = useSelector( state => state.robots)

	const dispatch = useDispatch()

	// if we update robot details this selector will update the dom
	const robot = useSelector( state => state.singleRobot)

	console.log('robot from selector before dispatch', robot)


    const children = []

    robots.forEach((el) => {
        children.push(<Option key={el.id}>{el.name}</Option>);
    })

	// we are only using this effect once when we open new single robot page
	useEffect(() => {
		try {
            dispatch({ type: "FETCH_BOTS"})
		} catch (e) {
			console.error(e.message)
		}
	}, [])

    const handleChange = evt => {
        // use this handle change to assign and unassign projects
		console.log(evt)
    };
    
	console.log('robot from selector after dispatch', robot)
	const handleClick = evt => {
		dispatch({type: 'UNASSIGN_PRJCT_FROM_ROBOT', value: {robotId, projectId: evt.target.id}})
	};

    return children.length ? (
        <div>
            <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                >
                    {children}
            </Select>
        </div>) : ( <div /> )
}

export default AssignRobots
