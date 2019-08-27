import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AllRobots from './AllRobots';
import {connect} from 'react-redux';
import {fetchRobots} from '../redux/robots';

class Root extends React.Component {
	componentDidMount() {
		// Huh, I wonder what this mysterious componentDidMount is doing here... 🤔
		this.props.fetchRobots();
	}
	render() {
		console.log('inside render for root', this.props);
		return (
			<Router>
				<div>
					<nav className="topnav">
						<Link to="/">Home</Link>
						<Link to="/robots">All Robots</Link>
					</nav>
					<h1>
						Welcome to StackBot Project Management: your robot
						employees are awaiting assignments!
					</h1>
					<div>
						<AllRobots />
						{/* <Route path="/robots" component={AllRobots} /> */}
					</div>
				</div>
			</Router>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRobots: () => dispatch(fetchRobots()),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Root);
