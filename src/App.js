import './App.css';
import Nav from "./components/Navbar/Nav"
import Intro from "./components/Intro/Intro"
import Service from "./components/Service/Service"
import SkillBar from "./components/Skills/Skills"
import Carousel from './components/Projects/Projects';
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  let slides= [
    "https://picsum.photos/id/220/1005/500",
    "https://picsum.photos/id/230/1005/500",
    "https://picsum.photos/id/235/1005/500",
    "https://picsum.photos/id/212/1005/500"
  ];
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <SkillBar className='h-[100vh]'/>
      <Service/>
      <div className="w-[60%] m-auto">
      <Carousel slides={slides}/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
