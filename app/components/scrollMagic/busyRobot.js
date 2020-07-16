import React, {useRef, useEffect, useState} from 'react'
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

// var leftEye = createEye('#left-eye')
// var rightEye = createEye('#right-eye')

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

	var demo = {score: 0},
		scoreDisplay = useRef(null)
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	})
	function showScore() {
		scoreDisplay.current.innerHTML = demo.score.toFixed(2)
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

		busyRobot.current.addEventListener('mouseenter', function (e) {
			TweenMax.to(cursor.current, 0.3, {scale: 1, opacity: 1})
			TweenMax.to(follower.current, 0.3, {scale: 1, opacity: 1})
		})

		busyRobot.current.addEventListener('mouseleave', function (e) {
			TweenMax.to(cursor.current, 0.3, {scale: 0, opacity: 0})
			TweenMax.to(follower.current, 0.3, {scale: 0, opacity: 0})
		})

		busyRobot.current.addEventListener('mousemove', setFromEvent)

		var tween = TweenLite.to(demo, 20, {score: 100, onUpdate: showScore})
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

	const onFrame = () => {
		var point = mouse.matrixTransform(
			eyesCanvas.current.getScreenCTM().inverse()
		)
		console.log('point', point)
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

			console.log('are we rotating?', angle)
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
			<div id='demo'>
				<div ref={scoreDisplay} id='scoreDisplay'></div>
			</div>
			<div className='cursor' ref={cursor}>
				<img src='/drone.png' className='droneLogo' />
			</div>
			<div className='follower' ref={follower}>
				<img src='/target.png' className='targetLogo' />
			</div>
			<svg ref={eyesCanvas} id='svg' width='300' height='400'>
				<g id='left-eye' ref={leftEye}>
					<circle className='eye-outer' cx='69' cy='308' r='44' />
					<circle className='eye-iris' cx='69' cy='308' r='30' />
					<circle className='eye-inner' cx='69' cy='308' r='20' />
				</g>
				<g id='right-eye' ref={rightEye}>
					<circle className='eye-outer' cx='231' cy='308' r='44' />
					<circle className='eye-iris' cx='231' cy='308' r='30' />
					<circle className='eye-inner' cx='231' cy='308' r='20' />
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
