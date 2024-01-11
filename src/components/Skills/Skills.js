import React, { useEffect } from "react";
import "./skills.css";
import { Chart as chartjs } from 'chart.js/auto';
import {Bar} from "react-chartjs-2";
import sourceData from './sourceData.json';
import AOS from 'aos'
import 'aos/dist/aos.css'

const SkillBar = () => {
  useEffect (()=>{
    AOS.init({ duration: 2000 })
  }, []);
  return (
    <>
        <div className="exp" data-aos='fade-down'><center>What I have learned</center>
                    <span className="wexp text-4xl">
                        <h1><center id='skills'>Skills</center></h1>
                    </span>
    </div>
    <div className="doughnutsize flex w-[100vw] h-[70vh] justify-center" data-aos='fade-up'>
      <Bar className="text-4xl"
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Percent",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      "rgba(68, 135,135, 0.8)",
                      "rgba(250, 192, 19, 0.8)",
                      "rgb(211, 23, 192)",
                      "rgb(237, 127, 31)",
                      "rgb(244, 114, 159)",
                      "rgb(34, 210, 210)",
                      "rgba(68, 135, 13, 0.8)",
                      "rgb(236, 58, 58)"
                    ],
                    borderRadius:7,
                  },
                ],
              }}
      />
    </div>
    </>
  );
};

export default SkillBar;
