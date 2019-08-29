import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRobot} from '../redux/robots.js';

class AddRobot extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			robotName: '',
			fuelType: '',
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
			robotName: '',
			fuelType: '',
			fuelLevel: '',
			imageUrl: '',
		});
	}

	render() {
		console.log('form state', this.state);
		return (
			<form id="robot-form" onSubmit={this.handleSubmit}>
				<label htmlFor="robotName">Robot Name:</label>
				<input
					name="robotName"
					type="text"
					onChange={this.handleChange}
					value={this.state.robotName}
				/>

				<label htmlFor="fuelType">Fuel Type:</label>
				<input
					name="fuelType"
					type="text"
					onChange={this.handleChange}
					value={this.state.fuelType}
				/>

				<label htmlFor="fuelLevel">Fuel Level:</label>
				<input
					name="fuelLevel"
					type="text"
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
		post: obj => dispatch(addRobot(obj)),
	};
};
export default connect(
	null,
	mapDispatchToProps
)(AddRobot);

// <button type='submit' disabled={!props.robotName || !props.fuelType}>
