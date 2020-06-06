import React, {useRef, useEffect} from 'react';
import {TweenMax, Power0} from 'gsap'
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "animation.gsap";
import "debug.addIndicators";
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

const Parallax = () => {

  //let logoItem = useRef(null)
	const controller = new ScrollMagic.Controller({addIndicators: true})
	
	useEffect(() => {
		const ourScene = new ScrollMagic.Scene({
			triggerElement: '.bcg-parallax',
			triggerHook: 1,
			duration: '50%'
		})
		.setTween(TweenMax.to('.bcg', 1, {y: '-30%', ease: Power0.easeNone}))
		.addIndicators({
			name: 'parallax scene',
			colorTrigger: 'black',
		})
		.addTo(controller)
  }, [])
  
  return (
    <div className="bcg-parallax">
      <div id="animate2" className="bcg" />

      <div className="content-wrapper">
        <h1>Welcome To StackBot Inc.</h1>
        <p>
          This is a place where you can use technology to your advantage by creating robots and assigning projects for them to complete.
          Automation is inevitable, stay ahead of the curve by utilizing robotics for all your goals.
        </p>
      </div>
    </div>
  )
}

export default Parallax
