import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Hosting from "./Hosting";
import "./Skill.css";


const Skill = ({skillRef}) => {
  return (
    <div className="container my-5" ref={skillRef}>
      <div className="skills">
        <h1 className="d-flex justify-content-center">SKILLS</h1>
      </div>
          <Frontend />
      <Backend />
      <Hosting />
      {/* <Table/> */}

    </div>
  );
};

export default Skill;
