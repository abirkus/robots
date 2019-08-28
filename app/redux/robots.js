import axios from 'axios';

//action type
export const SET_ROBOTS = 'SET_ROBOTS';

//action creator
export const setRobots = robots => {
	return {
		type: SET_ROBOTS,
		robots,
	};
};

//thunk creators

export const fetchRobots = () => {
	return async dispatch => {
		try {
			const {data} = await axios.get('/api/robots');
			dispatch(setRobots(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

const initialState = [];

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ROBOTS: {
			return action.robots;
		}
		default: {
			return state;
		}
	}
};
