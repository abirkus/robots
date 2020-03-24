import axios from 'axios';

//action type
export const GET_SINGLE_ROBOT = 'GET_SINGLE_ROBOT';
export const UNASSIGN_PROJECT = 'UNASSIGN_PROJECT';
export const UPDATE_ROBOT = 'UPDATE_ROBOT';
export const CLEAR_ROBOT = 'CLEAR_ROBOT';
//action creator
export const getSingleRobot = robot => {
	return {
		type: GET_SINGLE_ROBOT,
		robot,
	};
};
export const unassignProject = id => {
	return {
		type: UNASSIGN_PROJECT,
		id,
	};
};

export const updateRobot = robot => {
	return {
		type: UPDATE_ROBOT,
		robot,
	};
};

export const clearRobot = robot => {
	return {
		type: CLEAR_ROBOT,
		robot,
	};
};

//thunk creators

export const fetchSingleRobot = id => {
	return async dispatch => {
		try {
			const {data} = await axios.get(`/api/robots/${id}`);
			dispatch(getSingleRobot(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

export const unassignProjectThunk = (robotId, projectId) => {
	return async dispatch => {
		try {
			const proj = {
				id: projectId,
			};
			await axios.put(`/api/robots/assignments/${robotId}`, proj);
			dispatch(unassignProject(projectId));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

export const updateRobotThunk = (id, robot) => {
	return async dispatch => {
		try {
			const {data} = await axios.put(`/api/robots/${id}`, robot);
			dispatch(updateRobot(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

export const clearRobotThunk = () => {
	return dispatch => {
		try {
			dispatch(clearRobot({}));
		} catch (err) {
			console.log('Error', err);
		}
	};
};


const initialState = {};

//reducer
//our single robot state will hold only one robot at a time
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_ROBOT: {
			return action.robot;
		}
		case UNASSIGN_PROJECT: {
			const newProjArr = state.projects.filter(
				proj => proj.id !== Number(action.id)
			);
			return {...state, projects: newProjArr};
		}
		case UPDATE_ROBOT: {
			return action.robot;
		}
		case CLEAR_ROBOT: {
			return action.robot;
		}
		default: {
			return state;
		}
	}
};
