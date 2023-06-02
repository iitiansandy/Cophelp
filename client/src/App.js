import { useEffect } from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import Tags from "./components/layouts/Tags";
// import img from './assets/Images/asset-06.png'

let tags = [
   "Retail & E-commerce",
   "Finance",
   "Utility",
   "Education",
   "Energy",
   "Healthcare",
   "Finance",
   "Insurance",
   "Retail & E-commerce",
   "Utility",
   "Energy",
   "Healthcare",
   "Education",
   "Insurance",
   "Insurance",
   "Retail & E-commerce",
   "Utility",
   "Energy",
   "Healthcare",
   "Education",
   "Insurance",
];
function App() {

   useEffect(() => {
      console.log(process.env);
   },[])

   return (
      <div>
         <Header />
         <Hero />
         <section id="service">
            <div className="flex w-full box-border justify-center bg-black py-[150px]">
               <div class="grid grid-cols-4 gap-8 text-white">
               <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="w-[630px] h-[630px]  rounded-2xl col-span-2 row-span-2 p-4 flex justify-center items-center">
                     <div className="flex justify-center items-start flex-col max-w-[80%]">
                        <h1 className="text-start text-[60px] font-semibold my-8 leading-[70px] ">
                           Cybersecurity solutions
                        </h1>
                        <p className=" text-gray-400">
                           Lorem ipsum dolor sit amet consectetur adipiscing
                           elit, magnis montes tellus facilisis inceptos vitae,
                           est laoreet enim felis lacinia himenaeos iaculis mi
                           tellus nascetur convallis. Lorem ipsum dolor sit amet
                           consectetur adipiscing elit, magnis montes tellus
                           facilisis inceptos vitae, est laoreet enim felis
                           lacinia himenaeos iaculis mi tellus nascetur
                           convallis.
                        </p>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                     <div className=" w-full hover:bg-[#5a8488] overflow-hidden hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover">
                        <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                        Phone Number Search 
                        </div>
                        <div className="innerItem cursor-default cardHidden w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                           <ul className="p-2">
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                              <li className="my-2 hover:text-yellow-300"><a href="http://nirajkumar.in" target="_blank" title="https://nirajkumar.in">Lorem ipsum dolor sit amet consectetur</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="flex justify-center py-10">
            <div className="max-w-[1200px] w-full min-h-[300px] relative bg-[#e2ff7e] rounded-[15px]">
               <div className="contrast-700 bg-[url(./assets/Images/asset-grid.png)] bg-no-repeat bg-cover opacity-[.5] top-0 left-0 absolute w-full h-full"></div>
               <div className="w-full h-full p-5 flex box-border">
                  <div className="flex-1 box-border text-[40px] font-bold">
                     <h1 className="mt-5">
                        Cybersecurity <br /> Solutions by Industry
                     </h1>
                     <button className="text-[17px] border px-5 py-2 rounded-xl bg-black text-white font-normal">
                        Read More
                     </button>
                  </div>
                  <div className=" flex-1">
                     <div className="flex flex-wrap">
                        {tags.map((el) => (
                           <Tags value={el} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
}

export default App;
