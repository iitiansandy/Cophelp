import { useEffect, useState } from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import Tags from "./components/layouts/Tags";
import axios from "axios";
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
let data = [
   {
      _id: "6475cf557497dcc5ce52bbc6",
      menuName: "web development",
      toolsName: [
         {
            name: "web dev",
            url: "www.turtltech.com",
            _id: "6475cf557497dcc5ce52bbc7",
         },
      ],
      createdAt: "2023-05-30T10:26:29.987Z",
      updatedAt: "2023-05-30T10:26:29.987Z",
      __v: 0,
   },
   {
      _id: "6475d0e740b12201004f0355",
      menuName: "AI and Machine Learning",
      toolsName: [
         {
            name: "Machine Learning",
            url: "www.turtltech.com",
            _id: "6475d0e740b12201004f0356",
         },
      ],
      createdAt: "2023-05-30T10:33:11.448Z",
      updatedAt: "2023-05-30T10:55:26.476Z",
      __v: 0,
   },
   {
      _id: "6476d26eb7d93dc1b97147ac",
      menuName: "VAPT Services 1",
      toolsName: [
         {
            name: "VAPT services",
            url: "www.google.com",
            _id: "6476d26eb7d93dc1b97147ad",
         },
      ],
      createdAt: "2023-05-31T04:51:58.392Z",
      updatedAt: "2023-05-31T04:51:58.392Z",
      __v: 0,
   },
   {
      _id: "6476d26eb7d93dc1b97147ac",
      menuName: "VAPT Services 2",
      toolsName: [
         {
            name: "VAPT services",
            url: "www.google.com",
            _id: "6476d26eb7d93dc1b97147ad",
         },
      ],
      createdAt: "2023-05-31T04:51:58.392Z",
      updatedAt: "2023-05-31T04:51:58.392Z",
      __v: 0,
   },
   {
      _id: "6476d26eb7d93dc1b97147ac",
      menuName: "VAPT Services 3",
      toolsName: [
         {
            name: "VAPT services",
            url: "www.google.com",
            _id: "6476d26eb7d93dc1b97147ad",
         },
      ],
      createdAt: "2023-05-31T04:51:58.392Z",
      updatedAt: "2023-05-31T04:51:58.392Z",
      __v: 0,
   },
   {
      _id: "6476d26eb7d93dc1b97147ac",
      menuName: "VAPT Services 4",
      toolsName: [
         {
            name: "VAPT services",
            url: "www.google.com",
            _id: "6476d26eb7d93dc1b97147ad",
         },
      ],
      createdAt: "2023-05-31T04:51:58.392Z",
      updatedAt: "2023-05-31T04:51:58.392Z",
      __v: 0,
   },
   {
      _id: "6476d26eb7d93dc1b97147ac",
      menuName: "VAPT Services 5",
      toolsName: [
         {
            name: "VAPT services",
            url: "www.google.com",
            _id: "6476d26eb7d93dc1b97147ad",
         },
      ],
      createdAt: "2023-05-31T04:51:58.392Z",
      updatedAt: "2023-05-31T04:51:58.392Z",
      __v: 0,
   },
   {
      _id: "6476d26eb7d93dc1b97147ac",
      menuName: "VAPT Services 6",
      toolsName: [
         {
            name: "VAPT services",
            url: "www.google.com",
            _id: "6476d26eb7d93dc1b97147ad",
         },
      ],
      createdAt: "2023-05-31T04:51:58.392Z",
      updatedAt: "2023-05-31T04:51:58.392Z",
      __v: 0,
   },
];
function App() {
   const [menus, setMenus] = useState(data);
   const getAllMenu = async () => {
      await axios
         .get("https://cophelp.vercel.app/menus")
         .then((res) => {
            setMenus(res.data.data);
            console.log(res.data.data);
         })
         .catch((err) => {
            console.log("Error", err);
         });
   };

   useEffect(() => {
      // getAllMenu();
   }, []);

   return (
      <div>
         <Header />
         <Hero />
         <section id="service">
            <div className="flex justify-center items-center bg-black">
               <div className="box-border justify-center  py-[150px] text-white">
                  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                     <div className="grid justify-items-center gap-3 gap-y-5  sm:grid-cols-2 grid-cols-1 order-2 sm:order-2 md:order-2 lg:order-2 xl:order-1">
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 0 && (
                              <div
                                 className=" w-full hover:bg-[#5a8488] overflow-hidden min-h-full
                       hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                              >
                                 <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                    {menus[0].menuName}
                                 </div>
                                 <div className="innerItem cursor-default cardHidden min-w-full w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                    <ul className="p-2">
                                       {menus[0].toolsName.map((el) => (
                                          <li
                                             key={el._id}
                                             className="my-2 hover:text-yellow-300"
                                          >
                                             <a
                                                href={el.url}
                                                target="_blank"
                                                title={el.url}
                                             >
                                                {el.name}
                                             </a>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 1 && (
                              <div
                                 className=" w-full hover:bg-[#5a8488] overflow-hidden min-h-full
                       hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                              >
                                 <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                    {menus[1].menuName}
                                 </div>
                                 <div className="innerItem cursor-default cardHidden min-w-full w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                    <ul className="p-2">
                                       {menus[1].toolsName.map((el) => (
                                          <li
                                             key={el._id}
                                             className="my-2 hover:text-yellow-300"
                                          >
                                             <a
                                                href={el.url}
                                                target="_blank"
                                                title={el.url}
                                             >
                                                {el.name}
                                             </a>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 2 && (
                              <div
                                 className=" w-full hover:bg-[#5a8488] overflow-hidden min-h-full
                       hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                              >
                                 <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                    {menus[2].menuName}
                                 </div>
                                 <div className="innerItem cursor-default cardHidden min-w-full w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                    <ul className="p-2">
                                       {menus[2].toolsName.map((el) => (
                                          <li
                                             key={el._id}
                                             className="my-2 hover:text-yellow-300"
                                          >
                                             <a
                                                href={el.url}
                                                target="_blank"
                                                title={el.url}
                                             >
                                                {el.name}
                                             </a>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 3 && (
                              <div
                                 className=" w-full hover:bg-[#5a8488] overflow-hidden min-h-full
                       hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                              >
                                 <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                    {menus[3].menuName}
                                 </div>
                                 <div className="innerItem cursor-default cardHidden min-w-full w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                    <ul className="p-2">
                                       {menus[3].toolsName.map((el) => (
                                          <li
                                             key={el._id}
                                             className="my-2 hover:text-yellow-300"
                                          >
                                             <a
                                                href={el.url}
                                                target="_blank"
                                                title={el.url}
                                             >
                                                {el.name}
                                             </a>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                     <div className="order-1 sm:order-1 md:order-1 lg:order-1 xl:order-2">
                        <div className=" sm:w-[630px] h-[630px] w-[500px]  rounded-2xl sm:col-span-2 row-span-2 sm:p-4 flex justify-center items-center">
                           <div className="flex justify-center items-start flex-col max-w-[80%]">
                              <h1 className="text-start text-[60px] font-semibold my-8 leading-[70px] ">
                                 Cybersecurity solutions
                              </h1>
                              <p className=" text-gray-400">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipiscing elit, magnis montes tellus facilisis
                                 inceptos vitae, est laoreet enim felis lacinia
                                 himenaeos iaculis mi tellus nascetur convallis.
                                 Lorem ipsum dolor sit amet consectetur
                                 adipiscing elit, magnis montes tellus facilisis
                                 inceptos vitae, est laoreet enim felis lacinia
                                 himenaeos iaculis mi tellus nascetur convallis.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="grid mt-5 justify-items-center box-border gap-2 gap-y-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                     {menus.length > 4 &&
                        menus.slice(4).map((el, i) => (
                           <div
                              key={el._id}
                              className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] "
                           >
                              <div
                                 className=" w-full hover:bg-[#5a8488] overflow-hidden min-h-full
                       hover:h-fit hover:w-fit  h-full duration-500   border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                              >
                                 <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                    {el.menuName}
                                 </div>
                                 <div className="innerItem cursor-default cardHidden min-w-full w-max text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                    <ul className="p-2">
                                       {el.toolsName.map((el2) => (
                                          <li
                                             key={el2._id}
                                             className="my-2 hover:text-yellow-300"
                                          >
                                             <a
                                                href={el2.url}
                                                target="_blank"
                                                title={el2.url}
                                             >
                                                {el2.name}
                                             </a>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        ))}
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
