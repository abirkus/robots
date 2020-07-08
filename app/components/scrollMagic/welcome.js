import React, {useRef, useEffect} from 'react'
import {TweenMax, Power0, Ease, Power3, Expo, Elastic, RoughEase} from 'gsap'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'

const Welcome = () => {
	let background = useRef(null)
	let text = useRef(null)
	useEffect(() => {
		TweenMax.to(background, 2, {
			delay: 1,
			css: {
				scale: 0,
				transformOrigin: '49% 54%',
				borderRadius: '50% 50% 50% 50%',
			},
			ease: Expo.easeOut,
		})
		TweenMax.to(background, 1, {
			delay: 2,
			css: {
				scale: 1,
				background: 'rgba(255, 0, 0, 0)',
				opacity: '1',
			},
			ease: Power0.easeIn,
		})
	}, [])

	return (
		<div className='welcome'>
			<div
				ref={(el) => {
					background = el
				}}
				className='welcomeWrapper'>
				<h1
					className='welcomeText'
					ref={(el) => {
						text = el
					}}>
					Welcome To StackBot Inc.
				</h1>
			</div>
		</div>
	)
}

export default Welcome
