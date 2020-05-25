import axios from 'axios';

//action type
export const SET_PROJECTS = 'SET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS'


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
