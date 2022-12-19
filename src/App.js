import { useRef } from "react";
import "./App.css";
import Contect from "./components/contect/Contect";
import Footer from "./components/footer/Footer";
//import CardImg from './components/navbar/CardImg';

import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Projects from "./components/project/Projects";
import Skill from "./components/Skill/Skill";
import Github from "./components/Github/Github";
import Home from "./components/Home/Home";
function App() {
  const projectRef = useRef()
  const contectRef = useRef();
  const skillRef = useRef();
  // const HomeRef = useRef();
  return (
    <div className="">
      <div>
        {/* <Home /> */}
        <Navbar projectRef={projectRef} skillRef={skillRef} contectRef={contectRef} />

        <Profile />
        <div className="border my-5 container shadow-none p-3 mb-5 bg-light rounded">
          <Skill skillRef={skillRef}/>
          <Projects projectRef={projectRef} />
          <Github/>
          <Contect contectRef={contectRef}/>
       
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
