import axios from 'axios';

//action type
export const GET_SINGLE_PROJECT = 'GET_SINGLE_PROJECT';
export const UNASSIGN_ROBOT = 'UNASSIGN_ROBOT';
export const COMPLETE_PROJECT = 'COMPLETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

//action creator
export const getSingleProject = project => {
	return {
		type: GET_SINGLE_PROJECT,
		project,
	};
};

export const unassignRobot = id => {
	return {
		type: UNASSIGN_ROBOT,
		id,
	};
};

export const completeProject = id => {
	return {
		type: COMPLETE_PROJECT,
		id,
	};
};

export const updateProject = project => {
	return {
		type: UPDATE_PROJECT,
		project,
	};
};
//thunk creators

export const fetchSingleProject = id => {
	return async dispatch => {
		try {
			const {data} = await axios.get(`/api/projects/${id}`);
			dispatch(getSingleProject(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

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

export const updateProjectThunk = (id, project) => {
	return async dispatch => {
		try {
			const {data} = await axios.put(`/api/projects/${id}`, project);
			dispatch(updateProject(data));
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
		case UNASSIGN_ROBOT: {
			const newRobotArr = state.robots.filter(
				bot => bot.id !== Number(action.id)
			);
			return {...state, robots: newRobotArr};
		}
		case COMPLETE_PROJECT: {
			return {...state, completed: !state.completed};
		}
		case UPDATE_PROJECT: {
			return action.project;
		}
		default: {
			return state;
		}
	}
};
