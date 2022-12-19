import React from 'react'
import Animate from './Animation'

function Home() {
  return (
    <div id='home'>
      <div class="section-1">
        <div>
          <h1>Hi! I am Beniah</h1>
          <Animate name={props.name} />
          <h2> A full stack web Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
