import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer", "MERN Stack Developer",  "Web Designer", ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20
        }}
      />
    </>
  );
};