import React, {useRef, useEffect} from 'react'
import {TweenMax, TimelineMax, TweenLite, SteppedEase} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'

const TvTube = () => {
	function blinkingCursor() {
		TweenMax.fromTo(
			'#blinkingCursor',
			0.5,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
				repeat: -1,
				ease: SteppedEase.config(1),
			}
		)
	}

	useEffect(() => {
		blinkingCursor()
	})

	return (
		<div id='textHolder'>
			<div id='tvTxt'>
				Explore more features by following the links above
				<span id='blinkingCursor'>|</span>
			</div>
		</div>
	)
}

export default TvTube
