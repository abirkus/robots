import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//will need to include thunks to load singlerobot
//thunk will load for DB robots with projects
//reference Readium with redux for info

const SingleRobot = props => {
	console.log('PROPS INSIDE SINGLE', props);
	return (
		<div>
			<ul>
				<div key={props.robot.id}>
					<li>
						<Link to={`/robots/${props.robot.id}`}>
							{props.robot.name}
						</Link>
					</li>
					{/* <li>{props.robot.projects[0]}</li> */}
					<img src={props.robot.imageUrl} />
				</div>
			</ul>
		</div>
	);
};

// const mapStateToProps = state => {
// 	return {
// 		robot: state.robot,
// 	};
// };
export default SingleRobot;
// export default connect(mapStateToProps)(SingleRobot);
