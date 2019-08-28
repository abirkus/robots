import {combineReducers} from 'redux';
import {robots} from './robots';
import {projects} from './projects';

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...

//const appReducer = () => {};
const appReducer = combineReducers({
	robots,
	projects,
});

export default appReducer;
