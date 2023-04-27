import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Java Full Stack Developer",
        //  "Deep Learning Engineer",
          "Microsoft Certified(AZ/AI-900)",

          //"MERN Stack Developer",
        //  "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
