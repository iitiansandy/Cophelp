import React from "react";

const Hero = () => {
   return (
      <div className="h-screen relative pt-[50px] flex items-center justify-center flex-col">
         {/* bg-gradient-to-br from-[#4f4f4f] to-[#000209] */}
         <div className="bg-[url(https://cdn.pixabay.com/photo/2017/05/10/12/41/hacker-2300772_1280.jpg)] bg-no-repeat bg-cover top-0 left-0 absolute w-full h-full"></div>
         <div className="bg-black absolute h-full w-full opacity-[.4]"></div>
         <h2 className="text-[70px] z-50 font-bold max-w-[50%] text-center text-white">
            IT and Cybersecurity services for organizations
         </h2>
         <button className="mt-[50px] z-50 border-2 border-[#5a8488] hover:bg-green-400 w-[250px] text-white rounded-2xl py-[17px] bg-[#000913]  text-2xl font-bold">
            Get Started
         </button>
      </div>
   );
};

export default Hero;
