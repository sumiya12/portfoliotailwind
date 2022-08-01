import React from "react";
import Experience from "./Experience";

const Experiences = () => {
  const work = {
    eachWork: [
      {
        years: "Years : 2019.10 - 2022-4",
        Work: "Worked at: Arigbank",
        do: "What I do: IT support, Report a developer",
        id: 1,
      },
      {
        years: "Years : 2013.8 - 2018-12",
        Work: "Worked at: Unitel and Univision",
        do: "What I do: Service employee, Installation engineer",
        id: 1,
      },
      {
        years: "Years : 2022.3 - currently",
        Work: "Studied at: Mstars Academy",
        do: "What I do: Full Stack Web Developer",
        id: 2,
      },
      {
        years: "Years : 2008 - 2012",
        Work: "Studied at: Ulaanbaatar University",
        do: "What I do: Software engineer",
        id: 2,
      },
      {
        Work: "Studied at: High School",
        years: "Years : 1998 - 2008",
        do: "What I do: High School Education",
        id: 2,
      },
    ],
  };

  return (
    <div className="text-center flex flex-col items-center pb-16 pt-12 ">
      <div className="text-center flex flex-col items-center pb-16 pt-12">
        <h1 className="text-white text-[3rem] font-medium">Work Experiences</h1>
        <p className="text-[#9c9c9c] md:w-[35rem] text-center mx-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          veniam, ducimus harum odit quidem maiores ullam minima cupiditate
          impedit quas.
        </p>
      </div>
      <div className=" px-36 flex flex-wrap items-center justify-center ">
        {work.eachWork.map((each, i) => {
          return each.id === 1 ? (
            <Experience
              key={i}
              text={each.Work + "\n" + each.years + "\n" + each.do}
            />
          ) : null;
        })}
      </div>
      <div className="text-center flex flex-col items-center pb-16 pt-12">
        <h1 className="text-white text-[3rem] font-medium">Education</h1>
        <p className="text-[#9c9c9c] md:w-[35rem] text-center mx-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          veniam, ducimus harum odit quidem maiores ullam minima cupiditate
          impedit quas.
        </p>
      </div>
      <div className=" px-36 flex flex-wrap items-center justify-center ">
        {work.eachWork.map((each, i) => {
          return each.id === 2 ? (
            <Experience
              key={i}
              text={each.Work + "\n" + each.years + "\n" + each.do}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Experiences;
