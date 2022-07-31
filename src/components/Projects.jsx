import React from "react";
import Button from "./Button";

export default function Projects({flip,image,button}) {
  return (
    <div className={`lg:flex ${flip && "flex-row-reverse"} px-6 md:px-36 mb-12 w-full space-x-4 `}>
      <div className="flex-1 flex flex-col justify-around h-80 px-6">
        <h1 className="text-black text-[2rem] font-medium">Web App</h1>
        <p className="text-[#9c9c9c]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          accusantium quibusdam itaque aliquam odit? Fuga laudantium, molestiae
          voluptate sint sequi deleniti eveniet at assumenda in vero ab porro.
          Nisi, excepturi!
        </p>
        <img src="" alt="" />

        
        <Button text={"View Project"} className={`${button} px-10 w-fit py-2`}/>
      </div>
      <div className="h-80 flex-1 bg-color rounded-lg" style={{backgroundImage:`url(${image})`}}></div>
    </div>
  );
}
