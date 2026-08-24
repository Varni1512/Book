import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getBlogs, generateSlug } from '../utils/data';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const blogs = await getBlogs();
      const foundBlog = blogs.find(b => generateSlug(b.title) === slug);
      setBlog(foundBlog);
      setLoading(false);
    };
    loadData();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-[#F8FAFC]"></div>;
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
        <div className="w-full pt-6 px-4 sm:px-8 mb-8">
          <Navbar />
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-['Cormorant_Garamond',_serif] font-bold mb-6">Blog not found</h1>
          <Link to="/blog" className="text-[#5588CB] font-['Plus_Jakarta_Sans',_sans-serif] font-semibold underline">Return to Journal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Format content to have paragraphs
  const paragraphs = blog.content.split('\n\n');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans flex flex-col">
      {/* Navbar Section */}
      <div className="w-full pt-6 px-4 sm:px-8 mb-8 md:mb-12">
        <Navbar />
      </div>

      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        
        <div className="mb-8">
           <Link to="/blog" className="text-sm font-['Plus_Jakarta_Sans',_sans-serif] font-semibold text-[#64748B] hover:text-[#5588CB] transition-colors flex items-center gap-2 w-max">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back to Journal
           </Link>
        </div>

        {/* Article Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-4 mb-6">
            {/* <span className="bg-[#5588CB]/10 text-[#5588CB] font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
              {blog.category}
            </span> */}
            <span className="text-sm text-[#64748B] font-['Plus_Jakarta_Sans',_sans-serif] font-medium">
              {blog.date}
            </span>
          </div>
          
          <h1 className="font-['Cormorant_Garamond',_serif] text-4xl md:text-[52px] leading-[1.1] font-bold mb-8 text-black tracking-[-1px]">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shadow-sm">
               <img 
                src="/book1.webp" 
                alt={blog.author} 
                className="w-full h-full object-cover grayscale opacity-80" 
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-[#5588CB]'); }} 
               />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif]">{blog.author}</span>
              <span className="text-xs text-[#64748B] font-['Plus_Jakarta_Sans',_sans-serif] mt-0.5">Author</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-[24px] overflow-hidden mb-12 shadow-sm ">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover rounded-[16px]" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none font-['Plus_Jakarta_Sans',_sans-serif] text-[17px] leading-[1.9] text-[#3E4143]">
          {blog.content.includes('<') ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            paragraphs.map((para, index) => (
              <p key={index} className="mb-6">
                {para}
              </p>
            ))
          )}
        </div>

      </div>

      {/* Footer Section */}
      <div className="w-full mt-auto pt-10 bg-white border-t border-gray-200">
        <Footer />
      </div>
    </div>
  );
};
export default BlogDetail;
