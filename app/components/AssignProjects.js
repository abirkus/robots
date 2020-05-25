import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { Button, Modal } from 'antd'

function AssignProjects(props) {
    const [show, setShow] = useState(false);
    const robots = useSelector( state => state.robots)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	const dispatch = useDispatch()

	// if we update robot details this selector will update the dom
	const robot = useSelector( state => state.singleRobot)

	console.log('robot from selector before dispatch', robot)


	// we are only using this effect once when we open new single robot page
	useEffect(() => {
		try {
            dispatch({ type: "FETCH_PROJECTS"})
		} catch (e) {
			console.error(e.message)
		}
	}, [])


	console.log('robot from selector after dispatch', robot)
	const handleClick = evt => {
		dispatch({type: 'UNASSIGN_PRJCT_FROM_ROBOT', value: {robotId, projectId: evt.target.id}})
	};

		return (
        <div>
            <Button variant="primary" onClick={handleShow}>
              Assign Projects to this robot
            </Button>
            <Modal
                title="Basic Modal"
                visible={show}
                onOk={handleClose}
                onCancel={handleClose}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>)
}

export default AssignProjects
