import React, {useRef, useEffect} from 'react'
import {TweenMax, TimelineMax, Power1, Bounce} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'

const Employee = () => {
	let employee = useRef(null)
	let text1 = useRef(null)
	let text2 = useRef(null)
	let text3 = useRef(null)
	let text4 = useRef(null)

	const controller = new ScrollMagic.Controller({addIndicators: true})
	const timeline = new TimelineMax()
	const secondaryTimeline = new TimelineMax()
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
		const waiter = TweenMax.to(employee, 1, {
			bezier: flightPath,
			ease: Power1.easeInOut,
		})

		const agendaText1 = TweenMax.to(text1, 3, {
			x: 850,
			fontSize: '2rem',
		})

		const agendaText2 = TweenMax.to(text2, 3, {
			x: 850,
			fontSize: '2rem',
		})

		const agendaText3 = TweenMax.to(text3, 3, {
			x: 850,
			fontSize: '2rem',
		})

		const agendaText4 = TweenMax.to(text4, 3, {
			x: 850,
			fontSize: '2rem',
		})
		secondaryTimeline
			.add(agendaText1)
			.add(agendaText2)
			.add(agendaText3)
			.add(agendaText4)

		timeline.add(waiter)

		new ScrollMagic.Scene({
			triggerElement: '.agenda-container',
			triggerHook: 0,
			duration: '100%',
		})
			.setTween(timeline)
			.setPin('.agenda-container')
			.addIndicators({
				name: 'agenda scene',
				colorTrigger: 'black',
				indent: 200,
			})
			.addTo(controller)

		new ScrollMagic.Scene({
			triggerElement: '.agenda-container',
			triggerHook: 0.5,
			duration: '100%',
		})
			.setTween(secondaryTimeline)
			.addIndicators({
				name: 'agenda text scene',
				colorTrigger: 'pink',
				fontSize: '2rem',
				indent: 500,
			})
			.addTo(controller)
	}, [])

	return (
		<div className='agenda-container'>
			<img
				ref={(el) => {
					employee = el
				}}
				src='/robotWaiter.png'
				id='bee'
				className='waiter'
			/>
			<div className='agenda'>
				<div>
					<div
						ref={(el) => {
							text1 = el
						}}>
						Your robot minions can do anything you desire:
					</div>
					<ul>
						<li
							ref={(el) => {
								text2 = el
							}}>
							From washing dishes
						</li>
						<li
							ref={(el) => {
								text3 = el
							}}>
							To folding laundry
						</li>
						<li
							ref={(el) => {
								text4 = el
							}}>
							To cooking dinner
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Employee
