import React, { useState } from 'react'
import './nav.css'
import navlogo from './navlogo.png'
import menu from './/menu.png'
import { Link } from 'react-scroll'

function Nav() {
  const [showMenu, setshowMenu] = useState(false)

  return (
      <nav className="navbar">
        <img src={navlogo} alt="logo" className="logo"/>
        <div className="desktopMenu">
          <Link className="items" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          <Link className="items" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
          <Link className="items" activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
          <Link className="items" activeClass='active' to='service' spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
        </div>
        <button className="contactBtn text-black" onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
        }}><i className="ri-chat-4-line text-black"></i>Contact Me</button>
        <img src={menu} alt="menu" className="menulogo" onClick={()=> setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
          <Link className="listitems" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>About</Link>
          <Link className="listitems" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Skills</Link>
          <Link className="listitems" activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Projects</Link>
          <Link className="listitems" activeClass='active' to='service' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Services</Link>
          <Link className="listitems" activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
      </nav>
  )
}

export default Nav


