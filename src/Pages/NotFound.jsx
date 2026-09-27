import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, BookOpen } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const NotFound = () => {
  useEffect(() => {
    // Add noindex for 404 page
    let metaRobots = document.querySelector('meta[name="robots"]');
    let created = false;

    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
      created = true;
    }

    const previousContent = metaRobots.getAttribute('content');
    metaRobots.setAttribute('content', 'noindex, nofollow');

    const prevTitle = document.title;
    document.title = '404 - Page Not Found | Blue Latitude Books';

    return () => {
      document.title = prevTitle;
      if (created && metaRobots.parentNode) {
        metaRobots.parentNode.removeChild(metaRobots);
      } else if (previousContent) {
        metaRobots.setAttribute('content', previousContent);
      } else {
        metaRobots.removeAttribute('content');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans flex flex-col justify-between">
      {/* Navbar Section */}
      <div className="w-full pt-6 px-4 sm:px-8 mb-6 md:mb-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-8 py-8 md:py-16">
        <div className="w-full max-w-xl bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] text-center flex flex-col items-center">
          
          <div className="w-20 h-20 rounded-full bg-[#5588CB]/10 border border-[#5588CB]/20 flex items-center justify-center mb-6">
            <Search className="w-9 h-9 text-[#5588CB]" />
          </div>

          <div className="text-xs font-bold text-[#5588CB] uppercase tracking-widest mb-2 bg-[#F4F8FA] px-3.5 py-1 rounded-full border border-[#5588CB]/20">
            Error 404
          </div>

          <h1 className="font-['Cormorant_Garamond',_serif] text-4xl sm:text-5xl font-bold text-black tracking-[-1px] mb-3">
            Page Not Found
          </h1>

          <p className="text-[#3E4143] font-['Plus_Jakarta_Sans',_sans-serif] text-sm sm:text-base max-w-md leading-relaxed mb-8">
            The page you are looking for doesn't exist, has been moved, or the URL might be mistyped.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5588CB] hover:bg-[#4875b3] text-white font-['Inter',_sans-serif] font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all shadow-sm"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-['Inter',_sans-serif] font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Visit Blog
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <div className="w-full mt-auto pt-8">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
