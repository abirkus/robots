import React, {useRef, useEffect} from 'react';
//import {TweenMax, Power3} from 'gsap'
//import ScrollMagic from 'scrollmagic'
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import TweenMax from "gsap/src/uncompressed/TweenMax";
// import TimelineMax from "gsap/src/uncompressed/TimelineMax";


const Greeting = () => {
	let logoItem = useRef(null)

	const controller = new ScrollMagic.Controller({addIndicators: true})




	useEffect(() => {
		// TweenMax.to(
		// 	logoItem,
		// 	0.9,
		// 	{
		// 		opacity: 1,
		// 		y: -20,
		// 		ease: Power3.easeOut
		// 	}
		// )
		const ourScene = new ScrollMagic.Scene({
			triggerElement: '.greetingStart'
		})
		.setClassToggle('#logo', 'fade-in')
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			indent: 200
		})
		.addTo(controller)
	}, [])

	return (
		<div className="greetingStart">
			<h1>
			Welcome to StackBot Project Management: your robot employees are
			awaiting project assignments!
			</h1>
		<div>
			<img ref={el => {logoItem = el}} src="/panda.gif" id="logo" className="app-logo" alt="logo" />
		</div>
		</div>

	);
};

export default Greeting;
