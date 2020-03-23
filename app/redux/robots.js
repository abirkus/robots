import axios from 'axios';

//action type
export const SET_ROBOTS = 'SET_ROBOTS';
export const ADD_ROBOT = 'ADD_ROBOT';
export const REMOVE_ROBOT = 'REMOVE_ROBOT';
export const CLEAR_ROBOTS = 'CLEAR_ROBOTS';

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

export const removeRobot = id => {
	return {
		type: REMOVE_ROBOT,
		id,
	};
};

export const clearRobots = robots => {
	return {
		type: CLEAR_ROBOTS,
		robots
	};
};

//thunk creators

export const fetchRobotsThunk = () => {
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

export const removeRobotThunk = id => {
	return async dispatch => {
		try {
			await axios.delete(`/api/robots/${id}`);
			dispatch(removeRobot(id));
		} catch (err) {
			console.log('Error', err);
		}
	};
};


export const clearRobotsThunk = () => dispatch => {
	try {
		dispatch(clearRobots([]))
	} catch (err) {
		console.error(err)
	}
}


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
		case REMOVE_ROBOT: {
			return state.filter(bot => bot.id !== Number(action.id));
		}
		case CLEAR_ROBOTS: {
			return action.robots
		}
		default: {
			return state;
		}
	}
};
