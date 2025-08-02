import React, { useState } from "react";
import { Menu } from "lucide-react";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className=" z-999999 absolute backdrop-blur-md  border-white/50 w-full flex items-center justify-between bg-white/10 h-20 scale-105 shadow-sm shadow-white">
        <div className="ml-10">
          <button
            type="button"
            className="px-1 text-yellow-500 border-2 border-yellow-500 rounded-[5rem] shadow-[0px_2px_0px_0px_rgb(0,0,0))] hover:shadow-[-4px_4px_2px_0px_rgb(0,0,0))] hover:scale-110"
          >
            Why us?
          </button>
        </div>
        <div className="mr-10 text-yellow-500">
          <input type="checkbox" id="menunav" className="hidden peer" />
          <label
            htmlFor="menunav"
            className="min-w-[5.75rem] shadow-[0px_2px_0px_0px_rgb(0,0,0))] hover:shadow-[-4px_4px_2px_0px_rgb(0,0,0))] hover:scale-110 flex justify-end border-2 border-yellow-500 rounded-[5rem]"
          >
            <p>Menu</p>
            <Menu className="mx-1 text-[.5rem]" />
          </label>
          <div className="hidden peer-checked:flex absolute top-[5rem] right-0 mr-2 text-white z-50">
            <nav className="p-2 w-[40vw] h-[calc(100vh-5rem)] contain-content bg-yellow-500">
              <div className="menuwrapper relative w-full h-full">
                <div className="topmenu flex flex-col  bg-yellow-500 menu group">
                    <h1 className="relative right-25 -bottom-5">About Us</h1>
                </div>
                <div className="secondmenu  flex flex-col bg-yellow-500 menu">
                  <h1 className="relative right-28 -bottom-5">Services</h1>
                </div>
                <div className="thirdmenu bg-yellow-500 menu">
                  <h1 className="relative right-25 -bottom-5">Products</h1>
                </div>
                <div className="fourthmenu bg-yellow-500 menu ">
                  <h1 className="relative right-25 -bottom-5">Products</h1>
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
