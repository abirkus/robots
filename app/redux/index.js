import {combineReducers} from 'redux';
import robots from './robots';
import projects from './projects';
import singleRobot from './singlerobot';

const appReducer = combineReducers({
	robots,
	projects,
	singleRobot,
});

export default appReducer;
