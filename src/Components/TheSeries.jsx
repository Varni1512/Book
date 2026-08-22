import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const booksData = [
    {
        id: "01",
        title: "DEATH IN THE RAIN",
        genre: "Crime Fiction / Mumbai Noir",
        location: "Mumbai",
        badge: "HINDI AVAILABLE",
        badgeColor: "bg-[#852E1D]",
        description: "A body discovered in a waterlogged monsoon alley exposes an intricate paper trail of financial fraud and...",
        image: "/book1.webp",
        cardBg: "bg-[#E2E7F5B2]", // Light theme for Card 2
        textColor: "text-gray-900",
        descColor: "text-[#3E4143]",
        borderColor: "border-[#5588CB1F]"
    },
    {
        id: "02",
        title: "BOMBAY RECKLESS",
        genre: "Crime Fiction",
        location: "Mumbai · Prequel",
        badge: null,
        description: "The gripping prequel revealing Kabir Joshi's early years, unravelling insider trading rings and dangerous stock...",
        image: "/book2.webp",
        cardBg: "bg-[#E2E7F5B2]", // Light theme for Card 2
        textColor: "text-gray-900",
        descColor: "text-[#3E4143]",
        borderColor: "border-[#5588CB1F]"
    },
    {
        id: "03",
        title: "SILENT AUCTION MURDER",
        genre: "Conspiracy Thriller",
        location: "Mumbai",
        badge: null,
        description: "When an antique masterpiece conceals political kickbacks and offshore...",
        image: "/book3.webp",
        cardBg: "bg-[#E2E7F5B2]", // Light theme for Card 2
        textColor: "text-gray-900",
        descColor: "text-[#3E4143]",
        borderColor: "border-[#5588CB1F]"
    },
    {
        id: "04",
        title: "THE LILY NETWORK",
        genre: "Conspiracy Thriller",
        location: "Delhi",
        badge: "NEW RELEASE : KINDLE FREE",
        badgeColor: "bg-[#852E1D]",
        description: "A clinic intake form. A missing informant. A paper trail through Delhi's most dangerous institutions and political...",
        image: "/book4.webp",
        cardBg: "bg-[#E2E7F5B2]", // Light theme for Card 4
        textColor: "text-gray-900",
        descColor: "text-[#3E4143]",
        borderColor: "border-[#5588CB1F]"
    }
];

const TheSeries = () => {
    return (
        <section className="w-full bg-white py-10 lg:py-24 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-[1300px] mx-auto">

                {/* Section Header */}
                <div id="books" className="flex flex-col items-center text-center mb-16 scroll-mt-10">
                    <h2 className="text-[#5588CB] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[12px] leading-[16px] tracking-[3px] text-center uppercase mb-2">
                        THE SERIES
                    </h2>
                    <p className="font-['Cormorant_Garamond',_serif] font-bold text-3xl md:text-[48px] leading-tight md:leading-[60px] tracking-[-1.2px] text-center mb-2">
                        The Kabir Joshi & Ananya Rao Mystery Series
                    </p>
                    <p className="text-[#6B7280] font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[16px] leading-[26px] tracking-[0%]">
                        Four mysteries. Different cities. One expanding trail of secrets.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {booksData.map((book) => (
                        <div
                            key={book.id}
                            className={`relative ${book.cardBg} rounded-[28px] p-6 flex flex-col justify-between border ${book.borderColor} shadow-[0_10px_30px_rgba(0,0,0,0.06)]`}
                        >
                            {/* Optional Top Badge */}
                            {book.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <span
                                        className={`${book.badgeColor} text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10px] leading-[15px] tracking-[0.5px] uppercase h-[34px] px-4 rounded-[16777200px] shadow-sm whitespace-nowrap inline-flex items-center justify-center gap-2`}
                                    >
                                        {book.id === "01" && (
                                            <svg width="12" height="14" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_2266_2536)"> <path d="M8.00641 7.11328H6.31869C6.1215 7.11328 5.93239 7.19161 5.79296 7.33104C5.65353 7.47048 5.5752 7.65959 5.5752 7.85677V9.54449" stroke="white" strokeWidth="0.743333" strokeLinecap="round" strokeLinejoin="round" /> <path d="M2.60156 2.7793V3.39626C2.60156 3.69198 2.71904 3.97558 2.92814 4.18469C3.13724 4.39379 3.42085 4.51126 3.71656 4.51126C3.91371 4.51126 4.10278 4.58958 4.24218 4.72898C4.38158 4.86838 4.4599 5.05745 4.4599 5.2546C4.4599 5.66343 4.7944 5.99793 5.20323 5.99793C5.40037 5.99793 5.58944 5.91961 5.72885 5.78021C5.86825 5.64081 5.94656 5.45174 5.94656 5.2546C5.94656 4.84576 6.28106 4.51126 6.6899 4.51126H7.86808" stroke="white" strokeWidth="0.743333" strokeLinecap="round" strokeLinejoin="round" /> <path d="M4.08908 9.69768V8.22929C4.08908 8.0321 4.01075 7.843 3.87132 7.70356C3.73189 7.56413 3.54278 7.4858 3.34559 7.4858C3.1484 7.4858 2.9593 7.40747 2.81986 7.26804C2.68043 7.12861 2.6021 6.9395 2.6021 6.74231V6.37057C2.6021 6.17338 2.52377 5.98427 2.38434 5.84484C2.24491 5.70541 2.0558 5.62708 1.85861 5.62708H0.761963" stroke="white" strokeWidth="0.743333" strokeLinecap="round" strokeLinejoin="round" /> <path d="M4.45983 9.71458C6.51249 9.71458 8.1765 8.05058 8.1765 5.99792C8.1765 3.94526 6.51249 2.28125 4.45983 2.28125C2.40717 2.28125 0.743164 3.94526 0.743164 5.99792C0.743164 8.05058 2.40717 9.71458 4.45983 9.71458Z" stroke="white" strokeWidth="0.743333" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_2266_2536"> <rect width="8.92" height="11.9975" fill="white" /> </clipPath> </defs> </svg>
                                        )}

                                        {book.badge}
                                    </span>
                                </div>
                            )}

                            {/* Top Content (Book Image & Meta) */}
                            <div className="flex flex-col">

                                {/* Book Cover Image */}
                                <div className="w-full flex items-center justify-center my-3 overflow-hidden">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-[194.457px] h-[291.693px] object-contain rounded-[1.72px] drop-shadow-md"
                                    />
                                </div>

                                {/* Book Number and Location Header */}
                                <div className="flex items-center justify-between mt-1 mb-2">
                                    <span className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[12px] leading-[16px] tracking-[0%] text-[#5588CB]">
                                        BOOK {book.id}
                                    </span>
                                    <span className="bg-[#111C38] text-white font-['Plus_Jakarta_Sans',_sans-serif] font-medium text-[12px] leading-[16px] tracking-[0%] px-2.5 py-1 rounded-md uppercase">
                                        {book.location}
                                    </span>
                                </div>

                                {/* Book Title */}
                                <h3 className={`font-['Cormorant_Garamond',_serif] font-bold text-[24px] leading-[33px] tracking-[-0.6px] ${book.textColor} uppercase mb-1`}>
                                    {book.title}
                                </h3>

                                {/* Genre */}
                                <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-medium text-[12px] leading-[16px] tracking-[0%] text-[#5588CB] mb-3">
                                    {book.genre}
                                </p>

                                {/* Description */}
                                <p className={`font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[12px] leading-[19.5px] tracking-[0%] ${book.descColor} mb-6`}>
                                    {book.description}
                                </p>
                            </div>

                            {/* Get Book Button */}
                            <Link
                                to="/form"
                                state={{ bookId: parseInt(book.id, 10) }}
                                className="w-full bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10.5px] uppercase tracking-[1px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm mt-auto"
                            >
                                <ShoppingBag className="w-3.5 h-3.5" />
                                GET BOOK
                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TheSeries;