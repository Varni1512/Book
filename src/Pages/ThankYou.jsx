import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Home, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ThankYou = () => {
  const location = useLocation();
  const orderDetails = location.state || {};

  // Add no-index meta tag to prevent search engine indexing
  useEffect(() => {
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

    // Page title
    const prevTitle = document.title;
    document.title = 'Order Confirmation | Blue Latitude Books';

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
      <main className="flex-grow flex items-center justify-center px-4 sm:px-8 py-8 md:py-12">
        <div className="w-full max-w-2xl bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] text-center flex flex-col items-center">
          
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 animate-in zoom-in duration-300" />
          </div>

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F4F8FA] border border-[#5588CB]/30 text-[#5588CB] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            Request Submitted Successfully
          </div>

          {/* Heading */}
          <h1 className="font-['Cormorant_Garamond',_serif] text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-[-1px] mb-4">
            Thank You for Ordering!
          </h1>

          {/* Description */}
          <p className="text-[#3E4143] font-['Plus_Jakarta_Sans',_sans-serif] text-base md:text-lg max-w-lg leading-relaxed mb-8">
            Your request has been received. Our India team will connect with you soon to confirm your order and delivery details.
          </p>

          {/* Optional Order Summary Card */}
          {orderDetails.bookTitle && (
            <div className="w-full bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-5 mb-8 text-left">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Order Summary
              </h3>
              <div className="flex justify-between items-center py-1.5 border-b border-gray-200/60 text-sm">
                <span className="text-gray-600">Book:</span>
                <span className="font-semibold text-gray-900">{orderDetails.bookTitle}</span>
              </div>
              {orderDetails.language && (
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200/60 text-sm">
                  <span className="text-gray-600">Edition / Language:</span>
                  <span className="font-semibold text-gray-900 capitalize">{orderDetails.language} (Paperback)</span>
                </div>
              )}
              {orderDetails.price && (
                <div className="flex justify-between items-center pt-2 text-sm">
                  <span className="text-gray-600">Estimated Price:</span>
                  <span className="font-bold text-[#5588CB] text-base">₹{orderDetails.price}</span>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Go Back to Home Button */}
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5588CB] hover:bg-[#4572ad] text-white font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              Go Back to Home
            </Link>

            {/* Explore Blog / Books */}
            <Link
              to="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-200 transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-[#5588CB]" />
              Read Our Blog
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ThankYou;
