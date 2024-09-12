import React, { useState } from "react";
import { yamaha_logo } from "../assets/images";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); //

        console.log(isMenuOpen);
    };

    return (
        <nav className="shadow-md w-full fixed top-0 left-0 z-20  ">
            <div className="md:flex items-center justify-between bg-[#174893] md:bg-opacity-[92%] py-1 md:px-10 px-7">
                <div className="h-16 md:h-20">
                    <img src={yamaha_logo} className="h-16 md:h-20 " alt="yamaha" />
                </div>
                <div onClick={toggleMenu} className="absolute right-4 md:hidden top-6">
                    {!isMenuOpen?   
                    <TfiMenuAlt className="cursor-pointer text-white text-3xl hover:text-slate-200"/> :  
                    <IoMdClose className="cursor-pointer text-white text-3xl hover:text-slate-200"/>}
                </div>
                <ul className={`w-full left-0 md:bg-transparent bg-white md:w-auto md:z-auto z-[-1] md:static absolute md:flex md:items-center md:flex-row flex-col items-center gap-[1vw] transition-all md:transition-none duration-300 ease-in ${isMenuOpen ? 'top-[72px]' : 'top-[-490px]'}`}>
                    <li className="md:hover:-translate-y-2 duration-300">
                        <a
                            href="#"
                            className="block pl-4 py-2 md:text-white font-semibold md:hover:text-slate-100 text-slate-600 md:hover:bg-transparent hover:text-white hover:bg-[#3f444b] hover:transition-all hover:duration-500 tracking-wide "
                        >
                            HOME
                        </a>
                    </li>
                    <li className="md:hover:-translate-y-2 duration-300">
                        <a
                            href="#"
                            className="block pl-4  py-2 md:text-white font-semibold md:hover:text-slate-100 text-slate-600 md:hover:bg-transparent hover:text-white hover:bg-[#3f444b] hover:transition-all hover:duration-300 "
                        >
                            ABOUT US
                        </a>
                    </li>
                    <li className="md:hover:-translate-y-2  duration-300">
                        <a
                            href="#"
                            className="block pl-4  py-2 md:text-white font-semibold md:hover:text-slate-100 text-slate-600 md:hover:bg-transparent hover:text-white hover:bg-[#3f444b] hover:transition-all hover:duration-300 "
                        >
                            PRODUCTS
                        </a>
                    </li>
                    <li className="md:hover:-translate-y-2  duration-300">
                        <a
                            href="#"
                            className="block pl-4 py-2 md:text-white font-semibold md:hover:text-slate-100 text-slate-600 md:hover:bg-transparent hover:text-white hover:bg-[#3f444b] hover:transition-all hover:duration-300 "
                        >
                            NEWS
                        </a>
                    </li>
                    <li className="md:hover:-translate-y-2  duration-300">
                        <a
                            href="#"
                            className=" block pl-4 py-2 md:text-white font-semibold md:hover:text-slate-100 text-slate-600 md:hover:bg-transparent hover:text-white hover:bg-[#3f444b] hover:transition-all hover:duration-300 "
                        >
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
