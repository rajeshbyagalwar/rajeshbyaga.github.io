import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//import { Link } from 'react-router-dom'
const Navbar = ({ skillRef, projectRef, contectRef }) => {
  const homeRef=useRef()
  return (
    <div className="" ref={homeRef}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      
        <button className="btn mx-5 text-light" onClick={
          () => {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }>
          
          <img src={require("./logo.png")} alt="" style={{width:"120px",height:"40px"}}/>
        </button>
       
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex flex-wrap">
            <li className="nav-item active">
              <button
                className="btn text-light"
                onClick={() => {
                  homeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-light" onClick={() => {
                skillRef.current.scrollIntoView({"behavior":"smooth"})
        }}>
                Skill
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn text-light"
                href="/"
                onClick={() => {
                  projectRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-light" onClick={() => {
                contectRef.current.scrollIntoView({"behavior":"smooth"})
        }}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
