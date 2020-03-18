import React from 'react'
import { useSpring, animated } from 'react-spring'

function Hero () {
  const { opacity, y } = useSpring({
    from: { opacity: 0, y: 20 },
    opacity: 1, y: 0
  })
  const { x, color } = useSpring({
    from: { x: 200 },
    x: 0, color: 'black'
  })

  const { angle } = useSpring({
    from: { angle: 0 },
    angle: 50
    
  })

  function updateGradient (event) {
    const x = event.pageX - event.target.offsetLeft - event.target.offsetParent.offsetLeft
    const y = event.pageY - event.target.offsetTop - event.target.offsetParent.offsetTop
    event.target.style.setProperty('--x', x + 'px')
    event.target.style.setProperty('--y', y + 'px')
  }
  
  return (
    <animated.div style={{opacity}} className="container hero">
      <div className="bar"></div>

      <animated.h1 style={{ transform: y.interpolate(y => `translateY(${y}px)`) }}>
        Keziah <br/> Moselle
      </animated.h1>

      <h2>Personal blog</h2>

      <p>A place to share my thoughts.</p>

      <animated.div
        style={{
          backgroundColor: color,
          right: 0,
          transform: x.interpolate(x => `translateX(${x}px)`)
        }}
        className="circle animated"
        onMouseMove={updateGradient}
      >
      </animated.div>
      <animated.div style={{
        right: 0,
        transform: angle.interpolate(angle => `skewX(-${angle}deg)`)
      }} className="circle overlap"></animated.div>
    </animated.div>
  )
}

export default Hero