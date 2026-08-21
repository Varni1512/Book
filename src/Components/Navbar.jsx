import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative w-full max-w-[1446px] bg-white backdrop-blur-md rounded-[20px] md:rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 px-4 md:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between mx-auto z-50">
            <div className="flex items-center justify-between w-full md:w-auto">
                {/* Logo */}
                <img
                    src="/logo.webp"
                    alt="Logo"
                    className="w-[60px] h-[48px] md:w-[70px] md:h-[56px] object-contain"
                />

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden p-2 text-gray-700 hover:text-[#5588CB] focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Links */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 md:gap-8 font-['Inter',_sans-serif] text-[18px] font-normal leading-[100%] tracking-[0%] text-gray-700 mt-6 md:mt-0 pb-4 md:pb-0`}>
                <a href="#books" className="hover:text-[#5588CB] transition-colors" onClick={() => setIsMenuOpen(false)}>Books</a>
                <a href="#about" className="hover:text-[#5588CB] transition-colors" onClick={() => setIsMenuOpen(false)}>AboutAuthor</a>
                <a href="#review" className="hover:text-[#5588CB] transition-colors" onClick={() => setIsMenuOpen(false)}>Review</a>
                <a href="#contact" className="hover:text-[#5588CB] transition-colors" onClick={() => setIsMenuOpen(false)}>contact</a>
                
                {/* CTA Button (Mobile only inside menu, Desktop it's outside) */}
                <button className="md:hidden bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[11px] tracking-wider uppercase w-full max-w-[200px] h-[36px] rounded-[7px] shadow-xs transition-colors mt-2">
                    BOOK A CALL
                </button>
            </div>

            {/* CTA Button (Desktop) */}
            <button className="hidden md:block bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[11px] tracking-wider uppercase w-[134px] h-[36px] rounded-[7px] shadow-xs transition-colors">
                BOOK A CALL
            </button>
        </nav>
    );
};

export default Navbar;