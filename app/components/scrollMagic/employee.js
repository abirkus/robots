import React, {useRef, useEffect} from 'react'
import {TweenMax, TimelineMax, Power1} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'

const Employee = () => {
	let employee = useRef(null)
	const controller = new ScrollMagic.Controller({addIndicators: true})
	const timeline = new TimelineMax()
	const flightPath = {
		curviness: 1.25,
		autoRotate: true,
		values: [
			{x: 400, y: 0},
			{x: 700, y: 100},
			{x: 900, y: 600},
			{x: 1150, y: 100},
			{x: 1050, y: 50},
			{x: 400, y: 400},
			{x: 500, y: 500},
			{x: 550, y: 500},
		],
	}

	useEffect(() => {
		const bee = TweenMax.to(employee, 1, {
			bezier: flightPath,
			ease: Power1.easeInOut,
		})

		timeline.add(bee)

		new ScrollMagic.Scene({
			triggerElement: '.bee-container',
			triggerHook: 0,
			duration: '100%',
		})
			.setTween(timeline)
			.setPin('.bee-container')
			.addIndicators({
				name: 'bee scene',
				colorTrigger: 'black',
				indent: 200,
			})
			.addTo(controller)
	}, [])

	return (
		<div className='bee-container'>
			<img
				ref={(el) => {
					employee = el
				}}
				src='/robotWaiter.png'
				id='bee'
				className='bee'
			/>
			<h1>
				Your robot minions can do anything you desire: from washing
				dishes, to folding laundry, to cooking dinner
			</h1>
		</div>
	)
}

export default Employee
