import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const blogsData = [
  {
    id: 1,
    title: "Between Silence and Stone: An Egyptian Journey",
    description: "Andrew D. Levine reflects on Egypt beyond sightseeing — exploring how travel, unfamiliar places, and moments of discomfort can reshape the way we see the world and inspire new stories.",
    image: "/b1.webp",
    content: `Egypt is a land where time feels simultaneously frozen and constantly in motion. 
    
When I first arrived in Cairo, the sheer volume of sound, traffic, and history was overwhelming. It wasn't the pristine, silent Egypt of documentaries; it was alive, chaotic, and demanding of attention.

In this journey, I explored the silent stones of Karnak and the bustling alleys of Khan el-Khalili, finding that the true essence of travel isn't just in seeing monuments, but in the moments of discomfort that force you to grow. The juxtaposition of ancient pharaohs and modern street vendors creates a narrative that inevitably bleeds into my own writing. 

Every new story begins with a step into the unknown.`,
    date: "October 12, 2025",
    author: "Andrew D. Levine",
    category: "Travel"
  },
  {
    id: 2,
    title: "Quito and the Galápagos: A Personal Travelogue",
    description: "A journey from the streets of Quito to the volcanic landscapes of the Galápagos — filled with wildlife, discovery, and reflections on what it means to experience a world still shaped by nature.",
    image: "/b2.webp",
    content: `The transition from the high-altitude colonial streets of Quito to the rugged, prehistoric shores of the Galápagos is jarring in the best way possible.

In Quito, history is carved into the architecture, telling stories of conquest and religion. But in the Galápagos, history is written in the DNA of the iguanas and the giant tortoises. It is a place where humanity feels like an afterthought.

Witnessing the fearless wildlife on these islands reminded me of the raw, untamed forces that shape our world. It’s a humbling experience that strips away the noise of modern life and leaves you face-to-face with the essential elements of existence.`,
    date: "September 05, 2025",
    author: "Andrew D. Levine",
    category: "Travel"
  },
  {
    id: 3,
    title: "What Makes Indian Noir Different?",
    description: "From Mumbai's crowded streets to Delhi's hidden corridors, Indian noir blends crime, corruption, culture and moral ambiguity into stories where the city itself becomes part of the mystery.",
    image: "/b3.webp",
    content: `Noir is often associated with rain-slicked streets, trench coats, and cynical detectives in American or European settings. But when you transplant these elements into the vibrant, chaotic, and deeply complex landscape of India, you get something entirely unique.

Indian Noir isn't just about a murder; it's about the systemic layers of society. It's about a billionaire's high-rise in Mumbai casting a literal and metaphorical shadow over the slums below. It's about political machinery in Delhi moving silently behind closed doors.

The heat, the dust, the juxtaposition of extreme wealth and poverty—all these elements make the cities in Indian Noir act not just as settings, but as characters themselves. The moral ambiguity is thicker, shaped by centuries of culture and rapid modernization colliding head-on.`,
    date: "August 20, 2025",
    author: "Editorial Team",
    category: "Writing"
  }
];

const Blog = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map(blog => (
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

      </div>

      {/* Footer Section */}
      <div className="w-full mt-auto pt-10">
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
