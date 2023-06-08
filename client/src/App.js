import { useEffect, useState } from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import Tags from "./components/layouts/Tags";
import { AiFillCaretRight } from "react-icons/ai";
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

function App() {
   const [menus, setMenus] = useState([]);
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
      getAllMenu();
   }, []);

   return (
      <div>
         <Header />
         <Hero />
         <section id="service">
            <div className="flex justify-center items-center bg-black">
               <div className="box-border justify-center py-[50px] sm:py-[150px] text-white">
                  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                     <div className="grid justify-items-center gap-3 gap-y-5  sm:grid-cols-2 grid-cols-1 order-2 sm:order-2 md:order-2 lg:order-2 xl:order-1">
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 0 && (
                              <div className="cardForContent w-[300px] cursor-pointer  h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                                 <div
                                    className=" w-full hover:bg-[#5a8488]  min-h-full
                    hover:h-fit hover:w-fit   h-full duration-500 relative  border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                                 >
                                    <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                       {menus[0].menuName}
                                    </div>
                                    <div className="innerItem cardHidden hover:block cursor-default h-fit  min-w-full w-max max-w-[350px] rounded-b-2xl  text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                       <ul className="p-2 capitalize">
                                          {menus[0].toolsName.map((el) => (
                                             <>
                                                {el.submenu ? (
                                                   <li
                                                      key={el._id}
                                                      className="py-2 flex items-center relative group"
                                                   >
                                                      <div className="flex justify-between  items-center w-full">
                                                         {el.submenu}
                                                         <AiFillCaretRight className=" group-hover:rotate-90 duration-300" />
                                                      </div>
                                                      <div className="absolute border-2 hidden hiddenInnerItem mt-8 z-50 top-0 ms-12 rounded-md  w-full p-2 bg-black  group-hover:block">
                                                         {el.toolsName.map(
                                                            (
                                                               innerEl,
                                                               innerIdx
                                                            ) => (
                                                               <ul>
                                                                  <li className=" hover:text-blue-300 text-white py-2">
                                                                     <a
                                                                        key={`${innerIdx}_innerLinks_1`}
                                                                        href={
                                                                           innerEl.url
                                                                        }
                                                                        target="_blank"
                                                                        title={
                                                                           innerEl.url
                                                                        }
                                                                     >
                                                                        {
                                                                           innerEl.name
                                                                        }
                                                                        asfdjasfh
                                                                        adsfadskfhasdkfhkfd
                                                                     </a>
                                                                  </li>
                                                               </ul>
                                                            )
                                                         )}
                                                      </div>
                                                   </li>
                                                ) : (
                                                   <li
                                                      key={el._id}
                                                      className="my-2 hover:text-yellow-300 flex"
                                                   >
                                                      <a
                                                         href={el.url}
                                                         target="_blank"
                                                         title={el.url}
                                                         className="block"
                                                      >
                                                         {el.name}
                                                      </a>
                                                   </li>
                                                )}
                                             </>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 1 && (
                              <div className="cardForContent w-[300px] cursor-pointer  h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                                 <div
                                    className=" w-full hover:bg-[#5a8488]  min-h-full
                    hover:h-fit hover:w-fit   h-full duration-500 relative  border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                                 >
                                    <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                       {menus[1].menuName}
                                    </div>
                                    <div className="innerItem cardHidden hover:block cursor-default h-fit  min-w-full w-max max-w-[350px] rounded-b-2xl  text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                       <ul className="p-2 capitalize">
                                          {menus[1].toolsName.map((el) => (
                                             <>
                                                {el.submenu ? (
                                                   <li
                                                      key={el._id}
                                                      className="py-2 flex items-center relative group"
                                                   >
                                                      <div className="flex justify-between  items-center w-full">
                                                         {el.submenu}
                                                         <AiFillCaretRight className=" group-hover:rotate-90 duration-300" />
                                                      </div>
                                                      <div className="absolute border-2 hidden hiddenInnerItem mt-8 z-50 top-0 ms-12 rounded-md  w-full p-2 bg-black  group-hover:block">
                                                         {el.toolsName.map(
                                                            (
                                                               innerEl,
                                                               innerIdx
                                                            ) => (
                                                               <ul>
                                                                  <li className=" hover:text-blue-300 text-white py-2">
                                                                     <a
                                                                        key={`${innerIdx}_innerLinks_1`}
                                                                        href={
                                                                           innerEl.url
                                                                        }
                                                                        target="_blank"
                                                                        title={
                                                                           innerEl.url
                                                                        }
                                                                     >
                                                                        {
                                                                           innerEl.name
                                                                        }
                                                                        asfdjasfh
                                                                        adsfadskfhasdkfhkfd
                                                                     </a>
                                                                  </li>
                                                               </ul>
                                                            )
                                                         )}
                                                      </div>
                                                   </li>
                                                ) : (
                                                   <li
                                                      key={el._id}
                                                      className="my-2 hover:text-yellow-300 flex"
                                                   >
                                                      <a
                                                         href={el.url}
                                                         target="_blank"
                                                         title={el.url}
                                                         className="block"
                                                      >
                                                         {el.name}
                                                      </a>
                                                   </li>
                                                )}
                                             </>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 2 && (
                              <div className="cardForContent w-[300px] cursor-pointer  h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                                 <div
                                    className=" w-full hover:bg-[#5a8488]  min-h-full
                    hover:h-fit hover:w-fit   h-full duration-500 relative  border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                                 >
                                    <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                       {menus[2].menuName}
                                    </div>
                                    <div className="innerItem cardHidden hover:block cursor-default h-fit  min-w-full w-max max-w-[350px] rounded-b-2xl  text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                       <ul className="p-2 capitalize">
                                          {menus[2].toolsName.map((el) => (
                                             <>
                                                {el.submenu ? (
                                                   <li
                                                      key={el._id}
                                                      className="py-2 flex items-center relative group"
                                                   >
                                                      <div className="flex justify-between  items-center w-full">
                                                         {el.submenu}
                                                         <AiFillCaretRight className=" group-hover:rotate-90 duration-300" />
                                                      </div>
                                                      <div className="absolute border-2 hidden hiddenInnerItem mt-8 z-50 top-0 ms-12 rounded-md  w-full p-2 bg-black  group-hover:block">
                                                         {el.toolsName.map(
                                                            (
                                                               innerEl,
                                                               innerIdx
                                                            ) => (
                                                               <ul>
                                                                  <li className=" hover:text-blue-300 text-white py-2">
                                                                     <a
                                                                        key={`${innerIdx}_innerLinks_1`}
                                                                        href={
                                                                           innerEl.url
                                                                        }
                                                                        target="_blank"
                                                                        title={
                                                                           innerEl.url
                                                                        }
                                                                     >
                                                                        {
                                                                           innerEl.name
                                                                        }
                                                                        asfdjasfh
                                                                        adsfadskfhasdkfhkfd
                                                                     </a>
                                                                  </li>
                                                               </ul>
                                                            )
                                                         )}
                                                      </div>
                                                   </li>
                                                ) : (
                                                   <li
                                                      key={el._id}
                                                      className="my-2 hover:text-yellow-300 flex"
                                                   >
                                                      <a
                                                         href={el.url}
                                                         target="_blank"
                                                         title={el.url}
                                                         className="block"
                                                      >
                                                         {el.name}
                                                      </a>
                                                   </li>
                                                )}
                                             </>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="cardForContent w-[300px] cursor-pointer relative h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                           {menus.length > 3 && (
                              <div className="cardForContent w-[300px] cursor-pointer  h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] ">
                                 <div
                                    className=" w-full hover:bg-[#5a8488]  min-h-full
                       hover:h-fit hover:w-fit   h-full duration-500 relative  border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                                 >
                                    <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                       {menus[3].menuName}
                                    </div>
                                    <div className="innerItem cardHidden hover:block cursor-default h-fit  min-w-full w-max max-w-[350px] rounded-b-2xl  text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                       <ul className="p-2 capitalize">
                                          {menus[3].toolsName.map((el) => (
                                             <>
                                                {el.submenu ? (
                                                   <li
                                                      key={el._id}
                                                      className="py-2 flex items-center relative group"
                                                   >
                                                      <div className="flex justify-between  items-center w-full">
                                                         {el.submenu}
                                                         <AiFillCaretRight className=" group-hover:rotate-90 duration-300" />
                                                      </div>
                                                      <div className="absolute border-2 hidden hiddenInnerItem mt-8 z-50 top-0 ms-12 rounded-md  w-full p-2 bg-black  group-hover:block">
                                                         {el.toolsName.map(
                                                            (
                                                               innerEl,
                                                               innerIdx
                                                            ) => (
                                                               <ul>
                                                                  <li className=" hover:text-blue-300 text-white py-2">
                                                                     <a
                                                                        key={`${innerIdx}_innerLinks_1`}
                                                                        href={
                                                                           innerEl.url
                                                                        }
                                                                        target="_blank"
                                                                        title={
                                                                           innerEl.url
                                                                        }
                                                                     >
                                                                        {
                                                                           innerEl.name
                                                                        }
                                                                        asfdjasfh
                                                                        adsfadskfhasdkfhkfd
                                                                     </a>
                                                                  </li>
                                                               </ul>
                                                            )
                                                         )}
                                                      </div>
                                                   </li>
                                                ) : (
                                                   <li
                                                      key={el._id}
                                                      className="my-2 hover:text-yellow-300 flex"
                                                   >
                                                      <a
                                                         href={el.url}
                                                         target="_blank"
                                                         title={el.url}
                                                         className="block"
                                                      >
                                                         {el.name}
                                                      </a>
                                                   </li>
                                                )}
                                             </>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                     <div className="order-1 sm:order-1 md:order-1 lg:order-1 xl:order-2">
                        <div className=" sm:w-[630px] h-[100%] w-[100%] sm:col-span-2 row-span-2 sm:p-4 flex justify-center items-center">
                           <div className="flex justify-center items-start flex-col max-w-[80%] mb-8 sm:mb-0 ">
                              <h1 className="text-start text-[40px] sm:text-[60px] font-semibold my-8 leading-[40px] sm:leading-[70px] ">
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
                              className="cardForContent w-[300px] cursor-pointer  h-[300px] rounded-2xl hover:-translate-y-3 hover:z-50 duration-500 bg-[#5A848836] "
                           >
                              <div
                                 className=" w-full hover:bg-[#5a8488]  min-h-full
                       hover:h-fit hover:w-fit   h-full duration-500 relative  border border-gray-500  hover:border-white rounded-2xl bg-[url(./assets/Images/asset-06.png)] bg-no-repeat bg-cover"
                              >
                                 <div className="flex w-[300px] justify-center items-center text-center mt-10 font-semibold text-[30px] duration-500">
                                    {el.menuName}
                                 </div>
                                 <div className="innerItem cardHidden hover:block cursor-default   min-w-full w-max max-w-[350px] rounded-b-2xl  text-lg duration-500 mt-2 bg-gradient-to-tl from-[#250069] to-[#000000]">
                                    <ul className="p-2 capitalize">
                                       {el.toolsName.map((el) => (
                                          <>
                                             {el.submenu ? (
                                                <li
                                                   key={el._id}
                                                   className="py-2 flex items-center relative group"
                                                >
                                                   <div className="flex justify-between  items-center w-full ">
                                                      {el.submenu}
                                                      <AiFillCaretRight className=" group-hover:rotate-90 duration-300" />
                                                   </div>
                                                   <div className="absolute border-2 hidden hiddenInnerItem mt-8 z-50 top-0 ms-12 rounded-md  w-full p-2 bg-black  group-hover:block">
                                                      {el.toolsName.map(
                                                         (
                                                            innerEl,
                                                            innerIdx
                                                         ) => (
                                                            <ul>
                                                               <li className=" hover:text-blue-300 text-white py-2">
                                                                  <a
                                                                     key={`${innerIdx}_innerLinks_1`}
                                                                     href={
                                                                        innerEl.url
                                                                     }
                                                                     target="_blank"
                                                                     title={
                                                                        innerEl.url
                                                                     }
                                                                  >
                                                                     {
                                                                        innerEl.name
                                                                     }
                                                                     asfdjasfh
                                                                     adsfadskfhasdkfhkfd
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         )
                                                      )}
                                                   </div>
                                                </li>
                                             ) : (
                                                <li
                                                   key={el._id}
                                                   className="my-2 hover:text-yellow-300 flex"
                                                >
                                                   <a
                                                      href={el.url}
                                                      target="_blank"
                                                      title={el.url}
                                                      className="block"
                                                   >
                                                      {el.name}
                                                   </a>
                                                </li>
                                             )}
                                          </>
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
         <section className="flex justify-center py-10 px-2">
            <div className="max-w-[1200px] w-full min-h-[300px] relative bg-[#e2ff7e] rounded-[15px]">
               <div className="contrast-700 bg-[url(./assets/Images/asset-grid.png)] bg-no-repeat bg-cover opacity-[.5] top-0 left-0 absolute w-full h-full"></div>
               <div className="w-full h-full p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border">
                  <div className="box-border text-[40px] font-bold mb-4">
                     <h1 className="mt-5">
                        Cybersecurity <br /> Solutions by Industry
                     </h1>
                     <button className="text-[17px] border px-5 py-2 rounded-xl bg-black text-white font-normal">
                        Read More
                     </button>
                  </div>
                  <div className="">
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
