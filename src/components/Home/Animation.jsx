import React from 'react'

function Animate(props) {
  return (
    <div>
         <AnimatedText
        type="words"
        interval={0.04}
        duration={0.87}
        animation={{
          x: "4px",
          y: "111px",
          ease: "ease-in-out",
          scale: 0.99
        }}
      >
       
      </AnimatedText>
    </div>
  )
}

export default Animate