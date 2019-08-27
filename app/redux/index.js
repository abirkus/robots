import {combineReducers} from 'redux';
import {robotReducer, SET_ROBOTS, setRobots} from './robots';

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...

//const appReducer = () => {};
const appReducer = combineReducers({
	robotReducer,
	//projects,
});

export default appReducer;
