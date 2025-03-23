"use client"
import Image from "next/image"
import { useState } from "react"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const Header = () => {
    const [focus, setFocus] = useState(true)
    function onFocusButton(e) { setFocus(e.target.id) };
    
    const classFocus = " bg-Primary-500 text-white "
    return (

        <header className="bg-white">
           
            <div className="mx-auto ">
                <div className="flex items-center justify-between py-5 px-5 md:px-10 lg:px-24 xl:px-48 shadow-sm ">
                    <div className="md:flex md:items-center md:gap-12">
                        <Image src={"/logo.svg"} width={50} height={50} alt="Logo" />
                    </div>
  
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-5 text-sm ">

                                <li>
                                    <a onClick={e => onFocusButton(e)} id={"0"} className={`transition  hover:shadow-md font-bold  px-6 py-4 rounded-md 
                                         ${focus == "0" ? classFocus : "text-Primary "}`} href="#"> Home </a>
                                </li>
  
                                <li>
                                    <a onClick={e => onFocusButton(e)} id={"1"} className={`transition  hover:shadow-md   font-bold px-6 py-4 rounded-md 
                                         ${focus == "1" ? classFocus : "text-Primary "}`} href="/"> Store </a>
                                </li>
  
                            </ul>
                        </nav>
                    </div>
  
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md hover:bg-Primary-500 hover:text-white transition-colors duration-100 font-bold px-5 py-2.5 text-sm  text-Primary border-2 border-Primary"
                                href="#"
                            >
                                Login
                            </a>
  
                            <div className="hidden sm:flex ">
                                <Image src={"/cart.svg"} width={23} height={25} alt="cart"/>
                            </div>
                        </div>
  
                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header
