import React from "react";
import twc from "./twc.png";
import js from "./js.png";
import react from "./react.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="h-[calc(77vh-4rem)] bg-[rgb(38,38,67)]">
      <div className="usedlang">
        <div className="footerbrief relative flex justify-center text-4xl top-10">
          <h3>
            <center>Used languages to make this Portfolio</center>
          </h3>
        </div>
        <div className="image flex relative top-[14vh] justify-center gap-[15vw] w-[100vw]">
          <img src={react} alt="ReactJS" className="react" />
          <img src={js} alt="JavaScript" className="js" />
          <img src={twc} alt="TailwindCSS" className="twc" />
        </div>
        <div className="last flex-col relative top-[12rem]">
        <div className="firstext">
          <b>Akshat's Developer Portfolio</b>
        </div>
        <div className="sepline"></div>
        <div className="credit">
          Designed and Coded by Akshat Awasthi &copy;
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
