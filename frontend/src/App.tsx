import React from 'react';
import Home from './sections/Home';
import Navigation from './Navigation';
import AboutMe from './sections/AboutMe';

function App() {
  return (
    <div style = {{padding: '0px 200px'}}>
      <Navigation/>
      <div>
      <div style = {{display: 'flex', flexDirection: 'column', padding: '0px'}}>
        <Home/>
        <AboutMe/>
      </div>
      </div>
    </div>
  )
}

export default App;
