import React from 'react';

const BlogInsights = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-4 sm:px-8  font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          {/* Left Side Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#5588CB] font-['Inter',_sans-serif] font-bold text-[12px] tracking-[2px] uppercase">
              Blog & Insights
            </h2>
            <h1 className="font-['Cormorant_Garamond',_serif] font-medium text-[40px] leading-[44px] tracking-[-1px] text-[#000000]">
              Stories Beyond the Mystery
            </h1>
          </div>
          
          {/* Right Side Description */}
          <p className="text-[#3E4143] font-['Inter',_sans-serif] text-[15px] leading-[24px] text-left max-w-lg pb-1">
            Go beyond the books with stories, travel reflections, writing insights, <br className="hidden sm:block" />
            and perspectives from the world behind Blue Latitude Books
          </p>
        </div>

        {/* Top Divider */}
        <hr className="border-t-[0.89px] border-gray-200 mb-12" />

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-[50px] xl:gap-[29px]">
          
          {/* Left Column (Large Featured Article) */}
          <div className="flex flex-col gap-6 w-full lg:w-[425.78px] shrink-0">
            
            {/* Exact dimensions applied to the left image */}
            <div className="w-full lg:w-[425.78px] h-[296.24px] overflow-hidden bg-gray-100 shrink-0 rounded-sm">
              <img 
                src="/b1.png" 
                alt="Between Silence and Stone" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              {/* Title */}
              <h3 className="font-['Cormorant_Garamond',_serif] font-bold text-[32.32px] leading-[35px] tracking-[-0.81px] text-[#000000]">
                Between Silence and Stone: An Egyptian Journey
              </h3>
              
              {/* Description */}
              <p className="font-['Cormorant_Garamond',_serif] font-normal text-[14px] leading-[16.16px] text-[#3E4143] pt-1">
                Andrew D. Levine reflects on Egypt beyond sightseeing — exploring how travel, 
                unfamiliar places, and moments of discomfort can reshape the way we see the world 
                and inspire new stories.
              </p>
              
              {/* Button */}
              <button className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.08px] leading-[10.77px] tracking-[0.4px] uppercase py-2.5 px-5 rounded-md transition-colors w-max mt-2 flex items-center justify-center">
                Read Essay
              </button>
            </div>
          </div>

          {/* Right Column (Stacked Articles) */}
          <div className="flex flex-col gap-[29px] flex-1">
            
            {/* Top Right Article */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Exact dimensions applied here */}
              <div className="w-full sm:w-[286.82px] h-[239.69px] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                <img 
                  src="/b2.png" 
                  alt="Quito and the Galápagos" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="font-['Cormorant_Garamond',_serif] font-bold text-[32.32px] leading-[35px] tracking-[-0.81px] text-[#000000]">
                  Quito and the Galápagos: A Personal Travelogue
                </h3>
                
                {/* Description */}
                <p className="font-['Cormorant_Garamond',_serif] font-normal text-[14px] leading-[16.16px] text-[#3E4143] pt-1">
                  A journey from the streets of Quito to the volcanic landscapes of the 
                  Galápagos — filled with wildlife, discovery, and reflections on what it 
                  means to experience a world still shaped by nature.
                </p>
                
                {/* Button */}
                <button className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.08px] leading-[10.77px] tracking-[0.4px] uppercase py-2.5 px-5 rounded-md transition-colors w-max mt-2 flex items-center justify-center">
                  Read Essay
                </button>
              </div>
            </div>

            {/* Bottom Right Article */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Exact dimensions applied here */}
              <div className="w-full sm:w-[286.82px] h-[239.69px] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                <img 
                  src="/b3.png" 
                  alt="What Makes Indian Noir Different" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="font-['Cormorant_Garamond',_serif] font-bold text-[32.32px] leading-[35px] tracking-[-0.81px] text-[#000000]">
                  What Makes Indian Noir Different?
                </h3>
                
                {/* Description */}
                <p className="font-['Cormorant_Garamond',_serif] font-normal text-[14px] leading-[16.16px] text-[#3E4143] pt-1">
                  From Mumbai's crowded streets to Delhi's hidden corridors, Indian noir 
                  blends crime, corruption, culture and moral ambiguity into stories where 
                  the city itself becomes part of the mystery.
                </p>
                
                {/* Button */}
                <button className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.08px] leading-[10.77px] tracking-[0.4px] uppercase py-2.5 px-5 rounded-md transition-colors w-max mt-2 flex items-center justify-center">
                  Read Article
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogInsights;