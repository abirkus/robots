import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateRobotThunk} from '../redux/robots.js';

class UpdateRobot extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			name: '',
			fuelType: 'electric',
			fuelLevel: '',
			imageUrl: '',
		};
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.update(this.props.params.robotId, this.state);
		this.setState({
			name: '',
			fuelType: 'electric',
			fuelLevel: '',
			imageUrl: '',
		});
		this.props.fetchSingleRobot(this.props.params.robotId);
	}

	render() {
		return (
			<form id="update-form" onSubmit={this.handleSubmit}>
				<label htmlFor="name">Robot Name:</label>
				<input
					name="name"
					type="text"
					onChange={this.handleChange}
					value={this.state.name}
				/>

				<label htmlFor="fuelType">Fuel Type:</label>
				<select
					defaultValue="electric"
					name="fuelType"
					type="text"
					onChange={this.handleChange}>
					<option value="gas">gas</option>
					<option value="diesel">diesel</option>
					<option value="electric">electric</option>
				</select>

				<label htmlFor="fuelLevel">Fuel Level:</label>
				<input
					name="fuelLevel"
					type="number"
					onChange={this.handleChange}
					value={this.state.fuelLevel}
				/>

				<label htmlFor="imageUrl">Image URL:</label>
				<input
					name="imageUrl"
					type="text"
					onChange={this.handleChange}
					value={this.state.imageUrl}
				/>

				<button type="submit">Update</button>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		update: (id, obj) => dispatch(updateRobotThunk(id, obj)),
	};
};
export default connect(
	null,
	mapDispatchToProps
)(UpdateRobot);
