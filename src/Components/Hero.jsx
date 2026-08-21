import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <section className="relative w-full bg-white pt-6 pb-10 px-4 sm:px-8 overflow-hidden font-sans">

            {/* Background with Balanced Soft Checks */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-center">
                <svg
                    className="w-full h-full min-w-[1280px] min-h-[900px] object-cover"
                    viewBox="0 0 1280 1122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMin slice"
                >
                    <g filter="url(#filter0_f_2150_769)">
                        <ellipse cx="612" cy="77" rx="640" ry="545" fill="#E0EAF4" />
                    </g>
                    <path
                        d="M0.249883 -427V839M40.1607 -427V839M80.0718 -427V839M119.983 -427V839M159.894 -427V839M199.804 -427V839M239.715 -427V839M279.626 -427V839M319.537 -427V839M359.448 -427V839M399.359 -427V839M439.27 -427V839M479.181 -427V839M519.092 -427V839M559.003 -427V839M598.914 -427V839M638.824 -427V839M678.735 -427V839M718.646 -427V839M758.557 -427V839M798.468 -427V839M838.379 -427V839M878.29 -427V839M918.201 -427V839M958.112 -427V839M998.023 -427V839M1037.93 -427V839M1077.84 -427V839M1117.76 -427V839M1157.67 -427V839M1197.58 -427V839M1237.49 -427V839M1280 -426.737L0 -426.737M1280 -384.737L0 -384.737M1280 -342.737L0 -342.737M1280 -300.737L0 -300.737M1280 -258.737L0 -258.737M1280 -216.737L0 -216.737M1280 -174.737L0 -174.737M1280 -132.737L0 -132.737M1280 -90.7367L0 -90.7368M1280 -48.737L0 -48.7371M1280 -6.73686L0 -6.73695M1280 35.2631L0 35.263M1280 77.263L0 77.2629M1280 119.263L0 119.263M1280 161.263L0 161.263M1280 203.263L0 203.263M1280 245.263L0 245.263M1280 287.263L0 287.263M1280 329.263L0 329.263M1280 371.263L0 371.263M1280 413.263L0 413.263M1280 455.263L0 455.263M1280 497.263L0 497.263M1280 539.263L0 539.263M1280 581.263L0 581.263M1280 623.263H0M1280 665.263H0M1280 707.263H0M1280 749.263H0M1280 791.263H0M1280 833.263H0"
                        stroke="url(#paint0_linear_2150_769)"
                        strokeOpacity="0.06"
                        strokeWidth="1"
                    />
                    <defs>
                        <filter id="filter0_f_2150_769" x="-528" y="-968" width="2280" height="2090" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_2150_769" />
                        </filter>
                        <linearGradient id="paint0_linear_2150_769" x1="640" y1="457.5" x2="640" y2="839" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3399FF" />
                            <stop offset="1" stopColor="#001224" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="w-full max-w-[1340px] mx-auto relative z-10 flex flex-col items-center">

                {/* Navbar Component */}
                <div className="w-full mb-16">
                    <Navbar />
                </div>

                {/* Hero Main Content */}
                <div className="text-center max-w-4xl pt-4">
                    <div className="inline-block mb-5">
                        <span className="border border-[#A2C9FD] backdrop-blur-sm text-[#0088FF] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] text-center uppercase px-4 py-1.5 rounded-full shadow-xs">
                            INDIA EDITION · INDIAN NOIR MYSTERIES
                        </span>
                    </div>

                    <h1 className="font-['Playfair_Display',_serif] font-semibold text-[62px] leading-[65px] tracking-[-1.8px] text-black text-center mb-6">
                        Discover Modern India <br />
                        <span className="text-[52px]">
                            Through
                        </span>{" "}
                        <span className="text-[#0088FF] italic text-[62px]">
                            Crime Fiction
                        </span>
                    </h1>

                    <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[16px] leading-[29.25px] tracking-[0%] text-[#343E49] text-center max-w-xl mx-auto mb-14">
                        Explore the Kabir Joshi & Ananya Rao mystery series — where financial crime, corruption and urban suspense unfold across Mumbai and Delhi.
                    </p>

                    {/* 4 Books Showcase Row with Exact Figma Specs */}
                    <div className="flex flex-wrap lg:flex-nowrap items-end justify-center gap-8 lg:gap-10 mb-12 w-full">

                        {/* 1st Book: -17.07 deg (Width: 166.69px, Height: 250.04px, Radius: 1.48px) */}
                        <div className="flex flex-col items-center" style={{ transform: 'rotate(-17.07deg)' }}>
                            <span className="bg-[#131F37] text-[#D4AF37] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.3px] leading-[12.42px] tracking-[0.41px] text-center uppercase px-2.5 py-1 rounded-full mb-2 shadow-sm">
                                HINDI AVAILABLE
                            </span>
                            <img
                                src="/book1.webp"
                                alt="Death in the Rain"
                                style={{
                                    width: '166.69px',
                                    height: '250.04px',
                                    borderRadius: '1.48px',
                                    opacity: 1
                                }}
                                className="object-cover drop-shadow-xl"
                            />
                            <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[13.56px] leading-[17.53px] tracking-[0%] text-center text-[#5588CB] -mt-6 rotate-[-.05deg]">
                                Kindle ₹145 · PB ₹300
                            </p>
                        </div>

                        {/* 2nd Book: -6.59 deg (Width: 186.06px, Height: 279.10px, Radius: 1.65px) */}
                        <div className="flex flex-col items-center" style={{ transform: 'rotate(-6.59deg)' }}>
                            <span className="bg-[#131F37E5] text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.8px] leading-[13.23px] tracking-[0.44px] text-center uppercase px-2.5 py-1 rounded-full mb-3 shadow-sm">
                                BOOK 2 · ENGLISH
                            </span>
                            <img
                                src="/book2.webp"
                                alt="Bombay Reckless"
                                style={{
                                    width: '186.06px',
                                    height: '279.10px',
                                    borderRadius: '1.65px',
                                    opacity: 1
                                }}
                                className="object-cover drop-shadow-xl"
                            />
                            <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[13.56px] leading-[17.53px] tracking-[0%] text-center text-[#5588CB] mt-2 rotate-[-.05deg]">
                                Kindle ₹145 · PB ₹300
                            </p>
                        </div>

                        {/* 3rd Book: 1.17 deg (Width: 215.08px, Height: 322.63px, Radius: 1.91px) */}
                        <div className="flex flex-col items-center" style={{ transform: 'rotate(1.17deg)' }}>
                            <span className="bg-[#5588CB] text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[11.5px] leading-[17.25px] tracking-[1.15px] text-center uppercase px-2.5 py-1 rounded-full mb-2 shadow-sm">
                                ✨ NEW RELEASE · BOOK 4
                            </span>
                            <img
                                src="/book4.webp"
                                alt="The Lily Network"
                                style={{
                                    width: '215.08px',
                                    height: '322.63px',
                                    borderRadius: '1.91px',
                                    opacity: 1
                                }}
                                className="object-cover drop-shadow-xl"
                            />
                            <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[14.03px] leading-[21.13px] tracking-[0%] text-center text-[#5588CB] mt-3">
                                KU Free · Kindle ₹150* · PB ₹600
                            </p>
                        </div>

                        {/* 4th Book: 16.2 deg (Width: 173.64px, Height: 260.46px, Radius: 1.54px) */}
                        <div className="flex flex-col items-center" style={{ transform: 'rotate(16.2deg)' }}>
                            <span className="bg-[#131F37E5] text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.5px] leading-[12.69px] tracking-[0.42px] text-center uppercase px-2.5 py-1 rounded-full mb-2 shadow-sm ml-10">
                                BOOK 3 · ENGLISH
                            </span>
                            <img
                                src="/book3.webp"
                                alt="Silent Auction Murder"
                                style={{
                                    width: '173.64px',
                                    height: '260.46px',
                                    borderRadius: '1.54px',
                                    opacity: 1
                                }}
                                className="object-cover drop-shadow-xl ml-10"
                            />
                            <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[13.56px] leading-[17.53px] tracking-[0%] text-center -mt-6 text-[#5588CB] rotate-[-.05deg] ml-9">
                                Kindle ₹145 · PB ₹300
                            </p>
                        </div>

                    </div>

                    <div>
                        <button className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10px] leading-[15px] tracking-[0.5px] uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                            Available in English · हिंदी EDITION AVAILABLE
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;