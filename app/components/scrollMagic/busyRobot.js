import React, {useRef, useEffect} from 'react';
import {TweenMax, Power3} from 'gsap'
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "animation.gsap";
import "debug.addIndicators";
//import TweenMax from "gsap/src/uncompressed/TweenMax";

const BusyRobot = () => {
	let logoItem = useRef(null)
	const controller = new ScrollMagic.Controller({addIndicators: true})
	
	useEffect(() => {
		const ourScene = new ScrollMagic.Scene({
			triggerElement: '.panda-start',
			triggerHook: 0,
			duration: '50%'
		})
		.setTween(TweenMax.to(logoItem, 0.9, {opacity: 1, y: -20, ease: Power3.easeOut}))
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
		})
		.addTo(controller)
	}, [])

	return (
		<div className="greetingStart">
		<div className="panda-start">
			<img ref={el => {logoItem = el}} src="/panda.gif" id="logo" className="app-logo" alt="logo" />
		</div>
		</div>

	);
};

export default BusyRobot;