import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRobotThunk} from '../redux/robots.js';

class AddRobot extends Component {
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
		this.props.post(this.state);
		this.setState({
			name: '',
			fuelType: 'electric',
			fuelLevel: '',
			imageUrl: '',
		});
	}

	render() {
		return (
			<form id="robot-form" onSubmit={this.handleSubmit}>
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

				<button type="submit">Submit</button>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		post: obj => dispatch(addRobotThunk(obj)),
	};
};
export default connect(
	null,
	mapDispatchToProps
)(AddRobot);

// <button type='submit' disabled={!props.robotName || !props.fuelType}>
