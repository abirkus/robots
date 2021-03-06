import React, {useRef, useEffect} from 'react'
import {TweenMax, Power0, Power4} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
import {Row, Col} from 'antd'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

const Parallax = () => {
	//let logoItem = useRef(null)
	const controller = new ScrollMagic.Controller()

	useEffect(() => {
		const ourScene = new ScrollMagic.Scene({
			triggerElement: '.bcg-parallax',
			triggerHook: 1,
			duration: '100%',
		})
			.setTween(
				TweenMax.to('.bcg', 1, {y: '-30%', ease: Power0.easeNone})
			)
			.addTo(controller)

		const textScene = new ScrollMagic.Scene({
			triggerElement: '.bcg-parallax',
			triggerHook: 1,
			duration: '100%',
		})
			.setTween(
				TweenMax.to('.parallax-text', 1, {
					opacity: 1,
					ease: Power4.easeIn,
				})
			)
			.addTo(controller)
	}, [])

	return (
		<div className='bcg-parallax'>
			<div id='animate2' className='bcg' />

			<div className='content-wrapper'>
				<Row>
					<Col span={16} offset={1}>
						<div className='parallax-text'>
							This is a place where you can use technology to your
							advantage by creating robots and assigning projects
							for them to complete. Automation is inevitable, stay
							ahead of the curve by utilizing robotics for all
							your goals.
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Parallax
