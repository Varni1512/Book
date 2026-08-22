import React, { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aakanksha",
    headline: "A Gripping Debut – Unputdownable Thriller",
    date: "Reviewed in India on 12 July 2025",
    body: "Great work by the author on this debut novel! The story was gripping and intense from start to finish. It was so engaging that I ended up reading it all in one go — a rare feat for me. The author has shown remarkable care in developing the characters, making each one feel real and essential to the story. For a first novel, this was impressively executed, and I’m definitely looking forward to what comes next from this promising new voice in the thriller genre.",
    bgColor: "bg-[#EAF4E8]", // Light Green
  },
  {
    id: 2,
    name: "Vishnu",
    headline: "A Suspenseful Mystery with Heart, Soul, and Monsoon Atmosphere",
    date: "Reviewed in India on 2 September 2025",
    body: "Death in the Rain by Andrew D. Levine is a gripping mystery set against the monsoon-soaked streets of Mumbai. The story combines tense investigation, political intrigue, and emotional depth, making the city itself feel like a living character. Kabir Joshi, a sharp yet disillusioned journalist, and Ananya Rao, a determined police inspector, form a dynamic duo whose partnership is as compelling as the case they pursue.\n\nWhat makes this book stand out is not just the suspenseful murder plot but also the atmosphere and emotional weight woven through every chapter. The rain mirrors grief, corruption, and renewal, while the characters grapple with guilt, love, and redemption. Levine delivers more than just a crime story—he creates an immersive experience that’s both thrilling and deeply moving. A powerful, atmospheric mystery with heart, this is a must-read for fans of layered, character-driven thrillers.",
    bgColor: "bg-[#F0F1FA]", // Light Purple
  },
  {
    id: 3,
    name: "lijo jose",
    headline: "Best in class",
    date: "Reviewed in India on 8 June 2025",
    body: "This author's outstanding debut paves the way for a bright future in thriller writing, with Death in the Rain being a shining example. Kabir Joshi is a captivating and complex protagonist, boasting sharp instincts, unwavering determination, and a nuanced vulnerability. The dynamic between Kabir and Detective Inspector Ananya Rao brings a rich layer of depth to the narrative, masterfully balancing emotional resonance with razor-sharp investigative expertise.",
    bgColor: "bg-[#E4F4FD]", // Light Blue
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 overflow-hidden bg-white">
      
      {/* Section Heading */}
      <div id="review" className="flex flex-col items-center text-center mb-8 px-4 scroll-mt-10">
        <h2 className="text-[#5588CB] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[10.78px] tracking-[2.69px] uppercase mb-2">
          Reader Reviews
        </h2>
        <h1 className="font-['Cormorant_Garamond',_serif] font-bold text-4xl md:text-[43px] tracking-[-1px] text-black">
          What Readers Are Saying
        </h1>
      </div>

      {/* Increased min-height to ensure enough space for the longest review */}
      <div className="relative w-full min-h-[700px] md:min-h-[550px] flex items-center justify-center">

        {/* Cards */}
        {testimonials.map((testimonial, index) => {
          let offset = index - currentIndex;
          if (offset === 2) offset = -1;
          if (offset === -2) offset = 1;

          let transformStyle = "translate-x-0 opacity-100 z-10"; // Center Active Card
          if (offset === -1) transformStyle = "-translate-x-[105%] opacity-100 z-0"; // Left Card
          if (offset === 1) transformStyle = "translate-x-[105%] opacity-100 z-0"; // Right Card

          const isExpanded = expandedId === testimonial.id;
          const isLong = testimonial.body.length > 470;
          const displayText = (isLong && !isExpanded) ? testimonial.body.substring(0, 470) + '...' : testimonial.body;

          return (
            <div
              key={testimonial.id}
              className={`absolute w-[88vw] md:w-[92vw] lg:w-[85vw] max-w-[1200px] ${isExpanded ? 'h-auto py-12 md:py-16' : 'h-[650px] sm:h-[600px] md:h-[480px] py-8'} ${testimonial.bgColor} rounded-[20px] md:rounded-[60px] px-6 sm:px-8 md:px-16 lg:px-32 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out ${transformStyle}`}
            >

              <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Headline & Date (Stars removed from here) */}
                <h3 className="text-gray-900 font-['Inter',_sans-serif] font-semibold text-[18px] md:text-[20px] mb-2">
                  {testimonial.headline}
                </h3>
                <p className="text-gray-500 font-['Inter',_sans-serif] text-[13px] md:text-[15px] mb-8">
                  {testimonial.date}
                </p>

                {/* Body Text */}
                <div className="text-gray-700 font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[15.1px] leading-[24.53px] tracking-[0%] text-center space-y-4">
                  {displayText.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {isLong && (
                    <button 
                      onClick={() => setExpandedId(isExpanded ? null : testimonial.id)}
                      className="text-[#5588CB] font-bold text-sm hover:underline mt-2 cursor-pointer"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>

                {/* Bottom Section: Stars + User Info */}
                <div className="mt-10 flex flex-col items-center gap-4">

                  {/* 5 Stars Array Moved Here */}
                  <div className="flex items-center gap-1 text-[#F5C518]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-200 shadow-sm shrink-0 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="font-['Cormorant_Garamond',_serif] text-[22px] font-bold text-gray-900">
                      {testimonial.name}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default TestimonialSlider;