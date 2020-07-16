import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import history from '../../history'
import {TweenMax, TweenLite, Power3} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
//import TweenMax from "gsap/src/uncompressed/TweenMax";
//import {useMousePosition} from './useMousePosition'
var posX = 0,
	posY = 0
var mouseX = 0,
	mouseY = 0

var requestId = null

const BusyRobot = () => {
	let busyRobot = useRef(null)
	let follower = useRef(null)
	let cursor = useRef(null)
	let eyesCanvas = useRef(null)
	let leftEye = useRef(null)
	let rightEye = useRef(null)

	let leftEyeObj
	let rightEyeObj
	let mouse

	const handleClickProjects = () => {
		history.push('/projects')
		window.location.reload()
	}
	const handleClickRobots = () => {
		history.push('/robots')
		window.location.reload()
	}

	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	})

	const scrollTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}

	const handleMouseEnter = (e) => {
		TweenMax.to(cursor.current, 0.3, {scale: 1, opacity: 1})
		TweenMax.to(follower.current, 0.3, {scale: 1, opacity: 1})
	}

	const handleMouseLeave = (e) => {
		TweenMax.to(cursor.current, 0.3, {scale: 0, opacity: 0})
		TweenMax.to(follower.current, 0.3, {scale: 0, opacity: 0})
	}

	useEffect(() => {
		const setFromEvent = (e) => {
			setPosition({x: e.clientX, y: e.clientY})
			mouseX = e.clientX - 30
			mouseY = e.clientY - 15
			mouse = eyesCanvas.current.createSVGPoint()
			mouse.x = e.clientX
			mouse.y = e.clientY
			if (!requestId) {
				requestId = requestAnimationFrame(onFrame)
			}
		}

		leftEyeObj = createEye(leftEye.current)
		rightEyeObj = createEye(rightEye.current)

		busyRobot.current.addEventListener('mouseenter', handleMouseEnter)

		busyRobot.current.addEventListener('mouseleave', handleMouseLeave)

		busyRobot.current.addEventListener('mousemove', setFromEvent)

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
			busyRobot.current.removeEventListener('mouseleave', () => {})
			busyRobot.current.removeEventListener('mouseenter', () => {})
			busyRobot.current.removeEventListener('mousemove', () => {})
		}
	}, [])

	const onFrame = () => {
		var point = mouse.matrixTransform(
			eyesCanvas.current.getScreenCTM().inverse()
		)
		leftEyeObj.rotateTo(point)
		rightEyeObj.rotateTo(point)

		requestId = null
	}

	const createEye = (element) => {
		TweenLite.set(element, {
			transformOrigin: 'center',
		})

		var bbox = element.getBBox()
		var centerX = bbox.x + bbox.width / 2
		var centerY = bbox.y + bbox.height / 2

		function rotateTo(point) {
			var dx = point.x - centerX
			var dy = point.y - centerY

			var angle = Math.atan2(dy, dx)

			TweenLite.to(element, 0.3, {
				rotation: angle + '_rad_short',
			})
		}

		return {
			element: element,
			rotateTo: rotateTo,
		}
	}

	return (
		<div className='busyRobot' ref={busyRobot}>
			<div className='link1'>
				<button onClick={handleClickRobots}>Manage Robots</button>
			</div>
			<svg ref={eyesCanvas} id='svg' width='300' height='400'>
				<g id='left-eye' ref={leftEye}>
					<circle className='eye-outer' cx='69' cy='308' r='44' />
					<circle className='eye-iris' cx='83' cy='308' r='30' />
					<circle className='eye-inner' cx='93' cy='308' r='20' />
				</g>
				<g id='right-eye' ref={rightEye}>
					<circle className='eye-outer' cx='231' cy='308' r='44' />
					<circle className='eye-iris' cx='245' cy='308' r='30' />
					<circle className='eye-inner' cx='255' cy='308' r='20' />
				</g>
			</svg>
			<div className='link2'>
				<button onClick={handleClickProjects}>Manage Projects</button>
			</div>
			<div className='infoText'>
				<div className='cursor' ref={cursor}>
					<img src='/drone.png' className='droneLogo' />
				</div>
				<div className='follower' ref={follower}>
					<img src='/target.png' className='targetLogo' />
				</div>
				<div className='tvTube'>
					Exmplore more features by following navbar links up
					{position.x}:{position.y}
				</div>
			</div>
		</div>
	)
}

export default BusyRobot
