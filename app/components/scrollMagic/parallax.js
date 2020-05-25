import React, {Component, useRef, useEffect} from 'react'
import {TweenMax, Power3, TimelineMax, Power0} from 'react-gsap'

import {Controller, Scene} from 'react-scrollmagic'

// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

class Parallax extends Component {
  // constructor(props) {
  //   super(props)
  //   this.controller = new Controller({addIndicators: true})
  // }

  // componentDidMount() {
  //   new Scene({
  //     triggerElement: '.bcg-parallax',
  //     triggerHook: 1,
  //     duration: 1000
  //   })
  //     .setTween('#animate2', {backgroundColor: 'blue'})
  //     .addTo(this.controller)
  // }

  render() {
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
}

export default Parallax
