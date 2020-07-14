import React, {useRef, useEffect, useState} from 'react'
import {TweenMax, TweenLite, Power3} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
//import TweenMax from "gsap/src/uncompressed/TweenMax";
//import {useMousePosition} from './useMousePosition'
var posX = 0,
	posY = 0

const BusyRobot = () => {
	// let logoItem = useRef(null)
	let follower = useRef(null)
	let cursor = useRef(null)
	const controller = new ScrollMagic.Controller({addIndicators: true})

	const [position, setPosition] = useState({x: 0, y: 0})

	var mouseX = 0,
		mouseY = 0

	useEffect(() => {
		const setFromEvent = (e) => {
			setPosition({x: e.clientX, y: e.clientY})
			mouseX = e.clientX - 30
			mouseY = e.clientY - 15
			// posX += (mouseX - posX) / 9
			// posY += (mouseY - posY) / 9
		}

		window.addEventListener('mousemove', setFromEvent)

		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function () {
				posX += (mouseX - posX) / 9
				posY += (mouseY - posY) / 9

				TweenMax.set(follower.current, {
					css: {
						left: posX - 35,
						top: posY - 50,
					},
				})

				TweenMax.set(cursor.current, {
					css: {
						left: mouseX,
						top: mouseY,
					},
				})
			},
		})
		return () => {
			window.removeEventListener('mousemove', setFromEvent)
		}
	}, [])

	// useEffect(() => {
	// const ourScene = new ScrollMagic.Scene({
	// 	triggerElement: '.panda-start',
	// 	triggerHook: 0,
	// 	duration: '100%',
	// })
	// 	.setTween(
	// 		TweenMax.to(logoItem, 0.9, {
	// 			opacity: 1,
	// 			y: '50%',
	// 			ease: Power3.easeOut,
	// 		})
	// 	)
	// 	.addIndicators({
	// 		name: 'fade scene',
	// 		colorTrigger: 'black',
	// 	})
	// 	.addTo(controller)
	//	}, [])

	// $(document).on('mousemove', function (e) {
	// 	mouseX = e.clientX
	// 	mouseY = e.clientY
	// })
	// // yellow circle
	// $('.link').on('mouseenter', function () {
	// 	cursor.addClass('active')
	// 	follower.addClass('active')
	// })
	// $('.link').on('mouseleave', function () {
	// 	cursor.removeClass('active')
	// 	follower.removeClass('active')
	// })

	return (
		<div className='busyRobot'>
			<div className='cursor' ref={cursor}>
				<img src='/drone.png' className='droneLogo' />
			</div>
			<div className='follower' ref={follower}>
				<img src='/target.png' className='targetLogo' />
			</div>
			<h1>Exmplore more features by following navbar links up</h1>
			<h1>
				{position.x}:{position.y}
			</h1>
		</div>
	)
}

export default BusyRobot
