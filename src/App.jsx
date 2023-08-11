import { Toaster } from "react-hot-toast"
import Contact from "./components/Contact"
import Header, {MobileNav} from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import TimeLine from "./components/TimeLine"
import Work from "./components/Work"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  // console.log(menuOpen) 
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)

  useEffect (() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight)
    }
    
    window.addEventListener("resize", resizeRatio)
    
    return () => {
      window.removeEventListener("resize", resizeRatio)
    }

  }, [ratio])

  console.log(ratio)

  return ratio < 2.2 ? (
    <>
    <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div id="content">
        <Home ratio={ratio}/>
    <Work />
    <TimeLine />
    <Services />
    <Testimonials />
    <Contact />
    </div>
  
    <Footer />
    <Toaster/>
    </>
  ) : (<em id="customMessage">Please change the ratio to View!</em>)
}

export default App
