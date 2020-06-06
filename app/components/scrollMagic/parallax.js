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
        <h1>Parallax Effect</h1>
        <p>
          Parallax (from Ancient Greek παράλλαξις (parallaxis), meaning
          'alternation') is a displacement or difference in the apparent
          position of an object viewed along two different lines of sight, and
          is measured by the angle or semi-angle of inclination between those
          two lines.[1][2] Due to foreshortening, nearby objects show a larger
          parallax than farther objects when observed from different
          positions, so parallax can be used to determine distances.
        </p>
      </div>
    </div>
  )
}

export default Parallax
