import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import {Button} from 'antd'
import { useDispatch} from 'react-redux';
//import {removeRobotThunk} from '../../actions/index.js';

function DeleteRowCell(props) {  
    const dispatch = useDispatch()

    const handleClick = evt => {
        console.log("trying to delete", evt.target.id)
        //dispatch(removeRobotThunk(Number(evt.target.id)))
        try {
            //dispatch({ type: "FETCH_BOTS"})
            dispatch({ type: 'REMOVE_BOT', value: evt.target.id})
        } catch (err) {
            console.error(err)
        }
        
        // evt.preventDefault();
        // if (evt.target.id) {
        //     dispatch(removeRobotThunk(evt.target.id))
        // }
    };

    return (
        <Button size="small" type="primary" danger={true} id={props.record} onClick={(event) => handleClick(event) }  >
            <DeleteOutlined />
        </Button>
    )
}


export default DeleteRowCell
