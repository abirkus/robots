import React from 'react'
import {
	GithubOutlined,
	LinkedinOutlined,
	GoogleOutlined,
} from '@ant-design/icons'

function MyFooter() {
	return (
		<div className='myFooterInner'>
			<div>Developed by Andre Birkus</div>
			<div>
				<a href='https://github.com/abirkus/robots' target='_blank'>
					<GithubOutlined />
				</a>
			</div>
			<div>
				<a href='https://www.linkedin.com/in/abirkus/' target='_blank'>
					<LinkedinOutlined />
				</a>
			</div>
			<div>
				<a href='mailto:birkusandre@gmail.com'>
					<GoogleOutlined />
				</a>
			</div>
		</div>
	)
}

export default MyFooter
