import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import {Button} from 'antd'
import { useDispatch} from 'react-redux';
//import {removeRobotThunk} from '../../actions/index.js';

function DeleteRowCell(props) {  
    const dispatch = useDispatch()

    const handleClick = evt => {
        try {
            if (props.type === 'robot') {
                dispatch({ type: 'REMOVE_BOT', value: evt.target.id})
            } else if (props.type === 'project') {
                dispatch({ type: 'DELETE_PROJECT', value: evt.target.id})
            }
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <Button size="small" type="primary" danger={true} id={props.record} onClick={(event) => handleClick(event) }  >
            <DeleteOutlined />
        </Button>
    )
}


export default DeleteRowCell
