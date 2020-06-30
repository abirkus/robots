import React, {useRef, useEffect} from 'react';
import { gsap } from 'gsap';
//import {TweenMax, TimelineMax, Power1} from 'gsap';
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
// import "animation.gsap";
// import "debug.addIndicators";


const Employee = () => {

    let employee = useRef(null)
    const controller = new ScrollMagic.Controller({addIndicators: true})
    const timeline = new gsap.timeline()
    const flightPath = {
        curviness: 1.25,
        autoRotate: true,
        values: [
          {x: 0, y: -20},
          {x: 300, y: 10},
          {x: 500, y: 100},
          {x: 750, y: -100},
          {x: 350, y: -50},
          {x: 600, y: 100},
          {x: 800, y: 0},
          {x: window.innerWidth + 265, y: -150}
        ]
      }


    useEffect(() => {
          const bee = gsap.to(employee, 1, {
            bezier: flightPath,
            // ease: Power1.easeInOut
          })
      
          timeline.add(bee)
      
          new ScrollMagic.Scene({
            triggerElement: '.bee-container',
            triggerHook: 0,
            duration: '100%'
          })
            .setTween(timeline)
            .setPin('.bee-container')
            .addIndicators({
                name: 'bee scene',
                colorTrigger: 'black',
                indent: 200,
            })
            .addTo(controller)
    }, [])

    return (
      <div className="bee-container">
          <img ref={el => {employee = el}} src="/employee.png" id="bee" className="bee" />
      </div>
    )
}

export default Employee
