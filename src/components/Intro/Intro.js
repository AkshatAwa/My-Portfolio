import React, {useEffect} from 'react'
import './intro.css'
import image from './main.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Intro= () => {
    useEffect (()=>{
      AOS.init({ duration: 2000 })
    }, []);
  return (
  <><section id="intro">
    <div className="introContent">
      <span className="hello" data-aos="fade-up">Hello,</span>
      <span className="introText" data-aos="fade-up">I'm <span className="introName">Akshat</span><br />Software Engineer</span>
      <p className="intropara" data-aos="fade-up">I'm a skilled Web developer with experience in creating an appealing and user friendly websites.</p>
      <div class="hiring" data-aos="fade-up">
        <a href="/" download><button class="btn" id="dp" data-aos="fade-up">Download Resume</button></a>
        <a href="https://github.com/AkshatAwa" data-aos="fade-up"><button class="btn">Visit Github</button></a>
      </div>
    </div>
    <img src={image} alt="image not loaded" className="bg" data-aos="fade-up"/>
    </ section>
  </>

  )
}

export default Intro
