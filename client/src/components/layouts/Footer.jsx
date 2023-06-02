import React from "react";

const Footer = () => {
   return (
      <div className="h-[700px] bg-black text-white">
         <div className="h-[50%] border-b-2 relative pt-[40px]">
            <div className="text-[40px] text-center">Send us a Message</div>
            <div className="border-2 h-[180px] rounded-xl bg-black absolute -bottom-[50px] ms-auto me-auto right-0 left-0 w-[50%] font-bold text-center text-[50px]">
               Need help with our security program?
            </div>
         </div>
         <div className="h-[50%] flex justify-center items-end">
            <div className="text-[20px] uppercase font-bold border-t">
               footer section
            </div>
         </div>
      </div>
   );
};

export default Footer;
