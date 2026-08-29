import React, { useState } from 'react';
import { Feather, ArrowRight } from 'lucide-react';

const MeetTheAuthor = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative w-full bg-gradient-to-b from-white via-[#F4F8FA] to-white py-10 lg:py-24 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">

            {/* Background SVG Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
                <svg className="w-full h-full max-w-none opacity-81" viewBox="0 0 1280 1698" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'blur(450px)' }}>
                    <g opacity="0.81">
                        <path d="M287.322 769.503C94.2205 680.998 -129.154 689.503 -186.179 875.503C-226.8 1008 -157.786 1128.31 -54.6785 1172.5C242.846 1300 914.822 1268.5 1137.82 1047.5C1361.15 826.177 1369.82 450 1124.32 450C987.322 450 926.822 607.503 839.822 689.503C674.929 844.92 431.321 835.503 287.322 769.503Z" fill="#E4F0FD" />
                    </g>
                </svg>
            </div>

            <div id="about" className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-30 relative z-10 scroll-mt-10">

                {/* Left Side: Exact Offset Layered Polaroid Author Card with Exact Dimensions */}
                <div className="relative mx-auto" style={{ width: '100%', maxWidth: '328.83px', aspectRatio: '328.83 / 483.18' }}>

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
                                src="/auth.webp"
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
                                Author of Indian Crime Fiction
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
                    <h2 className="font-['Cormorant_Garamond',_serif] font-bold text-4xl md:text-[48px] leading-tight md:leading-[50px] tracking-[-1.2px] text-black mb-6">
                        Stories Rooted in India.<br className="hidden md:block" />
                        Expertise Behind the Crime.
                    </h2>

                    {/* Italic Quote */}
                    <p className="font-['Cormorant_Garamond',_serif] font-medium italic text-[20px] leading-[28px] tracking-[0%] text-[#195AB0] mb-6">
                        I wanted to write stories rooted in the atmospheric pulse of India — where ancient tradition collides with high-stakes modern ambition.
                    </p>

                    {/* Bio Description */}
                    <div className="font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[16px] leading-[26px] tracking-[0%] text-[#3E4143] mb-8 max-w-xl space-y-4">
                        <p>Andrew D. Levine is an American crime novelist whose Kabir Joshi & Ananya Rao Mystery Series is set in modern India.</p>
                        <p>His connection with India began long before he started writing the series. Through repeated travels across the country, Levine became fascinated not only by India's history and famous places, but by its everyday life—the crowded streets, railway stations, cafés, markets, offices, neighbourhoods and conversations that give each Indian city its own character.</p>
                        <p>Before becoming a novelist, Levine spent 40 years as a Certified Public Accountant in New York. That experience gave him an unusual foundation for writing crime fiction. He understands how money moves, how businesses hide problems, how financial records can expose secrets, and why following a paper trail can sometimes be as dangerous as following a killer.</p>
                        
                        {isExpanded && (
                            <>
                                <p>That world became part of the lives of Kabir Joshi and Ananya Rao.</p>
                                <p>Kabir is an independent investigative journalist who keeps asking questions when powerful people would prefer him to stop. Ananya begins the series as a Mumbai police detective—practical, observant and experienced in the realities of the Indian system. Together, they investigate crimes involving murder, money, political influence, corporate power and corruption.</p>
                                <p>But the books are also about India.</p>
                                <p>Each mystery takes readers into a different Indian city and allows that city to become part of the story. Mumbai's monsoon streets, Delhi's corridors of power, Udaipur's palaces and old neighbourhoods, and Kolkata's distinctive history and culture are not simply backgrounds. They help shape the mysteries themselves.</p>
                                <p>Levine writes for readers who enjoy a strong mystery but also want characters they can follow from one book to the next. Kabir and Ananya argue, laugh, share meals and chai, make mistakes and gradually come to depend upon each other as the cases become more dangerous.</p>
                                <p>The series begins in Mumbai with Death in the Rain, where the suspicious death of a powerful political figure leads Kabir and Ananya into a trail of money and influence that some people will do anything to keep hidden.</p>
                                <p className="font-semibold text-black">For Andrew D. Levine, the central idea behind the series is simple:</p>
                                <p className="italic text-[#195AB0] text-[18px]">Money leaves a trail. Kabir and Ananya follow it.</p>
                            </>
                        )}

                        <div>
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)} 
                                className="text-[#5588CB] font-semibold text-[14px] hover:underline focus:outline-none"
                            >
                                {isExpanded ? "Read Less" : "Read  More"}
                            </button>
                        </div>
                    </div>

                    {/* Call to Action Link / Button */}
                    <div>
                        <a
                            href="#books"
                            className="inline-flex items-center gap-3 bg-[#5588CB] text-white px-6 py-3 rounded-[7px] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[13px] tracking-wider uppercase hover:bg-[#4875b3] transition-colors shadow-md group"
                        >
                            START THE SERIES / BUY DEATH IN THE RAIN
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MeetTheAuthor;