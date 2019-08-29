import axios from 'axios';

//action type
export const SET_PROJECTS = 'SET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

//action creator
export const setProjects = projects => {
	return {
		type: SET_PROJECTS,
		projects,
	};
};

export const addProject = project => {
	return {
		type: ADD_PROJECT,
		project,
	};
};

export const removeProject = id => {
	return {
		type: REMOVE_PROJECT,
		id,
	};
};

//thunk creator

export const fetchProjects = () => {
	return async dispatch => {
		try {
			const {data} = await axios.get('/api/projects');
			dispatch(setProjects(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

export const addProjectThunk = project => {
	return async dispatch => {
		try {
			const {data} = await axios.post('/api/projects', project);
			dispatch(addProject(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

export const removeProjectThunk = id => {
	return async dispatch => {
		try {
			await axios.delete(`/api/projects/${id}`);
			dispatch(removeProject(id));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

const initialState = [];

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PROJECTS: {
			return action.projects;
		}
		case ADD_PROJECT: {
			return [...state, action.project];
		}
		case REMOVE_PROJECT: {
			return state.filter(proj => proj.id !== Number(action.id));
		}
		default: {
			return state;
		}
	}
};
