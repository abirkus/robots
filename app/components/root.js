import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import SingleRobot from './SingleRobot';
import SingleProject from './SingleProject';
import {connect} from 'react-redux';

import {fetchProjects} from '../redux/projects';
import Greeting from './Greeting';



function Root() {
	return (
		<Router>
			<div id="container">
				<nav className="topnav">
					<Link to="/">Home</Link>
					<Link to="/robots">All Robots</Link>
					<Link to="/projects">All Projects</Link>
				</nav>

				<div id="root">
					<Route exact path="/robots" component={AllRobots} />
					<Route exact path="/projects" component={AllProjects} />
					<Route
						path="/robots/:robotId"
						component={SingleRobot}
					/>
					<Route
						path="/projects/:projectId"
						component={SingleProject}
					/>
					<Route exact path="/" component={Greeting} />
				</div>
			</div>
		</Router>
	);
}


// class Root extends React.Component {


// 	render() {
// 		return (
// 			<Router>
// 				<div id="container">
// 					<nav className="topnav">
// 						<Link to="/">Home</Link>
// 						<Link to="/robots">All Robots</Link>
// 						<Link to="/projects">All Projects</Link>
// 					</nav>

// 					<div id="root">
// 						<Route exact path="/robots" component={AllRobots} />
// 						<Route exact path="/projects" component={AllProjects} />
// 						<Route
// 							path="/robots/:robotId"
// 							component={SingleRobot}
// 						/>
// 						<Route
// 							path="/projects/:projectId"
// 							component={SingleProject}
// 						/>
// 						<Route exact path="/" component={Greeting} />
// 					</div>
// 				</div>
// 			</Router>
// 		);
// 	}
// }


export default connect(
	null,
	null
)(Root);
