import 'jsdom-global/register';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {fetchRobots} from '../redux/robots';
import mock from '../../tests/mock-axios';

export class AllRobots extends Component {
	constructor(props) {
		super(props);
	}
	// componentDidMount() {
	// 	this.props.fetchRobots();
	// }

	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.robots[0] ? (
					<ul>
						{this.props.robots.map(el => (
							// eslint-disable-next-line react/jsx-key
							<div>
								<li>{el.name}</li>
								<img src={el.imageUrl} />
							</div>
						))}
					</ul>
				) : (
					<div>No Robots</div>
				)}
			</div>
		);
	}
}

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState)(AllRobots)
//export default AllRobots;

const mapStateToProps = state => {
	return {
		robots: state.robots,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		fetchRobots: () => dispatch(fetchRobots()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllRobots);
