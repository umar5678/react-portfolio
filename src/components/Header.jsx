// import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const Header = ({ setMenuOpen, menuOpen }) => {


  return (
    <>
      <nav id="nav">
        <NavContent  setMenuOpen={setMenuOpen}/>
      </nav>
      <button className="navbtn" onClick={() => setMenuOpen(!menuOpen) (document.body.classList.toggle('blur'))
  }>
        <AiOutlineMenu />
      </button>
    </>

  )
}

export const MobileNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div id="mobileNav" className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`} >
      <NavContent setMenuOpen={setMenuOpen}  />
    </div>
  )
}

const NavContent = ({setMenuOpen}) => (
  <>
  

    <h2>Umar Farooq</h2>
    <div>
      <a onClick={() => setMenuOpen(false) (document.body.classList.remove('blur'))} href="#home">Home</a>
      <a onClick={() => setMenuOpen(false) (document.body.classList.remove('blur'))} href="#work">Work</a>
      <a onClick={() => setMenuOpen(false) (document.body.classList.remove('blur'))} href="#timeline">Experience</a>
      <a onClick={() => setMenuOpen(false) (document.body.classList.remove('blur'))} href="#services">Services</a>
      <a onClick={() => setMenuOpen(false) (document.body.classList.remove('blur'))} href="#testimonial">Testimonial</a>
      <a onClick={() => setMenuOpen(false) (document.body.classList.remove('blur'))} href="#contact">Contact</a>
    </div>
    <a href="mailto::uamrfarooq567800@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header