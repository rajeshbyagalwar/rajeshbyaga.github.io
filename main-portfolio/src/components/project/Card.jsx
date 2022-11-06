import React from "react";

const Card = ({ imageUrl, codeUrl, websiteUrl, about, usedTech, projectName }) => {
  return (
    <div>
      <div className="card mx-3 projectCard my-2" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">
            {about}
          </p>
          <div className="d-flex flex-wrap justify-content-center usedTech">
           { usedTech}
          </div>

          <div className="d-flex justify-content-center mt-3">
            <a href={codeUrl} className="btn btn-primary mx-2 " target="_blank" rel="noopener noreferrer">
              Github Code
            </a>
            <a href={websiteUrl} className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
