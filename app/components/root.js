import React from 'react'
import Navbar from './navbar'
import Routes from './routes'
import MyFooter from './myFooter'
import {Layout} from 'antd'

const {Header, Footer, Sider, Content} = Layout

function Root() {
	return (
		<Layout
			style={{
				overflow: 'auto',
				minHeight: '100vh',
			}}>
			<Header className='myHeader' style={{background: 'rgb(6, 33, 55)'}}>
				<Navbar />
			</Header>
			<Content className='myContent'>
				<Routes />
			</Content>
			<Footer className='myFooter'>
				<MyFooter />
			</Footer>
		</Layout>
	)
}

export default Root
