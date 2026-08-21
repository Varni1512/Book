import React from 'react';

const MysteryCTA = () => {
  return (
    <section className="relative w-full bg-white py-28 sm:py-30 px-4 flex justify-center items-center overflow-hidden">
      
      {/* Background Glow Element */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '930px',
          height: '399px',
          backgroundColor: '#5C8DCC1F',
          borderRadius: '16777200px',
          filter: 'blur(130px)',
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="font-['Cormorant_Garamond',_serif] font-medium text-[60px] leading-[60px] tracking-[-0.9px] text-gray-900 mb-6">
          Your Next Mystery <br /> Awaits.
        </h2>
        
        {/* Subheading - Updated to Inter */}
        <p className="font-['Inter',_sans-serif] font-normal text-[16px] leading-[26.4px] tracking-[-0.32px] text-gray-700 mb-10 max-w-lg">
          Explore the Kabir Joshi & Ananya Rao mystery series.
        </p>
        
        {/* Call to Action Button - Updated to Inter */}
        <button className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Inter',_sans-serif] font-semibold text-[12px] leading-[16px] tracking-[1.92px] uppercase py-3.5 px-8 rounded-md transition-colors flex items-center justify-center gap-2">
          Choose Your Book
          {/* Simple right arrow icon */}
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default MysteryCTA;