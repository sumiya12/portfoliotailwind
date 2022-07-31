import React from "react";
import Button from "./Button";
import Stack from "./Stack";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiOracle,
  SiGithub,
  SiMysql,
  SiHeroku,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaNode, FaAws } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Banner() {
  return (
    <div className="lg:mx-36 mx-6">
      <div className="md:flex items-center justify-around py-16">
        <div>
          <Fade bottom>
            <h1 className="text-white text-[2rem] md:text-[4rem] font-medium text-center md:text-start">
              Sumiya Bat-Ulzii
            </h1>
          </Fade>
          <Fade bottom>
            <p className="text-[#9c9c9c] md:w-[28rem] mt-4 text-lg">
              Hello! I'm Sumiya. I'm a Full stack web developer. I studied
              software engineer at Ulaanbaatar University. I enjoy long walks on
              the Street, and I like to say What is life, Without a little RISK?
              You should hire me!
            </p>
          </Fade>

          <Button
            text={"Let's get started"}
            className={
              "mt-6 shadow-md shadow-[#3f8e00] bg-gradient-to-r hover: bg-gradient-to-l from-[#3f8e00] to-[#62BA1B]"
            }
          />
        </div>
        <Fade right>
          <div className="flex items-center justify-center">
            <div
              className="xl:h-[25rem] h-[20rem] w-[20rem] xl:w-[25rem] rounded-full bg-cover mt-14 md:mt-0 animate-pulse "
              style={{
                backgroundImage: `url(https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/294385239_3160692644197367_1096168186689609937_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tF7krHbG-WwAX-fII6N&_nc_ht=scontent.fuln6-1.fna&oh=00_AT_3BW_MxJHVkCZ-BOPfxi8hwV_MvryZsq0AHFf0oDMGCw&oe=62E81604)`,
              }}
            ></div>
          </div>
        </Fade>
      </div>

      <div className="pb-16 flex flex-col items-center md:items-start">
        <Fade bottom>
          <p className="text-white">Worked with</p>
        </Fade>
        <Fade bottom>
          <div className="flex flex-wrap justify-center md:justify-start">
            <Stack Icon={FaReact} name="React JS" />
            <Stack Icon={SiJavascript} name="JavaScript" />
            <Stack Icon={SiGithub} name="Github" />
            <Stack Icon={SiMysql} name="MySql" />
            <Stack Icon={SiTypescript} name="TypeScript" />
            <Stack Icon={SiBootstrap} name="Bootstrap" />
            <Stack Icon={SiTailwindcss} name="Tailwindcss" />
            <Stack Icon={SiHtml5} name="Html5" />
            <Stack Icon={SiCss3} name="Css3" />
            <Stack Icon={FaNode} name="Node JS" />
            <Stack Icon={SiExpress} name="Express JS" />
            <Stack Icon={SiOracle} name="Oracle" />
            <Stack Icon={SiMongodb} name="Mongodb" />
            <Stack Icon={FaAws} name="Aws" />
            <Stack Icon={SiHeroku} name="Heroku" />
          </div>
        </Fade>
      </div>
    </div>
  );
}
