import React from 'react';
import '../theme/fontColors.css'
import '../theme/fonts.css'

function Home() {
  return (
    <div style = {{display: 'flex', gap: '50px', flexWrap: 'wrap', paddingTop: '80px'}}>
      <div>
        <h1 className='font_blue font_fancy' style = {{padding: 0, margin: 0}}>Hey, I'm Blake</h1>
        <h2 className='font_black' style = {{padding: 0, margin: 0}}>Software Developer</h2>
      </div>
      <div>
        <img src = './assets/blake.jpg' style = {{width: '350px', borderRadius: '50%', position: 'relative', bottom: '40px'}}></img>
      </div>
    </div>
  )
}

export default Home;
