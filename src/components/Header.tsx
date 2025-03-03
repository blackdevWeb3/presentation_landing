// import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo_1.png"; // Adjust the path if necessary

// import useOutsideDetector from "../hooks/dropdown";
import { useRef, useState } from "react";
const Header: React.FC = () => {
  const tmp: any = useRef(null);
  const [isOpen, setIsOpen]: any = useState(0);
  return (
    <header className="fixed top-0 w-full bg-[#FFFFFF17] border-b border-b-[#FFFFFF78] z-10 backdrop-blur-[5px] flex justify-between p-[30px] pb-[20px]">
      <div className=" opacity-70 md:opacity-100 w-[60px] flex justify-center items-center">
        <img className="w-full" src={logo} alt="TAR Logo" />
      </div>
      {/* Navigation */}
      <div className="text-center">
        <nav className="hidden md:flex text-sm justify-center gap-[32px]">
          <a href="#" className="text-[#ffffff] hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-[#ffffff] hover:text-gray-300">
            Grow
          </a>
          <a href="#" className="text-[#ffffff] hover:text-gray-300">
            Markets
          </a>
          <a href="#" className="text-[#ffffff] hover:text-gray-300">
            Business
          </a>
          <a href="#" className="text-[#ffffff] hover:text-gray-300">
            Support
          </a>
        </nav>
        {/*Mobile responsive*/}
        <div className=" md:hidden">
          <IoMenu
            className="text-gray-300 text-[40px]"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } absolute  top-full w-1/2 bg-black transition duration-2000 ease-in-out`}
        ref={tmp}
      >
        <div className="text-[1rem] text-white text-center  border-b border-b-white py-2 hover:bg-slate-700">
          Home
        </div>
        <div className="text-[1rem] text-white text-center  border-b border-b-white py-2 hover:bg-slate-700">
          Grow
        </div>
        <div className="text-[1rem] text-white text-center  border-b border-b-white py-2 hover:bg-slate-700">
          Markets
        </div>
        <div className="text-[1rem] text-white text-center  border-b border-b-white py-2 hover:bg-slate-700">
          Business
        </div>
        <div className="text-[1rem] text-white text-center  border-b border-b-white py-2 hover:bg-slate-700">
          Support
        </div>
      </div>
    </header>
  );
};

export default Header;
