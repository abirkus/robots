import axios from 'axios';

//action type
export const SET_ROBOTS = 'SET_ROBOTS';
export const ADD_ROBOT = 'ADD_ROBOT';
export const REMOVE_ROBOT = 'REMOVE_ROBOT';
export const UPDATE_ROBOT = 'UPDATE_ROBOT';

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

export const updateRobot = robot => {
	return {
		type: UPDATE_ROBOT,
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

export const updateRobotThunk = (id, robot) => {
	return async dispatch => {
		try {
			const {data} = await axios.put(`/api/robots/${id}`, robot);
			dispatch(updateRobot(data));
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
		case REMOVE_ROBOT: {
			return state.filter(bot => bot.id !== Number(action.id));
		}
		case UPDATE_ROBOT: {
			return state.map(bot => {
				if (bot.id === Number(action.robot.id)) {
					bot = action.robot;
				}
				return bot;
			});
		}
		default: {
			return state;
		}
	}
};
