import React from 'react';
import { Feather, ArrowRight } from 'lucide-react';

const MeetTheAuthor = () => {
    return (
        <section className="relative w-full bg-gradient-to-b from-white via-[#F4F8FA] to-white py-24 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">

            {/* Background SVG Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
                <svg className="w-full h-full max-w-none opacity-81" viewBox="0 0 1280 1698" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'blur(450px)' }}>
                    <g opacity="0.81">
                        <path d="M287.322 769.503C94.2205 680.998 -129.154 689.503 -186.179 875.503C-226.8 1008 -157.786 1128.31 -54.6785 1172.5C242.846 1300 914.822 1268.5 1137.82 1047.5C1361.15 826.177 1369.82 450 1124.32 450C987.322 450 926.822 607.503 839.822 689.503C674.929 844.92 431.321 835.503 287.322 769.503Z" fill="#E4F0FD" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-30 relative z-10">

                {/* Left Side: Exact Offset Layered Polaroid Author Card with Exact Dimensions */}
                <div className="relative mx-auto" style={{ width: '328.83px', height: '483.18px' }}>

                    {/* Back Layer */}
                    <div
                        className="absolute top-[10px] left-[10px] w-full h-full bg-[#131F37] shadow-xl"
                        style={{ borderWidth: '0.84px', borderStyle: 'solid', borderColor: '#263653' }}
                    />

                    {/* Main Card */}
                    <div
                        className="relative z-10 bg-[#0F172A] p-[7px] shadow-2xl w-full h-full flex flex-col justify-between"
                        style={{ borderWidth: '0.84px', borderStyle: 'solid', borderColor: '#263653' }}
                    >

                        {/* Portrait Container with Exact Inner Dimensions */}
                        <div
                            className="overflow-hidden mx-auto"
                            style={{ width: '313.73px', height: '418.31px', borderWidth: '0.84px', borderStyle: 'solid', borderColor: '#263653' }}
                        >
                            <img
                                src="/auth.png"
                                alt="Andrew D. Levine"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>

                        {/* Bottom Content */}
                        <div className="text-center pb-1 pt-3">
                            <h3 className="font-['Cormorant_Garamond',_serif] text-[#F8FAFC] font-bold text-[15.1px] leading-[23.49px] tracking-[0%] text-center">
                                Andrew D. Levine
                            </h3>

                            <p className="font-['Plus_Jakarta_Sans',_sans-serif] text-[#94A3B8] font-normal text-[8.39px] leading-[12.58px] tracking-[0.84px] text-center uppercase mt-1">
                                Acclaimed Author & Crime Journalist
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col flex-1">

                    {/* Subtitle with Icon */}
                    <div className="flex items-center gap-2 mb-4">
                        <Feather className="w-4 h-4 text-[#5588CB]" />
                        <h4 className="font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[12px] leading-[16px] tracking-[2.4px] text-[#5588CB] uppercase">
                            THE AUTHOR BEHIND THE MYSTERIES
                        </h4>
                    </div>

                    {/* Main Headings */}
                    <h2 className="font-['Cormorant_Garamond',_serif] font-bold text-[48px] leading-[50px] tracking-[-1.2px] text-black mb-6">
                        Stories Rooted in India.<br />
                        Expertise Behind the Crime.
                    </h2>

                    {/* Italic Quote */}
                    <p className="font-['Cormorant_Garamond',_serif] font-medium italic text-[20px] leading-[28px] tracking-[0%] text-[#195AB0] mb-6">
                        I wanted to write stories rooted in the atmospheric pulse of India — where ancient tradition collides with high-stakes modern ambition.
                    </p>

                    {/* Bio Description */}
                    <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[16px] leading-[26px] tracking-[0%] text-[#3E4143] mb-8 max-w-xl">
                        Andrew D. Levine brings four decades of financial expertise to the Kabir Joshi & Ananya Rao mystery series, blending authentic financial investigation with the atmosphere of Mumbai and Delhi.
                    </p>

                    {/* Call to Action Link / Button */}
                    <div>
                        <a
                            href="#author-bio"
                            className="inline-flex items-center gap-3 font-['Cormorant_Garamond',_serif] font-semibold text-[18.82px] leading-[25.09px] tracking-[1.88px] text-[#000000] uppercase pb-2 border-b-2 border-[#000000]hover:text-[#5588CB] hover:border-[#5588CB] transition-colors group"
                        >
                            MEET THE AUTHOR
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MeetTheAuthor;