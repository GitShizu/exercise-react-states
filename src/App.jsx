import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";




function App() {
  
  const [islightModeOn, setislightModeOn] = useState(true);
  const handleColorMode = ()=>{
    return islightModeOn?setislightModeOn(false):setislightModeOn(true)
    
  }
  const homeIcon = islightModeOn? <IoHome/>:<IoHomeOutline/>;
  const playerIcon = islightModeOn?<IoMusicalNotes/>:<IoMusicalNotesOutline/>;
  const pswIcon = islightModeOn?<RiLockPasswordFill/>:<RiLockPasswordLine/> 
  return (
    <div id='app-container' className={islightModeOn?'light':'dark'}>
      <Navbar
        islightModeOn = {islightModeOn}
        handleColorMode = {handleColorMode}
        navLinksData={[
          { url: '/Home', text: 'Home', icon: homeIcon },
          { url: '/Player', text: 'Player', icon: playerIcon },
          { url: '/PSW_generator', text: 'PSW generator', icon: pswIcon }
        ]}
        logoUrl={'https://cdn1.iconfinder.com/data/icons/education-set-3-3/74/15-512.png'}
        logoAlt={'React Logo'} />
      <Main 
      islightModeOn = {islightModeOn}
      />
    </div>
  )
}

export default App
