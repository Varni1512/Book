import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingBag, User, Mail, MapPin, Phone, ArrowRight, Book, Tablet, Loader2 } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { addFormSubmission } from '../utils/data';
import emailjs from '@emailjs/browser';

const Form = () => {
  const location = useLocation();
  const initialBookId = location.state?.bookId || 1;
  const [selectedBook, setSelectedBook] = useState(initialBookId);
  const [language, setLanguage] = useState('english');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const books = [
    { id: 1, title: 'DEATH IN THE RAIN', location: 'Mumbai', badge: 'हिंदी Avail.', englishPrice: 750, hindiPrice: 650 },
    { id: 2, title: 'BOMBAY RECKLESS', location: 'Mumbai', price: 300 },
    { id: 3, title: 'SILENT AUCTION MURDER', location: 'Mumbai', price: 599 },
    { id: 4, title: 'THE LILY NETWORK', location: 'Delhi', price: 499 },
  ];

  const selectedBookData = books.find(b => b.id === selectedBook);
  let currentPrice = selectedBookData?.price || 300;
  if (selectedBook === 1) {
    currentPrice = language === 'hindi' ? selectedBookData?.hindiPrice : selectedBookData?.englishPrice;
  }
  const finalPrice = currentPrice;

  useEffect(() => {
    if (selectedBook !== 1 && language === 'hindi') {
      setLanguage('english');
    }
  }, [selectedBook, language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Save to Database (Firestore logic will be in utils/data.js)
      await addFormSubmission({
        name,
        email,
        city,
        phone,
        bookTitle: selectedBookData?.title,
        language,
        format: 'paperback',
        price: finalPrice
      });

      // 2. Send Email to Admin via EmailJS
      const templateParams = {
        name: name,
        email: email,
        bookTitle: selectedBookData?.title,
        format: 'Paperback Edition',
        language: language,
        city: city,
        phone: phone,
        price: finalPrice
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 3. Send Order Confirmation Email to User
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_ADMIN_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_USER_ORDER_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_ADMIN_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (userEmailError) {
        console.error("Error sending user confirmation email:", userEmailError);
      }

      alert('Your request has been submitted successfully! Our India team will contact you soon.');
      setName('');
      setEmail('');
      setCity('');
      setPhone('');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans flex flex-col">
      
      {/* Navbar Section */}
      <div className="w-full pt-6 px-4 sm:px-8 mb-8 md:mb-12">
        <Navbar />
      </div>

      <div className="w-full px-4 sm:px-8 pb-16 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-white border border-[#5588CB]/30 text-[#5588CB] text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 mb-6 uppercase tracking-wider shadow-sm">
            <ShoppingBag className="w-3.5 h-3.5" />
            DIRECT INDIA ORDERS & INQUIRIES
          </div>
          <h1 className="font-['Cormorant_Garamond',_serif] text-5xl md:text-6xl font-bold mb-4 text-black tracking-[-1px]">
            REQUEST YOUR COPY
          </h1>
          <p className="text-[#3E4143] max-w-lg font-['Plus_Jakarta_Sans',_sans-serif] text-sm md:text-base leading-relaxed">
            Send us your request and our India team will get in touch with you to confirm your order and delivery details.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-10 w-full max-w-4xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          
          {/* 1. Select Book */}
          <div className="mb-10">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">1. SELECT BOOK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {books.map((book) => (
                <div 
                  key={book.id}
                  onClick={() => setSelectedBook(book.id)}
                  className={`relative cursor-pointer p-4 rounded-2xl border transition-all ${selectedBook === book.id ? 'bg-[#F4F8FA] border-[#5588CB] shadow-sm' : 'bg-white border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="text-[10px] text-[#5588CB] font-bold uppercase mb-1 tracking-wider">BOOK {book.id}</div>
                  <h3 className="font-['Cormorant_Garamond',_serif] text-lg font-bold leading-tight mb-1 text-black">{book.title}</h3>
                  <p className="text-xs text-[#64748B]">{book.location}</p>
                  {book.badge && (
                    <div className="mt-3 text-[10px] font-bold text-[#FFBA00] bg-[#FFBA00]/10 px-2 py-0.5 rounded-md inline-block">
                      {book.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Language Edition */}
          <div className="mb-10">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">LANGUAGE EDITION FOR "{selectedBookData?.title}"</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label 
                onClick={() => setLanguage('english')}
                className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${language === 'english' ? 'bg-[#F4F8FA] border-[#5588CB]' : 'bg-white border-gray-200'}`}
              >
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${language === 'english' ? 'border-[#5588CB]' : 'border-gray-300'}`}>
                  {language === 'english' && <div className="w-2 h-2 bg-[#5588CB] rounded-full"></div>}
                </div>
                <span className="text-sm font-semibold text-gray-800">English Edition</span>
              </label>
              
              {selectedBook === 1 && (
                <label 
                  onClick={() => setLanguage('hindi')}
                  className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${language === 'hindi' ? 'bg-[#F4F8FA] border-[#5588CB]' : 'bg-white border-gray-200'}`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${language === 'hindi' ? 'border-[#5588CB]' : 'border-gray-300'}`}>
                    {language === 'hindi' && <div className="w-2 h-2 bg-[#5588CB] rounded-full"></div>}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Hindi Edition (हिंदी संस्करण)</span>
                </label>
              )}
            </div>
          </div>

          {/* 2. CHOOSE FORMAT */}
          <div className="mb-10">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">2. CHOOSE FORMAT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Paperback Option */}
              <label 
                className={`flex items-center justify-between p-4 rounded-2xl border bg-[#F4F8FA] border-[#5588CB] cursor-default`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#5588CB]/10 text-[#5588CB] rounded-xl flex items-center justify-center shrink-0">
                    <Book className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 border-[#5588CB]`}>
                        <div className="w-2 h-2 bg-[#5588CB] rounded-full"></div>
                      </div>
                      <span className="font-semibold text-sm text-gray-900">Paperback Edition</span>
                    </div>
                    <span className="text-xs text-[#64748B] ml-6 block">Physical copy delivery</span>
                  </div>
                </div>
                <span className="text-[#5588CB] font-extrabold text-xl ml-2">₹{finalPrice}</span>
              </label>

            </div>
          </div>

          {/* 3. Your Details */}
          <div className="mb-10">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">3. YOUR DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['Plus_Jakarta_Sans',_sans-serif]">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[#64748B]">Full Name *</label>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3.5 focus-within:border-[#5588CB] focus-within:ring-1 focus-within:ring-[#5588CB] transition-all shadow-sm">
                  <User className="w-5 h-5 text-[#94A3B8] shrink-0" />
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma" 
                    className="w-full bg-transparent text-sm focus:outline-none text-gray-900 placeholder-[#94A3B8] pl-1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[#64748B]">Email Address *</label>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3.5 focus-within:border-[#5588CB] focus-within:ring-1 focus-within:ring-[#5588CB] transition-all shadow-sm">
                  <Mail className="w-5 h-5 text-[#94A3B8] shrink-0" />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. vikram@example.com" 
                    className="w-full bg-transparent text-sm focus:outline-none text-gray-900 placeholder-[#94A3B8] pl-1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[#64748B]">City</label>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3.5 focus-within:border-[#5588CB] focus-within:ring-1 focus-within:ring-[#5588CB] transition-all shadow-sm">
                  <MapPin className="w-5 h-5 text-[#94A3B8] shrink-0" />
                  <input 
                    type="text" 
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, Bengaluru, Delhi" 
                    className="w-full bg-transparent text-sm focus:outline-none text-gray-900 placeholder-[#94A3B8] pl-1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[#64748B]">Phone / WhatsApp *</label>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3.5 focus-within:border-[#5588CB] focus-within:ring-1 focus-within:ring-[#5588CB] transition-all shadow-sm">
                  <Phone className="w-5 h-5 text-[#94A3B8] shrink-0" />
                  <input 
                    type="tel" 
                    required
                    maxLength="10"
                    pattern="[0-9]{10}"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      setPhone(e.target.value);
                    }}
                    value={phone}
                    placeholder="9876543210" 
                    className="w-full bg-transparent text-sm focus:outline-none text-gray-900 placeholder-[#94A3B8] pl-1"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Footer Submit */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1">TOTAL PAYABLE AMOUNT</span>
              <span className="text-3xl font-extrabold text-[#5588CB] font-['Plus_Jakarta_Sans',_sans-serif]">₹{finalPrice}</span>
              <span className="text-xs font-medium text-[#64748B] mt-1">Paperback Edition</span>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#5588CB] hover:bg-[#4875b3] disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed text-white font-['Inter',_sans-serif] font-semibold text-[12px] leading-[16px] tracking-[1.92px] uppercase py-3.5 px-8 rounded-md transition-colors flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
          </div>

        </form>
      </div>
      
      {/* Footer Section */}
      <div className="w-full mt-auto pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Form;
