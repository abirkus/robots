import React, {useRef, useEffect} from 'react';
//import {TweenMax, Power3} from 'gsap'
import { gsap } from 'gsap';
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
// import "animation.gsap";
// import "debug.addIndicators";
//import TweenMax from "gsap/src/uncompressed/TweenMax";

const BusyRobot = () => {
	let logoItem = useRef(null)
	const controller = new ScrollMagic.Controller({addIndicators: true})
	
	useEffect(() => {
		const ourScene = new ScrollMagic.Scene({
			triggerElement: '.panda-start',
			triggerHook: 0,
			duration: '100%'
		})
		.setTween(gsap.to(logoItem, 0.9, {opacity: 1, y: -20, ease: 'power3.out'}))
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
		})
		.addTo(controller)
	}, [])

	return (
		<div className="busyRobot">
		<div className="panda-start">
			<img ref={el => {logoItem = el}} src="/panda.gif" id="logo" className="app-logo" alt="logo" />
		</div>
		</div>

	);
};

export default BusyRobot;
