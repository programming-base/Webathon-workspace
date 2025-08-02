import React, { useState } from "react";
import { ArrowRight, Menu,X } from "lucide-react";
const NavBar = () => {
  const [ischecked, setIsChecked] = useState(false);
  return (
    <>
      <header className=" z-999999 sticky top-0 left-0 backdrop-blur-md  border-white/50 w-full flex items-center justify-between bg-white/10 h-20 scale-105 shadow-sm shadow-white">
        <div className="ml-10">
          <button
            type="button" onClick={()=>{document.getElementById('whyus').scrollIntoView({behavior:'smooth'})}}
            className="px-1 hover:cursor-pointer hover:scale-110 text-yellow-500 border-2 border-yellow-500 rounded-[5rem] shadow-[0px_2px_0px_0px_rgb(0,0,0))] hover:shadow-[-4px_4px_2px_0px_rgb(0,0,0))]"
          >
            Why us?
          </button>
        </div>
        <div className="  mr-10 text-yellow-500">
          <input type="checkbox" checked={ischecked} id="menunav" className="hidden peer" />
          <label
            htmlFor="menunav" onClick={() => setIsChecked(!ischecked)}
            className="min-w-[5.75rem] hover:cursor-pointer shadow-[0px_2px_0px_0px_rgb(0,0,0))] hover:shadow-[-4px_4px_2px_0px_rgb(0,0,0))] hover:scale-110 flex justify-end border-2 border-yellow-500 rounded-[5rem]"
          >
            <p>Menu</p>
            <Menu className="mx-1 text-[.5rem]"/>
          </label>
          <div className="hidden  cursor-pointer peer-checked:flex absolute top-[1rem] right-6 max-md:right-0 mr-2 text-white z-50">
            <nav className="p-2 w-[40vw] max-md:w-[95vw] h-[calc((((100vh-5rem)*3)/4))]  contain-content rounded bg-yellow-500 border-2 border-yellow-500">
            <div onClick={() => setIsChecked(!ischecked)} className="my-3 flex justify-end">
              <span id="close" className="min-w-[5.75rem] px-4 mx-4 flex  bg-blue-900 border-2 border-black rounded-[5rem] text-center shadow-[0px_2px_0px_0px_rgb(0,0,0))] hover:shadow-[-4px_4px_2px_0px_rgb(0,0,0))] hover:scale-110 hover:cursor-pointer">Close <X/></span>
            </div>
              <div className="menuwrapper relative w-full h-full">
                <div onClick={() => {document.getElementById('aboutus')?.scrollIntoView({behavior:'smooth'});setIsChecked(false)}} className="group topmenu flex flex-col text-white bg-yellow-500 menu group">
                    <span className="absolute top-0 right-0 m-4 border-2 border-black rounded-[5rem] bg-blue-900 hover:bg-yellow-500 group-hover:bg-yellow-500 hover:shadow-[0px_2px_0px_0px_rgb(0,0,0))]"><ArrowRight /></span>
                    <h1 className="relative left-0 -bottom-5 text-start">About Us</h1>
                </div>
                <div onClick={() => {document.getElementById('team')?.scrollIntoView({behavior:'smooth'}); setIsChecked(false)}} className="group secondmenu  flex flex-col bg-yellow-500 menu">
                  <span className="absolute top-0 right-0 m-4 border-2 border-black rounded-[5rem] bg-blue-900 hover:bg-yellow-500 group-hover:bg-yellow-500  hover:shadow-[0px_2px_0px_0px_rgb(0,0,0))]"><ArrowRight /></span>
                  <h1 className="relative left-0 text-white -bottom-5 text-start">Team</h1>
                </div>
                <div onClick={()=>{document.getElementById('whyus')?.scrollIntoView({behavior:'smooth'}); setIsChecked(false)}} className="group thirdmenu bg-yellow-500 menu">
                  <span className="absolute top-0 right-0 m-4 border-2 border-black rounded-[5rem] bg-blue-900 hover:bg-yellow-500 group-hover:bg-yellow-500  hover:shadow-[0px_2px_0px_0px_rgb(0,0,0))]"><ArrowRight /></span>
                  <h1 className="relative left-0 text-white -bottom-5 text-start">Why us?</h1>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
