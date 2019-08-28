import {combineReducers} from 'redux';
import robots from './robots';
import projects from './projects';
import singleRobot from './singlerobot';
import singleProject from './singleproject';

const appReducer = combineReducers({
	robots,
	projects,
	singleRobot,
	singleProject,
});

export default appReducer;
