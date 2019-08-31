import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import SingleRobot from './SingleRobot';
import SingleProject from './SingleProject';
import {connect} from 'react-redux';
import {fetchRobots} from '../redux/robots';
import {fetchProjects} from '../redux/projects';

class Root extends React.Component {
	componentDidMount() {
		try {
			this.props.fetchRobots();
			this.props.fetchProjects();
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		return (
			<Router>
				<div id="container">
					<nav className="topnav">
						<Link to="/">Home</Link>
						<Link to="/robots">All Robots</Link>
						<Link to="/projects">All Projects</Link>
					</nav>
					<h1>
						Welcome to StackBot Project Management: your robot
						employees are awaiting assignments!
					</h1>

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
					</div>
				</div>
			</Router>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRobots: () => dispatch(fetchRobots()),
		fetchProjects: () => dispatch(fetchProjects()),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Root);
