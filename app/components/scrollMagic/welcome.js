import React, {useRef, useEffect} from 'react';
import {TweenMax, Power0, Ease, Power3, RoughEase} from 'gsap'
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "animation.gsap";
import "debug.addIndicators";

const Welcome = () => {
  let background = useRef(null)
  let imageL = useRef(null)
  useEffect(() => {
    TweenMax.to(background, 1, 
      {
      delay: 2,
      css: { scale: 0, borderRadius: '50% 50% 50% 50%'},
      ease: Power0.easeInOut
    })
    TweenMax.to(imageL, 2,
      {
      delay: 3,
      opacity: 1,
      ease: Power3.easeOut
    })

  }, [])


  return (
    <div  ref={el => {imageL = el}}  className="welcome">
      <div  ref={el => {background = el}} className="welcomeWrapper">
          <h1 className="welcomeText">Welcome To StackBot Inc.</h1>
      </div>
    </div>
  )
}

export default Welcome
