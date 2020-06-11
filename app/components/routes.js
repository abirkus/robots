import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import SingleRobot from './SingleRobot';
import SingleProject from './SingleProject';
import LandingPage from './LandingPage.js';

const Routes = () =>  {
    return (
        <Switch>
				<Route path="/robots/:robotId" component={SingleRobot} />
				<Route path="/projects/:projectId" component={SingleProject} />
                <Route exact path="/robots" component={AllRobots} />
                <Route exact path="/projects" component={AllProjects} />
                <Route exact path="/" component={LandingPage} />
        </Switch>
    )
}

export default Routes;
