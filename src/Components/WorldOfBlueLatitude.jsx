import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorldOfBlueLatitude = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] pt-10 lg:pt-20 font-sans z-0 border border-[#5588CB1A]">

      {/* Absolute Light Blue Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[400px] bg-gradient-to-b from-[#F8FAFC] to-[#EBF2F8] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-12 md:pb-24">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Left Header */}
          <div className="flex flex-col gap-2 md:w-1/2">
            <h2 className="text-[#5588CB] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10.78px] leading-[14.37px] tracking-[2.69px] uppercase">
              The World of Blue Latitude
            </h2>
            <h1 className="font-['Cormorant_Garamond',_serif] font-bold text-4xl md:text-[43.11px] leading-tight md:leading-[43.11px] tracking-[-1.08px] text-black mt-2 md:mt-0">
              Crime Is Only the Beginning.
            </h1>
          </div>

          {/* Right Description */}
          <div className="md:w-1/2 flex md:justify-end">
            <p className="text-[#3E4143] font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[14.37px] leading-[23.35px] max-w-md">
              From Mumbai's rain-soaked streets to Delhi's bureaucratic corridors, every mystery follows the trail where money, power and people intersect.
            </p>
          </div>
        </div>

        {/* Top Divider */}
        <hr className="border-t border-[#5588CB33] mb-12" />

        {/* 4-Column Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-x-8 gap-y-12 mb-20">

          {/* Column 1 */}
          <div className="flex flex-col justify-between h-full bg-transparent">
            <div className="flex flex-col">
              <div className="w-8 h-[2px] bg-[#5588CB] mb-4"></div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[28px] text-[#5588CB] mb-4">01</h3>
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-medium text-[12px] leading-[18px] text-[#5B6B7F]">
                These aren't ordinary murder mysteries. Financial trails, hidden transactions and forensic details often lead Kabir Joshi closer to the truth.
              </p>
            </div>
            {/* Added min-h to lock the footer height uniformly */}
            <div className="border-t-[0.9px] border-[#1D293D] pt-3 mt-8 min-h-[50px] flex items-start">
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.45px] text-[#62748E] uppercase">
                Death in the Rain · Bombay Reckless
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-between h-full bg-transparent">
            <div className="flex flex-col">
              <div className="w-8 h-[2px] bg-[#5588CB] mb-4"></div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[28px] text-[#5588CB] mb-4">02</h3>
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-medium text-[12px] leading-[18px] text-[#5B6B7F]">
                The cities are more than settings. Mumbai brings the monsoon, ambition and financial intrigue; Delhi brings bureaucracy, institutions and hidden networks.
              </p>
            </div>
            <div className="border-t-[0.9px] border-[#1D293D] pt-3 mt-8 min-h-[50px] flex items-start">
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.45px] text-[#62748E] uppercase">
                Mumbai → Delhi
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-between h-full bg-transparent">
            <div className="flex flex-col">
              <div className="w-8 h-[2px] bg-[#5588CB] mb-4"></div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[28px] text-[#5588CB] mb-4">03</h3>
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-medium text-[12px] leading-[18px] text-[#5B6B7F]">
                Behind every investigation are institutions, signatures, money and people with something to hide. The danger isn't always on the street.
              </p>
            </div>
            <div className="border-t-[0.9px] border-[#1D293D] pt-3 mt-8 min-h-[50px] flex items-start">
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.45px] text-[#62748E] uppercase">
                Death in the Rain · Bombay Reckless · Silent Auction Murder · The Lily Network 
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-between h-full bg-transparent">
            <div className="flex flex-col">
              <div className="w-8 h-[2px] bg-[#5588CB] mb-4"></div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[28px] text-[#5588CB] mb-4">04</h3>
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-medium text-[12px] leading-[18px] text-[#5B6B7F]">
                Follow investigative journalist Kabir Joshi and Ananya Rao as each case reveals another layer of crime, corruption and institutional power.
              </p>
            </div>
            <div className="border-t-[0.9px] border-[#1D293D] pt-3 mt-8 min-h-[50px] flex items-start">
              <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.45px] text-[#62748E] uppercase">
                4 Books · 2 Cities · 1 Expanding Mystery
              </p>
            </div>
          </div>

        </div>

        {/* Featured Book Card */}
        <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 lg:p-12 -mt-10 lg:-mt-0 flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">

          {/* Book Image */}
          <div className="w-full max-w-[200px] md:max-w-[320px] mx-auto shrink-0">
            <img
              src="/rain.webp"
              alt="Death in the Rain Book Cover"
              className="w-full h-auto object-cover rounded-md shadow-xl"
            />
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-center flex-1">
            <h2 className="font-['Cormorant_Garamond',_serif] text-[36px] md:text-[50px] font-bold text-gray-900 leading-tight mb-4 uppercase tracking-wide">
              Death In The Rain
            </h2>
            <p className="font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[15.1px] leading-[24.53px] tracking-[0%] text-[#3E4143] mb-8 max-w-xl">
              A Mumbai crime thriller where a trail of money leads journalist Kabir Joshi into the city's most powerful institutions. Now available in Hindi.
            </p>

            {/* Pricing / Format Box */}
            <div className="border border-gray-200 rounded-4xl p-4 mb-8 relative">
              <h4 className="text-[#FFBA00] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[12.61px] leading-[16.81px] tracking-[0.63px] uppercase mb-4">
                Available In Hindi Version
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                {/* Format 2 */}
                <div className="flex flex-col border border-gray-200 rounded-4xl p-4">
                  <span className="font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10.51px] leading-[14px] tracking-[0%] text-black uppercase mb-2">
                    Kindle Edition
                  </span>

                  <span className="font-['Plus_Jakarta_Sans',_sans-serif] font-extrabold text-[14.71px] leading-[21.01px] tracking-[0%] text-gray-900">
                    ₹150
                  </span>

                  <span className="font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[10.51px] leading-[14px] tracking-[0%] text-[#495565] mt-2">
                    Instant Digital Download
                  </span>
                </div>

                {/* Format 3 */}
                <div className="flex flex-col border border-gray-200 rounded-4xl p-4">
                  <span className="font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10.51px] leading-[14px] tracking-[0%] text-black uppercase mb-2">
                    Paperback Edition
                  </span>

                  <span className="font-['Plus_Jakarta_Sans',_sans-serif] font-extrabold text-[14.71px] leading-[21.01px] tracking-[0%] text-gray-900">
                    ₹300
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/form" state={{ bookId: 1 }} className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Inter',_sans-serif] font-semibold text-[12px] uppercase tracking-wider py-4 px-6 rounded-[8.4px] transition-colors flex items-center justify-center gap-2">
                Get The Hindi Edition
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link to="/form" state={{ bookId: 1 }} className="bg-[#1a202c] hover:bg-[#131F37] cursor-pointer text-white font-['Inter',_sans-serif] font-semibold text-[12px] uppercase tracking-wider py-4 px-6 rounded-[8.4px] transition-colors flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4 text-[#5588CB]" />
                Order Your Copy
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorldOfBlueLatitude;