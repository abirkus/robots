import Axios from 'axios';

//action type
export const SET_ROBOTS = 'SET_ROBOTS';

//action creator
export const setRobots = robots => {
	return {
		type: SET_ROBOTS,
		robots,
	};
};

//thunk creator

export const fetchRobots = () => {
	return async dispatch => {
		try {
			const {data} = await Axios.get('/api/robots');
			dispatch(setRobots(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

const initialState = [];

//reducer
export const robots = (state = initialState, action) => {
	switch (action.type) {
		case SET_ROBOTS: {
			return action.robots;
		}
		default: {
			return state;
		}
	}
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		updateName: name => dispatch(newName(name)),
// 	};
// };
