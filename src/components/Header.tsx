// src/components/Header.tsx
import React, {useState} from "react";
import logo from "../assets/logo.png"; // Adjust the path if necessary
import { FiMenu, FiX } from "react-icons/fi";


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    return (
        <header className=" fixed w-full bg-[#FFFFFF17] border-b-1 border-b-[#FFFFFF78] z-10 backdrop-blur-[5px]">
            <div className="flex justify-center">
                <div className="w-full max-w-[1440px]">
                    {/* Logo */}
                    <div className="h-[116px] absolute">
                        <img src={logo} alt="TAR Logo" />
                    </div>
                    {/* Navigation */}
                    <div className="text-center md:hidden py-[49px]">
                        <nav className="text-[18px] flex justify-center gap-[32px]">
                            <a href="#" className="text-[#ffffff] hover:text-gray-300">Home</a>
                            <a href="#" className="text-[#ffffff] hover:text-gray-300">Grow</a>
                            <a href="#" className="text-[#ffffff] hover:text-gray-300">Markets</a>
                            <a href="#" className="text-[#ffffff] hover:text-gray-300">Business</a>
                            <a href="#" className="text-[#ffffff] hover:text-gray-300">Support</a>
                        </nav>
                        {/*Mobile responsive*/}
                    <button
                    className="hidden md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                    </div>
                    
                    {isOpen && (
                    <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#1A1A1A] text-white text-center py-4 space-y-4">
                        <a href="#" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Grow</a>
                        <a href="#" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Markets</a>
                        <a href="#" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Business</a>
                        <a href="#" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Support</a>
                    </div>
                    )}
                </div>
            </div>
        </header>
  );
};

export default Header;
