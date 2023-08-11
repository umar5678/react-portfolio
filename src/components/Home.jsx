// import React from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight} from 'react-icons/bs'
import {BsChevronDown} from 'react-icons/bs'
import me from '../assets/logo.png'
import { useRef } from 'react'

const Home = ({ratio}) => {
  
  
  const clientCount = useRef(null)
  const projectCount = useRef(null)

  const animationClientCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
    })
  }

  const animationProjectCount = () => {
    animate(0, 450, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
    })
  }
  const animation = {
    h1: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      }
    },
    button: {
      initial: {
        y: '-100%',
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      }
    },
    
    


  }

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br/> Umar Farooq
          </motion.h1>

          <Typewriter 
          options={{
            strings: ['A Programmer', 'Full Stack Developer', 'A Creator'],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: 'typewriterpara'
          }} 
          />

          <div>
            <a href="mailto:uamrfarooq567800@gmail.com">Hire Me</a>
            <a href="#work">Projects <BsArrowUpRight/> </a>
          </div>

          <article>
            <p>
              +
              {
                ratio < 2 && (
                  <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                )
              }
            </p>
            <span>Clients WorldWide</span>
          </article>

          <aside>
          <article>
            <p>
              + {
                ratio < 2 && (
                  <motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>
                )
              }
            </p>
            <span>Projects Completed</span>
          </article>
          <article data-special>
            <p>Contact</p>
            <span>uamrfarooq567800@gmail.com</span>
          </article>
          </aside>

        </div>
      </section>
      <section>
        <img src={me} alt="Umar farooq" />
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home