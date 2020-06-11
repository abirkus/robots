import React from 'react';
import { useDispatch} from 'react-redux';
import { Form, Input, Select, Button, Radio, DatePicker } from 'antd';
import { useParams } from 'react-router-dom';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };
  const tailLayout = {
	wrapperCol: {
	  offset: 8,
	  span: 16,
	},
  };
  const { Option } = Select;



function ProjectInputForm(props) {
	const dispatch = useDispatch()
	const {projectId} = useParams()
	const [form] = Form.useForm();

	const onFinish = values => {
		try {
			if (props.type === 'Add') {
				dispatch({type: 'ADD_PRJCT', value: values.project})
			} else {
				const updatedProj = {
					id: projectId,
					project: values.project
				}
				dispatch({type: 'UPDATE_PRJCT', value: updatedProj})
			}
			form.resetFields()
		} catch (e) {
			console.error(e.message)
		}
	}

	const onReset = () => {
		console.log("props", props)
		form.resetFields();
	  };

	return (
		<div className="form">
			<h1>{props.type} project</h1>
			<Form
					name="addProject"
					form={form}
					onFinish={onFinish}
					{...layout}
					>
				<Form.Item
					label="Project Title:"
					name = {['project', 'title' ]}
					rules={[{ required: true, message: 'Please input project title!' }]}
					>
					<Input />
				</Form.Item>

				<Form.Item
					label="Deadline:"
					name = {['project', 'deadline']}
					>
					<DatePicker className="deadlinePicker"/>
				</Form.Item>

				<Form.Item label="Priority" name={['project', 'priority']}>
					<Select>
						<Option value="1">1</Option>
						<Option value="2">2</Option>
						<Option value="3">3</Option>
						<Option value="4">4</Option>
						<Option value="5">5</Option>
						<Option value="6">6</Option>
						<Option value="7">7</Option>
						<Option value="8">8</Option>
						<Option value="9">9</Option>
						<Option value="10">10</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name={['project', 'completed']} 
					label="Completed:">
					<Radio.Group initialValues="false">
						<Radio value="true">Yes</Radio>
						<Radio value="false">No</Radio>
					</Radio.Group>
				</Form.Item>

				<Form.Item label="Description:" name={['project', 'description']}>
					<Input />
				</Form.Item>

				<Form.Item {...tailLayout}>  
					<Button type="primary"  htmlType="submit" size="small">
						{props.type} Project
					</Button>
					<Button htmlType="button" onClick={onReset} type="danger" size="small">
						Reset
					</Button>
				</Form.Item>
			</Form>
		</div>
	);

}

export default ProjectInputForm

