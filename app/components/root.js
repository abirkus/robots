import React from 'react';
import Navbar from './navbar'
import Routes from './routes'
import MyFooter from './myFooter'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Root() {

	return (
	<Layout>
		<Header><Navbar /></Header>
		<Content><Routes /></Content>
		<Footer className="myFooter"><MyFooter /></Footer>
	</Layout>
	);
}

export default Root;
