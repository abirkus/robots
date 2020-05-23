import axios from 'axios';

//action type
export const GET_SINGLE_ROBOT = 'GET_SINGLE_ROBOT';
export const UNASSIGN_PROJECT = 'UNASSIGN_PROJECT';
export const UPDATE_ROBOT = 'UPDATE_ROBOT';


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
		default: {
			return state;
		}
	}
};
