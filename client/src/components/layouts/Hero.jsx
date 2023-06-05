import React from "react";

const Hero = () => {
   return (
      <div className="sm:h-screen min-h-[700px] relative pt-[50px] flex items-center justify-center flex-col">
         {/* bg-gradient-to-br from-[#4f4f4f] to-[#000209] */}
         <div className="bg-[url(https://cdn.pixabay.com/photo/2017/05/10/12/41/hacker-2300772_1280.jpg)]  bg-no-repeat bg-cover top-0 left-0 absolute w-full h-full"></div>
         <div className="bg-black absolute h-full w-full opacity-[.4] top-0 left-0"></div>
         <h2 className="text-[40px] sm:text-[70px] z-50 font-bold sm:max-w-[80%] lg:max-w-[50%]  max-w-[100%] text-center text-white">
            IT and Cybersecurity services for organizations
         </h2>
         <a
            href="#service"
            className="mt-[50px] cursor-pointer text-center z-50 border-2 border-[#5a8488] hover:bg-green-400 sm:w-[250px] w-[150px] text-white rounded-2xl sm:py-[17px] py-[10px] bg-[#000913]  sm:text-2xl text-xl font-bold"
         >
            Get Started
         </a>
      </div>
   );
};

export default Hero;
