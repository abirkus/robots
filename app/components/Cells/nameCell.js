import React from 'react'
import {Button} from 'antd'
import { useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export const RobotNameCell = ({ value, id }) => (  
    <Link to={`/robots/${id}`}>{value}</Link>
)

export const projectNameCell = (row) => ( 
    <Link to={`/projects/${row.id}`}>{row.name}</Link>
)