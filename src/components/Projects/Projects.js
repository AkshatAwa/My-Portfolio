import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from 'react';
import './projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Carousel({ slides }) {
  useEffect (()=>{
    AOS.init({ duration: 2000 })
  }, []);
  let [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <>
      <section className="relative top-[18vh]" >
      <div className="pexp" data-aos='fade-down' ><center>What I have Done so Far</center>
          <span className="pwexp text-4xl">
            <h1><center>My Projects</center></h1>
          </span>
      </div>
        <div className="overflow-hidden w-full" data-aos='flip-left' id="projects">
          <div className={`flex transition-ease-out duration-50"`}
          style={{
            transform: `translateX(-${current*100}%)`,
          }}
          >
            {slides.map((s) => {
              return <img src={s} alt="Image not found" />;
            })}
          </div>
        </div>
        <div className="fbtn w-full h-full flex justify-center gap-[40vw] py-10 text-4xl">
          <button onClick={previousSlide}>
            <FaArrowCircleLeft/>
          </button>
          <button onClick={nextSlide}>
            <FaArrowCircleRight/>
          </button>
        </div>
      </section>
    </>
  );
}
