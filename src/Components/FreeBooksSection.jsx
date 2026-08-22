import React, { useState } from 'react';
import { addLead } from '../utils/data';

const FreeBooksSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState('Get Book 1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addLead({ name, email, choice });
      
      // EmailJS sending would go here (using template for user email)
      
      setSubmitted(true);
      setName('');
      setEmail('');
      setChoice('Get Book 1');
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#F4F8FA] py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text and Form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-[#5588CB] font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[12px] tracking-[2px] uppercase mb-4">
            Exclusive Offer
          </h2>
          <h1 className="font-['Cormorant_Garamond',_serif] font-bold text-4xl md:text-[48px] leading-tight text-gray-900 mb-6">
            Get Your Free E-Books Today
          </h1>
          <p className="font-['Plus_Jakarta_Sans',_sans-serif] text-gray-600 text-[16px] leading-[26px] mb-8">
            Dive into the gripping world of the Kabir Joshi & Ananya Rao mystery series. Choose your free e-book below, and we'll send it directly to your inbox.
          </p>

          {submitted ? (
            <div className="bg-[#EAF4E8] text-green-800 p-6 rounded-2xl border border-green-200">
              <h3 className="font-bold text-lg mb-2">Success!</h3>
              <p>Your request has been received. Please check your email for the e-book.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold underline text-green-700 hover:text-green-900 cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name</label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5588CB] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5588CB] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Choose Your Book</label>
                <select 
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5588CB] focus:border-transparent cursor-pointer transition-all appearance-none"
                >
                  <option value="Get Book 1">Get Book 1: Quito, the Galápagos, and the Journey Between Them</option>
                  <option value="Get Book 2">Get Book 2: Between Silence and Stone</option>
                  <option value="Get Both Books">Get Both Books</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-semibold text-xs tracking-widest uppercase py-4 rounded-xl transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get the E-Book'}
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Images */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[400px] sm:h-[500px]">
          {/* Background decoration */}
          <div className="absolute w-[300px] h-[300px] bg-[#5588CB]/10 rounded-full blur-[80px]"></div>
          
          <div className="relative w-full max-w-[400px] aspect-square flex justify-center items-center group">
            {/* Book 1 (Back) */}
            <img 
              src="/f2.webp" 
              alt="Death in the Rain" 
              className="absolute z-10 w-[170px] sm:w-[210px] rounded-md shadow-[-10px_15px_30px_rgba(0,0,0,0.25)] border border-gray-200/20 transform -rotate-12 -translate-x-10 sm:-translate-x-14 origin-bottom transition-all duration-500 ease-out group-hover:-translate-x-20 sm:group-hover:-translate-x-28 group-hover:-rotate-[15deg] group-hover:scale-105"
            />
            {/* Book 2 (Front) */}
            <img 
              src="/f1.webp" 
              alt="Bombay Reckless" 
              className="absolute z-20 w-[190px] sm:w-[230px] rounded-md shadow-[10px_20px_40px_rgba(0,0,0,0.35)] border border-gray-200/20 transform rotate-6 translate-x-10 sm:translate-x-14 translate-y-8 sm:translate-y-12 transition-all duration-500 ease-out group-hover:translate-x-16 sm:group-hover:translate-x-24 group-hover:rotate-[10deg] group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeBooksSection;
