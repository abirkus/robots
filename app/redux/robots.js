import axios from 'axios';

//action type
export const SET_ROBOTS = 'SET_ROBOTS';
export const ADD_ROBOT = 'ADD_ROBOT';
export const REMOVE_ROBOT = 'REMOVE_ROBOT';



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
		default: {
			return state;
		}
	}
};
