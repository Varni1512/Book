import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getBlogs } from '../utils/data';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setBlogs(await getBlogs());
      setLoading(false);
    };
    loadData();
  }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans flex flex-col">
      {/* Navbar Section */}
      <div className="w-full pt-6 px-4 sm:px-8 mb-8 md:mb-12">
        <Navbar />
      </div>

      <div className="flex-grow w-full max-w-[1300px] mx-auto px-4 sm:px-8 pb-16">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[#5588CB] font-['Inter',_sans-serif] font-bold text-[12px] tracking-[2px] uppercase mb-3">
            Blog & Insights
          </h2>
          <h1 className="font-['Cormorant_Garamond',_serif] text-5xl md:text-6xl font-bold mb-6 text-black tracking-[-1px]">
            Stories Beyond the Book
          </h1>
          <p className="text-[#3E4143] max-w-2xl font-['Plus_Jakarta_Sans',_sans-serif] text-base leading-relaxed">
            Travel reflections, writing insights, and perspectives from the world behind Blue Latitude Books.
          </p>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5588CB]"></div>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <Link to={`/blog/${blog.id}`} className="block relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-[#5588CB] uppercase tracking-wider shadow-sm">
                  {blog.category}
                </div> */}
              </Link>
              
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-[#64748B] font-['Plus_Jakarta_Sans',_sans-serif] mb-3">{blog.date} · By {blog.author}</p>
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="font-['Cormorant_Garamond',_serif] font-bold text-2xl leading-[1.3] mb-4 text-black group-hover:text-[#5588CB] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-[14px] text-[#3E4143] font-['Plus_Jakarta_Sans',_sans-serif] leading-[1.6] mb-8 line-clamp-3">
                  {blog.description}
                </p>
                
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <Link to={`/blog/${blog.id}`} className="text-[#5588CB] font-['Inter',_sans-serif] font-bold text-[11px] tracking-wider uppercase flex items-center gap-2 hover:text-[#4875b3] transition-colors">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

      </div>

      {/* Footer Section */}
      <div className="w-full mt-auto pt-10">
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
