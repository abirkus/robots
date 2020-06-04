import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { Button, Modal, Select } from 'antd'

function AssignRobots(props) {
    
    const allRobots = useSelector( state => state.robots)
    
    const currentRobots = useSelector( state => state.singleProject.robots)
    const initialArr = []
    currentRobots.forEach((bot) => {
        initialArr.push(bot.name)
    })
	const dispatch = useDispatch()

	// if we update robot details this selector will update the dom
	const robot = useSelector( state => state.singleRobot)

	console.log('robot from selector before dispatch', robot)


    const children = []

    allRobots.forEach((el) => {
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
        props.handleClick(evt)
    };


    return children.length ? (
        <div>
            <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    showArrow={true}
                    showSearch={false}
                    defaultValue={initialArr}
                    onSelect={handleChange}
                    onDeselect={handleChange}
                >
                    {children}
            </Select>
        </div>) : ( <div /> )
}

export default AssignRobots
