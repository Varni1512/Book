import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs, generateSlug } from '../utils/data';

const BlogInsights = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogs();
        // We only need the latest 3 blogs for the homepage
        setBlogs(fetchedBlogs.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // If loading or no blogs, we can show a minimal placeholder or just wait
  if (loading || blogs.length === 0) {
    return (
      <section className="w-full bg-white text-gray-900 py-16 px-4 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto flex justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5588CB]"></div>
        </div>
      </section>
    );
  }

  const featuredBlog = blogs[0];
  const stackedBlogs = blogs.slice(1, 3);

  return (
    <section className="w-full bg-white text-gray-900 py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div id="blog" className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 scroll-mt-10">
          {/* Left Side Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#5588CB] font-['Inter',_sans-serif] font-bold text-[12px] tracking-[2px] uppercase">
              Blog & Insights
            </h2>
            <h1 className="font-['Cormorant_Garamond',_serif] font-medium text-4xl md:text-[40px] leading-tight md:leading-[44px] tracking-[-1px] text-[#000000] mt-1 md:mt-0">
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
          {featuredBlog && (
            <div className="flex flex-col gap-6 w-full lg:w-[425.78px] shrink-0">
              
              {/* Exact dimensions applied to the left image */}
              <div className="w-full lg:w-[425.78px] aspect-video lg:aspect-auto lg:h-[296.24px] overflow-hidden bg-gray-100 shrink-0 rounded-sm">
                <img 
                  src={featuredBlog.image || "/b1.webp"} 
                  alt={featuredBlog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="font-['Cormorant_Garamond',_serif] font-bold text-[32.32px] leading-[35px] tracking-[-0.81px] text-[#000000]">
                  {featuredBlog.title}
                </h3>
                
                {/* Description */}
                <p className="font-['Cormorant_Garamond',_serif] font-normal text-[14px] leading-[16.16px] text-[#3E4143] pt-1">
                  {featuredBlog.description}
                </p>
                
                {/* Button */}
                <Link to={`/blog/${generateSlug(featuredBlog.title)}`} className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.08px] leading-[10.77px] tracking-[0.4px] uppercase py-2.5 px-5 rounded-md transition-colors w-max mt-2 flex items-center justify-center">
                  Read Essay
                </Link>
              </div>
            </div>
          )}

          {/* Right Column (Stacked Articles) */}
          {stackedBlogs.length > 0 && (
            <div className="flex flex-col gap-[29px] flex-1">
              {stackedBlogs.map((blog, index) => (
                <div key={blog.id || index} className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Exact dimensions applied here */}
                  <div className="w-full sm:w-[286.82px] aspect-video sm:aspect-auto sm:h-[239.69px] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                    <img 
                      src={blog.image || `/b${index + 2}.webp`} 
                      alt={blog.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {/* Title */}
                    <h3 className="font-['Cormorant_Garamond',_serif] font-bold text-[32.32px] leading-[35px] tracking-[-0.81px] text-[#000000]">
                      {blog.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-['Cormorant_Garamond',_serif] font-normal text-[14px] leading-[16.16px] text-[#3E4143] pt-1">
                      {blog.description}
                    </p>
                    
                    {/* Button */}
                    <Link to={`/blog/${generateSlug(blog.title)}`} className="bg-[#5588CB] hover:bg-[#4875b3] cursor-pointer text-white font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[8.08px] leading-[10.77px] tracking-[0.4px] uppercase py-2.5 px-5 rounded-md transition-colors w-max mt-2 flex items-center justify-center">
                      Read Article
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default BlogInsights;