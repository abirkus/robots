import React, { useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addRobotThunk} from '../redux/robots.js';


function AddRobot(props) {
	const [name, setName] = useState('')
	const [fuelType, setFuelType] = useState('')
	const [fuelLevel, setFuelLevel] = useState('')
	const [imageUrl, setImage] = useState('')


	const handleNameChange = (evt) => {
		setName(evt.target.value)
	}

	const handleFuelTypeChange = (evt) => {
		setFuelType(evt.target.value)
	}

	const handleFuelLevelChange = (evt) => {
		setFuelLevel(evt.target.value)
	}

	const handleImageChange = (evt) => {
		setImage(evt.target.value)
	}


	const handleSubmit = (evt) => {
		evt.preventDefault();
		props.post({name, fuelType, fuelLevel, imageUrl});
		setName('')
		setFuelLevel('')
		setFuelType('')
		setImage('')
	}

	return (
		<div className="form">
			<h1>Add a new robot</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					Robot Name:
					{!name ? (
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
					onChange={handleNameChange}
					value={name}
				/>

				<label htmlFor="fuelType">Fuel Type:</label>
				<select
					name="fuelType"
					type="text"
					onChange={handleFuelTypeChange}>
					<option value="gas">gas</option>
					<option value="diesel">diesel</option>
					<option value="electric">electric</option>
				</select>

				<label htmlFor="fuelLevel">Fuel Level:</label>
				<input
					name="fuelLevel"
					type="number"
					onChange={handleFuelLevelChange}
					value={fuelLevel}
				/>

				<label htmlFor="imageUrl">Image URL:</label>
				<input
					name="imageUrl"
					type="text"
					onChange={handleImageChange}
					value={imageUrl}
				/>

				<button type="submit" disabled={!name}>
					Submit
				</button>
			</form>
		</div>
	);
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
