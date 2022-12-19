import React from "react";
import Card from "./Card";
import "./Projects.css";
import UsedTech from "./UsedTech";
import { v4 as uuidv4 } from 'uuid';

const Projects = ({projectRef}) => {
  const projects = [
    {
      projectName:"Trip Adivsior",
      imgUrl:
        "https://play-lh.googleusercontent.com/SOHKWI6RznrRqWVUSb6THa2bJNQPvjOTLsd4CSad_GCahf2fe2p4vE8FOKjtuudmL6E",
      codeUrl: "https://github.com/rajeshbyaga/subsequent-airport-831",
      websiteUrl: "https://lustrous-naiad-8bd481.netlify.app/index.html",
      aboute: "Trip Advisior is Travel Website which suggest and clear information in details about different places and nearby locations",
      tech: ["Javascript", "HTML ", "CSS ","BootStarp"],
    },
    {
      projectName:"Naukari",
      imgUrl:
        "https://m.economictimes.com/thumb/msid-68302566,width-1200,height-900,resizemode-4,imgsize-45453/untitled-7.jpg",
      codeUrl: "https://github.com/sushantkr961/delicious-vacation-7867",
      websiteUrl: "https://playful-kulfi-92634c.netlify.app/",
      aboute: "naukari.com is a Job search website where everyone who isseeking for job and who are finding for employees posts their data there and get interacted both. This website is cloned",
      tech: ["Javascript", "HTML ", "CSS ","BootStrap"],
    },
    {
      projectName:"LYST",
      imgUrl:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/jrbxx5zwdttmletwt9j7",
      codeUrl: "https://github.com/rajeshbyaga/UNIT2-Project-Masai",
      websiteUrl: "https://eloquent-chebakia-29d83e.netlify.app/",
      aboute: "LYST is a Ecommerce website which sells beauty products,Electric Products, Dresses,etc.",
      tech: ["Javascript", "HTML ", "CSS " ,"BootStarp"],
    },
    {
      projectName:"Treasury-Trip",
      imgUrl:
        "https://www.roomcloud.net/wordpress/wp-content/uploads/2019/05/Progetto-senza-titolo-1.jpg",
      codeUrl: "https://github.com/shreedharhegde99/Treasury-Trip#readme",
      websiteUrl: "https://treasury-trip.netlify.app/",
      aboute: "Treasury Trip is a website to explore tourist places, book flight tickets, airport taxis and hotel rooms",
      tech: ["React", "Chakra UI ", "NodeJS ","Express","MongoDB"],
    }
  ];

  return (
    <div className="container"  id="projects">
      <div className="project">
        <h1 ref={projectRef} className="d-flex justify-content-center">Projects</h1>
      </div>
      <div className="my-3">
        <div className="my-0 d-flex justify-content-center flex-wrap">
          {projects.map((item) => {
            let stack = item.tech;

            return (
              <Card 
                key={uuidv4()}
                projectName={item.projectName}
                imageUrl={item.imgUrl}
                codeUrl={item.codeUrl}
                websiteUrl={item.websiteUrl}
                about={item.aboute}
                usedTech={stack.map((tech) => {
                  return <UsedTech key={uuidv4()} techStack={tech} />;
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
