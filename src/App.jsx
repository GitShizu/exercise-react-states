import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'



function App() {
  
  const [islightModeOn, setislightModeOn] = useState(true);
  const handleColorMode = ()=>{
    return islightModeOn?setislightModeOn(false):setislightModeOn(true)
    
  }

  return (
    <div id='app-container' className={islightModeOn?'light':'dark'}>
      <Navbar
        islightModeOn = {islightModeOn}
        handleColorMode = {handleColorMode}
        navLinksData={[
          { url: '/Home', text: 'Home' },
          { url: '/Player', text: 'Player' },
          { url: '/PSW_generator', text: 'PSW generator' }
        ]}
        logoUrl={'https://cdn1.iconfinder.com/data/icons/education-set-3-3/74/15-512.png'}
        logoAlt={'React Logo'} />
      <Main />
    </div>
  )
}

export default App
