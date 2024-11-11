import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BTECH Computer Science and Engineering",
          "Blockchain Enthusiatic",
          "Data Analytics is my domain",
          "Business Minded",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
