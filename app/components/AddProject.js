import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {addProjectThunk} from '../redux/projects.js';
import { DatePicker, Button } from 'antd';

function AddProject(props) {
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const [deadline, setDeadline] = useState('')
	const [priority, setPriority] = useState('')
	const [completed, setCompleted] = useState(false)
	const [description, setDescription] = useState('')

	const handleTitleChange = (evt) => {
		setTitle(evt.target.value)
	}

	const handleDeadlineChange = (evt) => {
		setDeadline(evt.target.value)
	}

	const handlePriorityChange = (evt) => {
		setPriority(evt.target.value)
	}

	const handleCompletedChange = (evt) => {
		setCompleted(evt.target.value)
	}

	const handleDescriptionChange = (evt) => {
		setDescription(evt.target.value)
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		try {
			dispatch(addProjectThunk({title, deadline, priority, completed, description}))
			setTitle('')
			setDeadline('')
			setPriority('')
			setCompleted(false)
			setDescription('')
		} catch (e) {
			console.error(e.message)
		}
		

	}

	return (
		<div className="form">
			<h1>Add a new project</h1>
			<form id="project-form" onSubmit={handleSubmit}>
				<label htmlFor="title">
					Project Title:
					{!title ? (
						<span className="warning">
							{'This field is required'}
						</span>
					) : (
						<span />
					)}
				</label>
				<input
					name="title"
					type="text"
					onChange={handleTitleChange}
					value={title}
				/>

				<label htmlFor="deadline">Deadline:</label>
				<DatePicker value={deadline} onChange={handleDeadlineChange} />
				{/* <input
					name="deadline"
					type="date"
					onChange={handleDeadlineChange}
					value={deadline}
				/> */}

				<label htmlFor="priority">Priority:</label>
				<select
					defaultValue="none"
					name="priority"
					type="number"
					onChange={handlePriorityChange}>
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
					onChange={handleCompletedChange}>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>

				<label htmlFor="description">Description:</label>
				<input
					name="description"
					type="text"
					onChange={handleDescriptionChange}
					value={description}
				/>

				<Button type="primary" disabled={!title}>
					Submit
				</Button>
			</form>
		</div>
	);

}

export default AddProject

// const mapDispatchToProps = dispatch => {
// 	return {
// 		post: obj => dispatch(addProjectThunk(obj)),
// 	};
// };
// export default connect(
// 	null,
// 	mapDispatchToProps
// )(AddProject);
