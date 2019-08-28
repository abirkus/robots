import axios from 'axios';

//action type
export const GET_SINGLE_PROJECT = 'GET_SINGLE_PROJECT';

//action creator
export const getSingleProject = project => {
	return {
		type: GET_SINGLE_PROJECT,
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

const initialState = {};

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_PROJECT:
			return action.project;
		default: {
			return state;
		}
	}
};
