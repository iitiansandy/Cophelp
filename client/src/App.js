import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import Tags from "./components/layouts/Tags";

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
   return (
      <div>
         <Header />
         <Hero />
         <section>
            <div className="flex w-full">
               <div className="flex-1 bg-blue-500 flex justify-end pe-12">
                  <div className="bg-yellow-500 w-12">hello jaan</div>
               </div>
               <div className="flex-1 bg-green-500">hello</div>
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

         <Footer/>
      </div>
   );
}

export default App;
