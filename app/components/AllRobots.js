import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { createSelector } from 'reselect';
import {Link, useParams} from 'react-router-dom';
import AddRobot from './AddRobot.js';
import {removeRobotThunk, fetchRobotsThunk, clearRobotsThunk} from '../redux/robots.js';


function AllRobots(props) {
		const dispatch = useDispatch()
		const robots = useSelector( state => state.robots)
		useEffect(() => {
			try {
				//dispatch(fetchRobotsThunk())
				dispatch({ type: "FETCH_BOTS", value: 0})
			} catch (e) {
				console.error(e.message)
			}
			//we don't want to clear the redux state for this component but we can
			//using the return message below
			//return () => {dispatch(clearRobotsThunk())}
		}, [props.match.path])

		const handleClick = evt => {
			evt.preventDefault();
			if (evt.target.id) {
				dispatch(removeRobotThunk(evt.target.id))
			}
		};

		return robots.length ? (
			<div className="allItems">
				<div className="list">
					<ul className="redx">
						{robots.map(bot => (
							<li
								key={bot.id}
								id={bot.id}
								type="button"
								onClick={id => handleClick(id)}>
								<span className="preview" href={bot.imageUrl}>
									<Link to={`/robots/${bot.id}`} key={bot.id}>
										{bot.name}
										<span>
											<img src={bot.imageUrl} />
										</span>
									</Link>
								</span>
							</li>
						))}
					</ul>
					<div />
				</div>
				<AddRobot />
			</div>
		) : (
			<div>
				<h1>No Robots Found</h1>
				<AddRobot />
			</div>
		);
}

export default AllRobots;
