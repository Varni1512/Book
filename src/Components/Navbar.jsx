import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full max-w-[1446px] bg-white backdrop-blur-md rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 px-8 py-3.5 flex items-center justify-between mx-auto">
            {/* Logo */}
            <img
                src="/logo.png"
                alt="Logo"
                className="w-[70px] h-[56px] object-contain"
            />

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 font-['Inter',_sans-serif] text-[18px] font-normal leading-[100%] tracking-[0%] text-gray-700">
                <a href="#books" className="hover:text-[#5588CB] transition-colors">Books</a>
                <a href="#about" className="hover:text-[#5588CB] transition-colors">AboutAuthor</a>
                <a href="#review" className="hover:text-[#5588CB] transition-colors">Review</a>
                <a href="#contact" className="hover:text-[#5588CB] transition-colors">contact</a>
            </div>

            {/* CTA Button */}
            <button className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[11px] tracking-wider uppercase w-[134px] h-[36px] rounded-[7px] shadow-xs transition-colors">
                BOOK A CALL
            </button>
        </nav>
    );
};

export default Navbar;