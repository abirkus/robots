import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';


function Navbar() {

	return (
            <Row justify="center" className="topnav">
                <Col span={8}><Link to="/">Home</Link></Col>
                <Col span={8}><Link to="/robots">All Robots</Link></Col>
                <Col span={8}><Link to="/projects">All Projects</Link></Col>
            </Row>
	);
}

export default Navbar;
