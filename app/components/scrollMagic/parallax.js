import React, {useRef, useEffect} from 'react';
//import {TweenMax, Power0} from 'gsap'
import { gsap } from 'gsap'
import ScrollMagic from 'scrollmagic'
// import "animation.gsap";
// import "debug.addIndicators";
import { Row, Col } from 'antd'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

const Parallax = () => {

  //let logoItem = useRef(null)
	const controller = new ScrollMagic.Controller({addIndicators: true})
	
	useEffect(() => {
		const ourScene = new ScrollMagic.Scene({
			triggerElement: '.bcg-parallax',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(gsap.to('.bcg', {duration: 1, y: '-30%', ease: 'power0.out'}))
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
        <Row>
          <Col span={16} offset={1}>
            <div>
              This is a place where you can use technology to your advantage by creating robots and assigning projects for them to complete.
              Automation is inevitable, stay ahead of the curve by utilizing robotics for all your goals.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Parallax
