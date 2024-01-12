import React,{useEffect} from 'react'
import './service.css'
import web from './Codinglogo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Service() {
    useEffect (()=>{
        AOS.init({ duration: 2000 })
      }, []);
    return (
            <>
            <section className="service mt-[13vh]">
                <div className="exp" id='service' data-aos='fade-down'><center>What I can provide to you</center>
                    <span className="wexp text-4xl">
                        <h1><center>Services</center></h1>
                    </span>
                    <div className="flex-container">
                        <div className="flex-box">
                            <span className="logo">
                                <img className="logos" src={web}/>
                            </span>
                            <span className="cbrief">Web Development</span>
                            <span className="linebr"></span>
                            <div className="content">
                            <span className="content">Transforming ideas into powerful websites. My web development expertise ensures in converting your robust data models to real-world value.</span>
                            </div>
                        </div>
                        <div className="flex-box">
                            <span className="logo">
                                <img className="logos" src="https://cdn-icons-png.flaticon.com/512/5738/5738031.png" />
                            </span>
                            <span className="cbrief">App Development</span>
                            <span className="linebr"></span>
                            <div className="content">
                            <span className="content">Turning concepts into exceptional apps. My app development expertise guarantees seamless functionality, providing a standout user experience for your digital solutions</span>
                            </div>
                        </div>
                        <div className="flex-box">
                            <span className="logo">
                                <img className="logos"
                                    src="https://www.intel.in/content/dam/www/central-libraries/us/en/images/software-first-icon-ai-1x1.png.rendition.intel.web.480.270.png" />
                            </span>
                            <span className="cbrief">AI Expert</span>
                            <span className="linebr"></span>
                            <div className="content">
                            <span className="content">AI expert with deep knowledge in machine learning and natural language processing. Passionate about solving complex problems.</span>

                            </div>
                        </div>
                        <div className="flex-box">
                            <span className="logo">
                                <img className="logos"
                                    src="https://static.vecteezy.com/system/resources/previews/010/869/737/original/data-analysis-concept-illustration-flat-vector-design-statistical-and-data-analysis-for-business-finance-investment-concept-taking-part-in-business-activities-free-png.png" />
                            </span>
                            <span className="cbrief">Data Analyst</span>
                            <span className="linebr"></span>
                            <div className="content">
                            <span className="content">Data analyst with a keen eye for patterns, extracting valuable insights from complex datasets. Proficient in data visualization, statistical analysis, and business intelligence.</span>

                            </div>
                        </div>
                        <div className="flex-box">
                            <span className="logo">
                                <img className="logos" src="https://cdn-icons-png.flaticon.com/512/8759/8759045.png" />
                            </span>
                            <span className="cbrief">Software Development</span>
                            <span className="linebr"></span>
                            <div className="content">
                            <span className="content">Software engineer adept at designing and developing scalable solutions. Proficient in multiple programming languages, emphasizing clean code, and solving complex problems efficiently.</span>

                            </div> 
                            <div className="srvcbtn">
                            </div>
                        </div>
                        <div className="flex-box">
                            <span className="logo">
                                <img className="logos" src="https://cdn-icons-png.flaticon.com/512/860/860454.png" />
                            </span>
                            <span className="cbrief">Leadership</span>
                            <span className="linebr"></span>
                            <div className="content flex justify-center align-middle">
                            <span className="content">Proven leader with strong strategic vision, effective communication, and team collaboration skills. Inspires and empowers others to achieve goals through positive influence.</span>

                            </div>
                            <div className="srvcbtn">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default Service
