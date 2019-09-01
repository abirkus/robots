import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProjectThunk} from '../redux/projects.js';

class UpdateProject extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			title: '',
			deadline: '',
			priority: '',
			completed: '',
			description: '',
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
		if (this.state.title) {
			obj.title = this.state.title;
		}
		if (this.state.deadline) {
			obj.deadline = this.state.deadline;
		}
		if (this.state.priority) {
			obj.priority = this.state.priority;
		}
		if (this.state.completed) {
			obj.completed = this.state.completed;
		}
		if (this.state.description) {
			obj.description = this.state.description;
		}
		this.props.update(this.props.params.projectId, obj);
		this.setState({
			title: '',
			deadline: '',
			priority: '',
			completed: '',
			description: '',
		});
		obj = {};
		this.props.fetchSingleProject(this.props.params.projectId);
	}

	render() {
		return (
			<div>
				<h1>Update project</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">Project Title:</label>
					<input
						name="title"
						type="text"
						onChange={this.handleChange}
						value={this.state.title}
					/>

					<label htmlFor="deadline">Deadline:</label>
					<input
						name="deadline"
						type="date"
						onChange={this.handleChange}
						value={this.state.deadline}
					/>

					<label htmlFor="priority">Priority:</label>
					<select
						defaultValue="none"
						name="priority"
						type="number"
						onChange={this.handleChange}>
						<option value="none" />
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>

					<label htmlFor="completed">Completed:</label>
					<select
						defaultValue="false"
						name="completed"
						type="text"
						onChange={this.handleChange}>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>

					<label htmlFor="description">Description:</label>
					<input
						name="description"
						type="text"
						onChange={this.handleChange}
						value={this.state.description}
					/>

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		update: (id, obj) => dispatch(updateProjectThunk(id, obj)),
	};
};
export default connect(
	null,
	mapDispatchToProps
)(UpdateProject);
