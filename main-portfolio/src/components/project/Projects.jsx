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
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA3CAMAAAABvyXUAAAAsVBMVEX///8AAAA04KHx8fH7+/tra2tubm4256aqqqrU1NQ366lYWFienp415KTn5+ft7e3Jycm7u7sZGRkNDQ0y2ZyPj48c3pve3t4vLy+Hh4fCwsItw4wCCgcQRjMqKip5eXmu8NSF6sHm+vJH4qjX+Opl5bMnqXkbdlUruIQik2oeg1526LovzZPv/Pc4ODhAQEBMTEzB892f7s0ZbE0UVj4HHhYMNSYXYkcKLCAknXGT7MchSkRKAAAEmUlEQVRYhd2XaXOqPBSAE0FZlM2KCC5orSjWqr321tr//8PeswSXts44nYl35j0fMIlJnpw1IMSv5HE8mU1r09lk/Pi7DX4l42m3W2Ppdqevd6I+TSuoQk+f7oGdXFKJ/Ec/dvYdC+Dnf4IF8EQv9gcjK/BYJ/b1HOt53jlYZ0JNj0y31i+Kou+5R/ZMH7ZS1+ochpJleKhZSmF92QTqdlBKAA6Gu/kO6YMDjWlU+BHU7QNoALTSIvGWkgYGK1DY1MQdA9daKAPvyLFvqreCXldXwZxgQNX+Sjkvd+BZj9o7bL97OqvWDENqKPc113U773LuvskhtWEMg0tX0YKw8vryw7OK5cLqSLmQA7A7tgdkaF2BBVxrKUv3AA7tuzs5lEu3gPbCncuDZu5cFi4G09LFSC7cPTznbimXlj7ujPQ9uCXpuMNsIt0LOAPqq+tugEvBW8ih5ZX7wqph+nxY1mF/sCCu+xqvBiyTFsSxBTGsMnfnQdvbyzdLZ6EErreCbC2L8q8qGNj+kIMO1g1dWPGMhWP1TsC31UB+qPaQsJ/auI90H7mLcl6uXDhAx3P70O7TZdh90cYVzwT24D7gi5/a3NGorhAvV95yQKYasfDufPX9SvM79PjK+6T2j4bXH9+f7/DF8PUzBT9U7vNx9qd7Tu7WxnehgrzgB6GS6d2ojH4df35+jp90vctpE/tMfB7KRmv/1uUGLPsylLfzGxbKMwl56EHK5q1cH5Zd2jqDkeg3XFPegxuB5FJu8DfgobC3udnO37kiH91iZxSbFTQMAx/CNAwTO6YwE+fsBNyjP1AMxwlEgNzTEC3izsXawEl4hllBTlxHyrbTkyNRl7KFjzQGT4MleKmRUi9U/vDr6JlmBA/RkLJBm7bBxAaMgOFiaMser802ODdHWMiQ3iW3B5MVt3FyO+3pP1zEQXYWFrgZGdsh5Ymbq/8QnFYTE+KOevIrF6S9PufWSatUcPyt863iJqRs3qOuiXqGDGgI5Bpg/ofMj+EpRAt3bTRxpkFHhO7mC7eF3SO3CUqYSPZFrM7uMHfLp8eVqCpoh7EE+Iy5MA23TtOU+jG6eI2TwgpyyRXn3DaHwgi7I14M8Q+znOCYdClxMTQEGUEwF3Nxy3XIrrLSr1wivnHbF9yU/wVV6yYpTYLckAyIkrBrcRAn5swN6HjgmBadLOO5EF3+aeV1LiuI/mma5JwjN8Pw4wRhboqnHJERVDwnFP6wb3qsg80buVv+d4snOBYhVNBJjurbzMVcCHi94qJhMSgSuzIcnt28hcsBYJMNIXLauJu5IdeOlNMSqVIIQkp5hvxrr9cp75T5VSzkqMlNXCgLUZ2MRUEh46g14niOyHlRLCsut5yKG1LHb+MTd8gje0NDt3FZ2oZSu5JQHOtCxSXFyedsZ6Sgg8FX5rqa2BKKawQVd/tDHtV5QZ3TKSRVZa7Mps6RKy5angORuSZXGKwAwuRDPmCAcB5lfGcnUYSBGEUc8E4UJchtibAV26fizr3q3jKzVhyZIsoitShT49CgomnHdqJWBnbc4qAOCOIn4pqc8ui+8j/l/geRTVgFen/PHwAAAABJRU5ErkJggg==",
      codeUrl: "https://github.com/vicky-ops/subsequent-airport-831",
      websiteUrl: "https://lustrous-naiad-8bd481.netlify.app/index.html",
      aboute: "Trip Advisior is Travel Website which suggest and clear information in details about different places and nearby locations",
      tech: ["Javascript", "HTML ", "CSS ","BootStarp"],
    },
    {
      projectName:"Naukari",
      imgUrl:
        "https://static.naukimg.com/s/4/100/i/naukri_Logo.png",
      codeUrl: "https://github.com/sushantkr961/delicious-vacation-7867",
      websiteUrl: "https://playful-kulfi-92634c.netlify.app/",
      aboute: "naukari.com is a Job search website where everyone who isseeking for job and who are finding for employees posts their data there and get interacted both. This website is cloned",
      tech: ["Javascript", "HTML ", "CSS ","BootStrap"],
    },
    {
      projectName:"LYST",
      imgUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAASFBMVEXK/E8AAABNYSfH9FtqgzXP/1m03FRSaCcjLBOkyE6BmkOZuksNEQg5Rx+/6lhDVCIsNhgZIA9/nzqKqkNofTl0jTyZvUUAEQABUlO9AAACWUlEQVRoge2XDY+DIAyGUVYUUPye//+fHjqo6NC4O5K7S/okyyxgX1uwIGMEQRAEQRAEQRAEQRAEQRB/DPjtB1iBawtSPCVfYGB/aC3A1g2vIYseF3roBy3N7u4jtx6rzx3jEgn3ViOWTjN5UwKYYcw8tRKLd+77d8gbsvBAV6sjdD3aCEFWzioFk00WUg92PN+3OfRHusWaHtE6s7MBQ+47e96/uZ9sCmK61We6a7yMoz0xEOiLyzkSF7Bkugy1KgOYdMWLiEBt0sUb5FaJ0l21QnYxARnXfX5Hl+FaajFGBYO/7KbhgSnvU8TbwLEFtQzbZh0AtDdyXkd0P1zPqKuPfqzWhFnRArh0CPP6x6jVappryZM8BzP8orV+psCeGyWFL0q2ZgLghCzF5F4RjenKva6yFeR5SEFbDBwVAt1bmie6QdHy4bLIAmqxHG4J+pnutqTXcNf2k7qRIN5i0w1nuH2tEtDvb3AtUugG8QYFMlO+UfT1MeYxpe66LeF01psrEPqxl655At1ceKw3tc8+xz4j9Oi3rGxOoTuXjsqul4Mu1K6vU7Zebe9ZCt0NvYt3PeFgPSyl4VjQksR7prsMYtsbPbdbTS5jup/Wqwtdxob3UVmi9Xypi8efkC7J+3upC+p9WPZIUq8udVnkoNP8ZF9gN3UZV/tCWSncZr+zL7AhLw4s527tDYXLE4wq2rKrqqor26IPN/fe+cjv7PjOm8V+ibz+vOHaV3M31gj51E97zth/IoG//X64f434o8NJb7pA/3HKCIIgCIIgCIIgCIIgCIK45AsZ5xqAfZ9/IQAAAABJRU5ErkJggg==",
      codeUrl: "https://github.com/rajeshbyaga/UNIT2-Project-Masai",
      websiteUrl: "https://eloquent-chebakia-29d83e.netlify.app/",
      aboute: "LYST is a Ecommerce website which sells beauty products,Electric Products, Dresses,etc.",
      tech: ["Javascript", "HTML ", "CSS " ,"BootStarp"],
    },
    
  ];

  return (
    <div className="container" >
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
