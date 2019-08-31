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
		let obj = {};
		if (this.state.name) {
			obj.name = this.state.name;
		}
		if (this.state.fuelType) {
			obj.fuelType = this.state.fuelType;
		}
		if (this.state.fuelLevel) {
			obj.fuelLevel = this.state.fuelLevel;
		}
		if (this.state.imageUrl) {
			obj.imageUrl = this.state.imageUrl;
		}
		this.props.post(obj);
		obj = {};
		this.setState({
			name: '',
			fuelType: '',
			fuelLevel: '',
			imageUrl: '',
		});
	}

	render() {
		return (
			<div className="form">
				<h1>Add a new robot</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">
						Robot Name:
						{!this.state.name ? (
							<span className="warning">
								{'This field is required'}
							</span>
						) : (
							<span />
						)}
					</label>
					<input
						name="name"
						type="text"
						onChange={this.handleChange}
						value={this.state.name}
					/>

					<label htmlFor="fuelType">Fuel Type:</label>
					<select
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

					<button type="submit" disabled={!this.state.name}>
						Submit
					</button>
				</form>
			</div>
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
