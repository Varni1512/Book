import React from 'react';

const ComingSoon = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#EBF2F8] via-[#F4F8FA] to-white py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* Center Wrapper */}
      <div className="relative flex flex-col items-center justify-center w-full mt-10 mb-12">
        
        {/* Book Container - Texts are now positioned relative to this specific box */}
        <div className="relative z-10 w-[200px] sm:w-[250px] md:w-[320px]">
          
          {/* Floating "Coming..." Text (Top Left) */}
          <h2 className="absolute -top-10 -left-22 md:-top-12 md:-left-40 -rotate-[35deg] font-['Playfair_Display',_serif] italic font-bold text-[55px] md:text-[85.07px] leading-[1.1] md:leading-[95.7px] tracking-[-0.01em] text-[#CAD5E2] z-[-1] select-none pointer-events-none">
            Coming...
          </h2>

          {/* Book Image */}
          <img 
            src="/book.webp" 
            alt="The Udaipur Conspiracy - Coming Soon" 
            className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
          />

          {/* Floating "Soon..." Text (Bottom Right) */}
          <h2 className="absolute -bottom-1 -right-16 md:bottom-2 md:-right-26 -rotate-[35deg] font-['Playfair_Display',_serif] italic font-bold text-[55px] md:text-[85.07px] leading-[1.1] md:leading-[95.7px] tracking-[-0.01em] text-[#CAD5E2] z-[-1] select-none pointer-events-none">
            Soon...
          </h2>
          
        </div>
        
      </div>

      {/* Bottom Description Text */}
      <div className="px-4 text-center z-10 relative mt-4 md:mt-8">
        <p className="font-['Cormorant_Garamond',_serif] font-normal text-[16px] md:text-[20.39px] md:leading-[24.85px] tracking-[0px] align-middle text-black">
          Coming later this year — another Kabir Joshi & Ananya Rao mystery is on the way.
        </p>
      </div>
      
    </section>
  );
};

export default ComingSoon;