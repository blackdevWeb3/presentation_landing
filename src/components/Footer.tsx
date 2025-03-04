// import React, { useState } from "react";
import logo from "../assets/logo_1.png"; // Adjust the path if necessary
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";

const Footer: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <>
      <div className="relative m-auto mt-8 md:mt-[49px] bg-[#FFFFFF17] border-t border-t-[#FFFFFF78] py-10 px-8">
        <div className="w-full max-w-[1440px] m-auto">
          <div className="flex justify-between">
            <div className="w-[51px] md:w-[75px]">
              <img src={logo} alt="logo" className="w-auto" />
            </div>
            <div className="flex justify-center items-center gap-[2rem]">
              <FaInstagram className="text-[22px] md:text-[2rem] text-white" />
              <LiaTelegramPlane className="text-[22px] md:text-[2rem] text-white" />
              <MdWhatsapp className="text-[22px] md:text-[2rem] text-white" />
            </div>
          </div>
          <div className="md:absolute md:left-1/2 md:top-1/4 md:-translate-x-1/2 md:text-[15px] md:leading-[25px] text-white text-center mt-4 text-[12px] leading-[20px]">
            For more details or to get started, reach out to us
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
