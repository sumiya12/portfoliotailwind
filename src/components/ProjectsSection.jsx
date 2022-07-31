import React from "react";
import Projects from "./Projects";
// import Fade from 'react-reveal/Fade';

export default function ProjectsSection() {
  return (
    <div className="bg-gray-200  flex flex-col items-center ">
      <div className="text-center flex flex-col items-center pb-16 pt-12">
        <h1 className="text-black text-[3rem] font-medium">Projects</h1>
        <p className="text-[#9c9c9c] md:w-[35rem] text-center mx-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          veniam, ducimus harum odit quidem maiores ullam minima cupiditate
          impedit quas.
        </p>
      </div>

      <Projects
        image={"https://ksets.netlify.app/personal/mac.jpg"}
        button="bg-[#FFA217]"
      />

      <Projects
        flip
        image={"https://ksets.netlify.app/personal/mac.jpg"}
        button="bg-[#000AFF]"
      />
      <Projects
        image={"https://ksets.netlify.app/personal/mac.jpg"}
        button="bg-[#2AB090]"
      />
    </div>
  );
}
