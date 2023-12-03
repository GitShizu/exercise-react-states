import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { IoHome } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Slider from './components/Slider';
import PSWgen from './components/PSWgen';




function App() {

  const [islightModeOn, setislightModeOn] = useState(true);
  const handleColorMode = () => {
    return islightModeOn ? setislightModeOn(false) : setislightModeOn(true)

  }
  return (
    <section id='app-container' className={islightModeOn ? 'light' : 'dark'}>
      <Navbar
        islightModeOn={islightModeOn}
        handleColorMode={handleColorMode}
        navLinksData={[
          { url: '#home', text: 'Home', icon: <IoHome /> },
          { url: '#slider-container', text: 'Player', icon: <IoMusicalNotes /> },
          { url: '#psw-gen', text: 'PSW generator', icon: <RiLockPasswordFill /> }
        ]}
        logoUrl={'https://cdn1.iconfinder.com/data/icons/education-set-3-3/74/15-512.png'}
        logoAlt={'React Logo'} />
      <Main 
      logoUrl={'./src/assets/react logo.png'}
      logoAlt={'React Logo'} />
      <Slider />
      <PSWgen/>
    </section>
  )
}

export default App
