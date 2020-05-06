import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Form, Input, Select, Button, InputNumber } from 'antd';

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


function AddRobot() {
	const dispatch = useDispatch()
	const [form] = Form.useForm();

	const onFinish = values => {
		try {
			dispatch({type: 'ADD_BOT', value: values.robot })
			form.resetFields();
		} catch (e) {
			console.error(e.message)
		}
	  };

	  const onReset = () => {
		form.resetFields();
	  };

	return (
		<div className="form">
			<h1>Add a new robot</h1>
			<Form
				form={form}
				onFinish={onFinish}
			      {...layout}
				  name="addrobot"
			>
				<Form.Item
					label="Name"
					name = {['robot', 'name']}
					rules={[{ required: true, message: 'Please input Robot name!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item label="Fuel Type:" name={['robot', 'fuelType']}>
					<Select>
						<Option value="gas">gas</Option>
						<Option value="diesel">diesel</Option>
						<Option value="electric">electric</Option>
					</Select>
				</Form.Item>
				<Form.Item
						label="Fuel Level:"
						name={['robot', 'fuelLevel']}
				        rules={[
							{
							  type: 'number',
							  min: 0,
							  max: 100,
							},
						  ]}>
					<InputNumber />
				</Form.Item>

				<Form.Item label="Image Url:" name={['robot', 'imageUrl']}>
					<Input />
				</Form.Item>
				<Form.Item {...tailLayout}>  
					<Button type="primary"  htmlType="submit">
						Submit
					</Button>
					<Button htmlType="button" onClick={onReset} type="danger">
						Reset
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
	}

export default AddRobot
