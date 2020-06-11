import React, {useRef, useEffect} from 'react';
import {TweenMax, Power0, Ease, Power3, RoughEase} from 'gsap'
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "animation.gsap";
import "debug.addIndicators";

const Welcome = () => {
  let background = useRef(null)
  
  useEffect(() => {
    TweenMax.to(background, 2, {
      delay: 2,
      opacity: 1,
      ease: RoughEase.easeOut
    })
  }, [])


  return (
    <div className="welcomeWrapper">
      <div ref={el => {background = el}} className="welcome">
          <h1 className="welcomeText">Welcome To StackBot Inc.</h1>
      </div>
    </div>
  )
}

export default Welcome
