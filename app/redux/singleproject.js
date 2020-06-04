import axios from 'axios';

//action type
export const GET_SINGLE_PROJECT = 'GET_SINGLE_PROJECT';
export const UPDATE_PROJ_ASSIGN = 'UPDATE_PROJ_ASSIGN';
export const COMPLETE_PROJECT = 'COMPLETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const CLEAR_PROJECT = 'CLEAR_PROJECT';


export const unassignRobotThunk = (projectId, robotId) => {
	return async dispatch => {
		try {
			const robot = {
				id: robotId,
			};
			await axios.put(`/api/projects/assignments/${projectId}`, robot);
			dispatch(unassignRobot(robotId));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

export const completeProjectThunk = (id, bool) => {
	return async dispatch => {
		try {
			await axios.put(`/api/projects/complete/${id}`, {
				completed: bool,
			});
			dispatch(completeProject(id));
		} catch (err) {
			console.log('Error', err);
		}
	};
};



export const clearProjectThunk = () => {
	return dispatch => {
		try {
			dispatch(clearProject({}));
		} catch (err) {
			console.log('Error', err);
		}
	};
};


const initialState = {};

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_PROJECT: {
			return action.project;
		}
		case UPDATE_PROJ_ASSIGN: {
			return action.project;
		}
		case COMPLETE_PROJECT: {
			return {...state, completed: !state.completed};
		}
		case UPDATE_PROJECT: {
			return action.project;
		}
		case CLEAR_PROJECT: {
			return action.project;
		}
		default: {
			return state;
		}
	}
};
