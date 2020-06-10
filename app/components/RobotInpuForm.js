import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
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


function RobotInputForm(props) {
	const dispatch = useDispatch()
	const [form] = Form.useForm();
	const {robotId} = useParams()

	const onFinish = values => {
		try {
			if (props.type === 'Add') {
				dispatch({type: 'ADD_BOT', value: values.robot })
			} else {
				const updatedBot = {
					id: robotId,
					robot: values.robot
				}
				dispatch({type: 'UPDATE_BOT', value: updatedBot })
			}

			form.resetFields();
		} catch (e) {
			console.error(e.message)
		}
	  };

	  const onReset = () => {
		console.log("props", props)
		form.resetFields();
	  };

	return (
		<div className="form">
			<h1>{props.type} robot</h1>
			<Form
				form={form}
				onFinish={onFinish}
			      {...layout}
				  name={`${props.type}robot`}
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
					<InputNumber size="default" style={{ width: '100%' }} />
				</Form.Item>

				<Form.Item label="Image Url:" name={['robot', 'imageUrl']}>
					<Input />
				</Form.Item>
				<Form.Item {...tailLayout}>  
					<Button type="primary"  htmlType="submit" size="small">
						{props.type} Robot
					</Button>
					<Button htmlType="button" onClick={onReset} type="danger" size="small">
						Reset
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
	}

export default RobotInputForm
