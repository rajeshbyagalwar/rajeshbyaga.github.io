import React from "react";
import "./Skill.css"

const TechStack = ({ img, name }) => {
  return (
    <div>
      <div className="card mx-2  shadow p-1 mb-5 bg-body rounded">
        <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                      <div className="">
                          <div className="techStackImg mt-2 ">
              <img src={img} alt="HTML" />
            </div>
            <h6 className="mt-2">{name}</h6>
                      </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
