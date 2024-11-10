import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";


function Header() {
    return (
        <header className="bg-[#A29875] h-auto w-full text-[#FFFFFF] flex flex-col md:flex-row justify-between items-center px-4 md:px-9 py-4 space-y-4 md:space-y-0">
            {/* Logo */}
            <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[60px] pt-2 md:pt-0">
                MANZZARI
            </h1>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-xs md:max-w-md mx-4 md:mx-6 shadow-sm">
                <input
                    type="text"
                    placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                    className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-[#A29875] text-gray-600 placeholder-gray-500"
                    aria-label="Search"
                />
                <IoIosSearch className="text-gray-500 text-xl ml-2" aria-label="Search icon" />
            </div>

            {/* Icons */}
            <div className="flex justify-center space-x-6 items-center mt-2 md:mt-0">
                <CiHeart className="text-3xl md:text-4xl text-white" aria-label="Wishlist" />
                <RiContactsLine className="text-3xl md:text-4xl text-white" aria-label="Contact" />
                <IoCartOutline className="text-3xl md:text-4xl text-white" aria-label="Cart" />
            </div>
        </header>
    );
}

export default Header;