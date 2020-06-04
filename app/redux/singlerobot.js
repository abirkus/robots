import axios from 'axios';

//action type
export const GET_SINGLE_ROBOT = 'GET_SINGLE_ROBOT';
export const UPDATE_ROBOT_ASSIGN = 'UPDATE_ROBOT_ASSIGN';
export const UPDATE_ROBOT = 'UPDATE_ROBOT';


const initialState = {};

//reducer
//our single robot state will hold only one robot at a time
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_ROBOT: {
			return action.robot;
		}
		case UPDATE_ROBOT_ASSIGN: {
			return action.robot;
		}
		case UPDATE_ROBOT: {
			return action.robot;
		}
		default: {
			return state;
		}
	}
};
