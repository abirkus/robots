import React, {useRef, useEffect} from 'react';
import {TweenMax, Power0} from 'gsap'
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "animation.gsap";
import "debug.addIndicators";

const Welcome = () => {
// 	const controller = new ScrollMagic.Controller({addIndicators: true})
	
// 	useEffect(() => {
// 		const ourScene = new ScrollMagic.Scene({
// 			triggerElement: '.bcg-parallax',
// 			triggerHook: 1,
// 			duration: '50%'
// 		})
// 		.setTween(TweenMax.to('.bcg', 1, {y: '-30%', ease: Power0.easeNone}))
// 		.addIndicators({
// 			name: 'parallax scene',
// 			colorTrigger: 'black',
// 		})
// 		.addTo(controller)
//   }, [])
  
  return (
    <div className="welcome">
        <h1>Welcome To StackBot Inc.</h1>
    </div>
  )
}

export default Welcome
