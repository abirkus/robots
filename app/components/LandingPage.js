import React from 'react';
import Parallax from './scrollMagic/parallax.js'
import Employee from './scrollMagic/employee.js'
import BusyRobot from './scrollMagic/busyRobot'
import { Row, Col } from 'antd';


const LandingPage = () => {
	return (
	<div> 
		<Row>
			<Col span={24}><Parallax /></Col>
		</Row>
		<Row>
			<Col span={24}><Employee /></Col>
		</Row>
		<Row>
			<Col span={24}><BusyRobot /></Col>
		</Row>
	</div>
	);
};

export default LandingPage;
