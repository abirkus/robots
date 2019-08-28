import Axios from 'axios';

//action type
export const SET_PROJECTS = 'SET_PROJECTS';

//action creator
export const setProjects = projects => {
	return {
		type: SET_PROJECTS,
		projects,
	};
};

//thunk creator

export const fetchProjects = () => {
	return async dispatch => {
		try {
			const {data} = await Axios.get('/api/projects');
			dispatch(setProjects(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

const initialState = [];

//reducer
export const projects = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROJECTS: {
			return action.projects;
		}
		default: {
			return state;
		}
	}
};
