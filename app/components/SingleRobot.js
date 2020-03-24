import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {fetchSingleRobot, unassignProjectThunk, clearRobotThunk} from '../redux/singlerobot';
import UpdateRobot from './UpdateRobot.js';

function SingleRobot(props) {
	const {robotId} = useParams()

	const dispatch = useDispatch()

	const robot = useSelector( state => state.singleRobot)

	console.log('robot from selector before dispatch', robot)
	useEffect(() => {
		try {
			dispatch(fetchSingleRobot(robotId))
		} catch (e) {
			console.error(e.message)
		}

		//clear single robot
		return () => { dispatch(clearRobotThunk())}
	}, [robotId])


	console.log('robot from selector after dispatch', robot)
	const handleClick = evt => {
		dispatch(unassignProjectThunk(robotId, evt.target.id))
	};

		return robot.id ? (
			<div className="allItems">
				<div key={robot.id} className="list">
					<ul>
						<img src={robot.imageUrl} height="300" width="400" />
						<li>{robot.name}</li>
						<li>{robot.fuelType}</li>
						<li>{robot.fuelLevel}</li>
						{robot.projects[0] ? (
							<ul className="associations">
								{robot.projects.map(proj => (
									<li key={proj.id}>
										<Link to={`/projects/${proj.id}`}>
											<span>{proj.title}</span>
										</Link>
										<span>
											<button
												type="button"
												id={proj.id}
												onClick={evt => {
													handleClick(evt);
												}}>
												Unassign
											</button>
										</span>
									</li>
								))}
							</ul>
						) : (
							<li>No projects for this robot</li>
						)}
					</ul>
				</div>
				<div className="form">
					<UpdateRobot
						params={props.match.params}
						fetchSingleRobot={props.fetchSingleRobot}
					/>
				</div>
			</div>
		) : (
			<div>No robot loading ...</div>
		);
	
}

export default SingleRobot

// const mapStateToProps = state => {
// 	return {
// 		robot: state.singleRobot,
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchSingleRobot: id => dispatch(fetchSingleRobot(id)),
// 		unassignProject: (robotId, projectId) =>
// 			dispatch(unassignProjectThunk(robotId, projectId)),
// 	};
// };

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(SingleRobot);
