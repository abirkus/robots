import axios from 'axios';

//action type
export const SET_ROBOTS = 'SET_ROBOTS';
export const ADD_ROBOT = 'ADD_ROBOT';

//action creator
export const setRobots = robots => {
	return {
		type: SET_ROBOTS,
		robots,
	};
};

export const addRobot = robot => {
	return {
		type: ADD_ROBOT,
		robot,
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

export const addRobotThunk = robot => {
	return async dispatch => {
		try {
			const {data} = await axios.post('/api/robots', robot);
			dispatch(addRobot(data));
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
		case ADD_ROBOT: {
			return [...state, action.robot];
		}
		default: {
			return state;
		}
	}
};
