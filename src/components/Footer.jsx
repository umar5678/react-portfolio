// import React from 'react'
import {AiOutlineArrowUp, AiFillYoutube, AiFillInstagram, AiFillFacebook} from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div>
            <img src="https://avatar.githubusercontent.com/u/25058652" alt="Founder" />
            <h2>Umar Farooq</h2>
            <p>Motivation is temperary, Discipline last forever</p>
        </div>

        <aside>
          <h2>Social Media</h2>
         <article>
         <a href="https://youtube.com">
            <AiFillYoutube/>
          </a>
          <a href="https://instagram.com">
            <AiFillInstagram/>
          </a>
          <a href="https://facebook.com">
            <AiFillFacebook/>
          </a>
         </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer