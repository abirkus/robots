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
	let follower = useRef(null)
	let cursor = useRef(null)
	let eyesCanvas = useRef(null)
	const [position, setPosition] = useState({x: 0, y: 0})

	var mouseX = 0,
		mouseY = 0

	useEffect(() => {
		const setFromEvent = (e) => {
			setPosition({x: e.clientX, y: e.clientY})
			mouseX = e.clientX - 30
			mouseY = e.clientY - 15
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

	return (
		<div className='busyRobot'>
			<div className='cursor' ref={cursor}>
				<img src='/drone.png' className='droneLogo' />
			</div>
			<div className='follower' ref={follower}>
				<img src='/target.png' className='targetLogo' />
			</div>
			<svg id='svg' width='300' height='400'>
				<g id='left-eye'>
					<circle className='eye-outer' cx='68' cy='308' r='45' />
					<circle className='eye-iris' cx='68' cy='308' r='30' />
					<circle className='eye-inner' cx='68' cy='308' r='20' />
				</g>
				<g id='right-eye'>
					<circle className='eye-outer' cx='230' cy='308' r='45' />
					<circle className='eye-iris' cx='230' cy='308' r='30' />
					<circle className='eye-inner' cx='230' cy='308' r='20' />
				</g>
				<text x='0' y='15' fill='red'>
					Exmplore more features by following navbar links up
					{position.x}:{position.y}
				</text>
			</svg>
		</div>
	)
}

export default BusyRobot

// function eyes(x, y, size, event) {
// 	var canvas = document.createElement('canvas'),
// 		context = canvas.getContext('2d')
// 	document.body.appendChild(canvas)
// 	canvas.style.position = 'absolute'
// 	canvas.style.left = x - size - 5 + 'px'
// 	canvas.style.top = y - size / 2 - 5 + 'px'

// 	var rect = canvas.getBoundingClientRect()
// 	canvas.width = size * 2 + 10
// 	canvas.height = size + 10

// 	onMouseMove(event)

// 	document.addEventListener('mousemove', onMouseMove)

// 	function onMouseMove(event) {
// 		var x = event.clientX - rect.left,
// 			y = event.clientY - rect.top
// 		context.clearRect(0, 0, size * 2 + 10, size + 10)
// 		drawEye(x, y, size / 2 + 5, size / 2 + 5)
// 		drawEye(x, y, size * 1.5 + 5, size / 2 + 5)
// 	}

// 	function drawEye(x, y, cx, cy) {
// 		var dx = x - cx,
// 			dy = y - cy,
// 			angle = Math.atan2(dy, dx)
// 		context.save()
// 		context.translate(cx, cy)
// 		context.rotate(angle)
// 		context.beginPath()
// 		context.arc(0, 0, size / 2, 0, Math.PI * 2)
// 		context.stroke()
// 		context.beginPath()
// 		context.arc(size * 0.4, 0, size * 0.1, 0, Math.PI * 2)
// 		context.fill()
// 		context.restore()
// 	}
// }
