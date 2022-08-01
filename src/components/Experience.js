import React from "react";

const Experience = ({ text }) => {
  return (
    <div className="relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8   ">
      <img
        src="https://ksets.netlify.app/personal/quote.png"
        alt=""
        className="absolute -top-3"
      />
      <p className="text-[#9c9c9c] text-start">
          <pre>{text}</pre>
      </p>
      <div className="flex items-center space-x-2">
        <span
          className="h-[3rem] w-[3rem] rounded-full bg-cover"
          style={{
            backgroundImage: `url(https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/294385239_3160692644197367_1096168186689609937_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tF7krHbG-WwAX-fII6N&_nc_ht=scontent.fuln6-1.fna&oh=00_AT_3BW_MxJHVkCZ-BOPfxi8hwV_MvryZsq0AHFf0oDMGCw&oe=62E81604)`,
          }}
        ></span>
        <p className="text-white text-lg font-medium">Sumiya Bat-Ulzii</p>
      </div>
    </div>
  );
};

export default Experience;
