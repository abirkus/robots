import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { Button, Select, Menu, Dropdown  } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;


function AssignProjects(props) {
    const projects = useSelector( state => state.projects)

    const dispatch = useDispatch()
    
    const children = []

    projects.forEach((el) => {
        children.push(<Option key={el.id}>{el.title}</Option>);
    })

	// we are only using this effect once when we open new single robot page
	useEffect(() => {
		try {
            dispatch({ type: 'FETCH_PROJECTS'})
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
                    onSelect={handleChange}
                    onDeselect={handleChange}
                >
                    {children}
            </Select>
        </div>) : ( <div /> )
}

export default AssignProjects

