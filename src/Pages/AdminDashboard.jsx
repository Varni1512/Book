import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg';
import * as XLSX from 'xlsx';
import { getFormSubmissions, getBlogs, addBlog, updateBlog, deleteBlog } from '../utils/data';
import { FileDown, PlusCircle, LayoutList, LogOut, ArrowLeft, Trash2, Edit2, Loader2, Image as ImageIcon } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('forms'); // 'forms' or 'blogs'
  
  // Blog Form State
  const [blogTitle, setBlogTitle] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [blogContent, setBlogContent] = useState('');

  // Form Submissions Data
  const [submissions, setSubmissions] = useState([]);
  
  // Blogs Data & State
  const [blogs, setBlogs] = useState([]);
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Check Auth
    if (sessionStorage.getItem('isAdmin') !== 'true') {
      navigate('/admin');
    }
    // Load Data
    const loadData = async () => {
      const subs = await getFormSubmissions();
      setSubmissions(subs);
      setBlogs(await getBlogs());
    };
    loadData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  const handleExportExcel = () => {
    if (submissions.length === 0) {
      alert("No data to export");
      return;
    }
    
    // Prepare data for export
    const exportData = submissions.map(sub => ({
      ID: sub.id,
      Date: sub.date,
      Name: sub.name,
      Email: sub.email,
      City: sub.city,
      Phone: sub.phone,
      Book: sub.bookTitle,
      Language: sub.language,
      Format: sub.format,
      Price: `₹${sub.price}`
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    
    XLSX.writeFile(workbook, "Form_Submissions.xlsx");
  };

  const resetForm = () => {
    setBlogTitle('');
    setBlogAuthor('');
    setBlogCategory('');
    setBlogImage('');
    setBlogContent('');
    setEditingBlogId(null);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: data,
        }
      );
      const uploadedImage = await res.json();
      
      if (!res.ok) {
        throw new Error(uploadedImage.error?.message || "Failed to upload image to Cloudinary");
      }
      
      setBlogImage(uploadedImage.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Cloudinary Error: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!blogTitle || !blogContent) {
      alert("Title and Content are required.");
      return;
    }

    const blogData = {
      title: blogTitle,
      author: blogAuthor || 'Admin',
      category: blogCategory || 'General',
      image: blogImage || '/b1.webp', // Default fallback
      description: blogContent.replace(/<[^>]+>/g, '').substring(0, 150) + '...', // Strip HTML for short description
      content: blogContent // Save raw HTML
    };

    if (editingBlogId) {
      await updateBlog(editingBlogId, blogData);
      alert("Blog updated successfully!");
    } else {
      await addBlog(blogData);
      alert("Blog published successfully!");
    }

    resetForm();
    setBlogs(await getBlogs());
    setIsAddingBlog(false);
  };

  const handleEditClick = (blog) => {
    setIsAddingBlog(true);
    setEditingBlogId(blog.id);
    setBlogTitle(blog.title);
    setBlogAuthor(blog.author);
    setBlogCategory(blog.category);
    setBlogImage(blog.image);
    setBlogContent(blog.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      setBlogs(await getBlogs());
    }
  };

  // No toolbar modules needed for react-simple-wysiwyg

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col md:flex-row">
      
      {/* Sidebar / Top Navigation */}
      <div className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col md:h-screen md:sticky md:top-0 z-10 shrink-0 shadow-sm md:shadow-none">
        <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-center">
          <img src="/logo.webp" alt="Logo" className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] object-contain" />
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-row md:flex-col gap-2 p-2 md:p-4 overflow-x-auto md:overflow-visible flex-grow no-scrollbar">
          <p className="hidden md:block text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-2 px-3">Dashboard Menu</p>
          
          <button 
            onClick={() => setActiveTab('forms')}
            className={`cursor-pointer flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3 rounded-xl transition-colors font-semibold text-xs md:text-sm whitespace-nowrap flex-shrink-0 ${activeTab === 'forms' ? 'bg-[#5588CB] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutList className="w-4 h-4 md:w-5 md:h-5" />
            Form Submissions
          </button>

          <button 
            onClick={() => { setActiveTab('blogs'); setIsAddingBlog(false); }}
            className={`cursor-pointer flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3 rounded-xl transition-colors font-semibold text-xs md:text-sm whitespace-nowrap flex-shrink-0 ${activeTab === 'blogs' ? 'bg-[#5588CB] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <PlusCircle className="w-4 h-4 md:w-5 md:h-5" />
            Manage Blogs
          </button>

          <div className="md:hidden w-px bg-gray-200 mx-1 flex-shrink-0"></div>

          <button 
            onClick={handleLogout}
            className="cursor-pointer md:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors font-semibold text-xs text-red-500 hover:bg-red-50 whitespace-nowrap flex-shrink-0"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="hidden md:block p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="cursor-pointer flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-colors font-semibold text-sm text-red-500 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-4 md:p-8 md:overflow-y-auto md:h-screen font-['Plus_Jakarta_Sans',_sans-serif]">
        
        {/* Form Submissions View */}
        {activeTab === 'forms' && (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-['Cormorant_Garamond',_serif] text-4xl font-bold text-gray-900 mb-2">Form Submissions</h1>
                <p className="text-gray-500 text-sm">Manage and download book requests from the website.</p>
              </div>
              <button 
                onClick={handleExportExcel}
                className="cursor-pointer bg-[#107C41] hover:bg-[#0c5c30] text-white font-['Inter',_sans-serif] font-bold text-[12px] tracking-[1px] uppercase py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                Export to Excel
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">
                      <th className="p-4">Date</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Phone / City</th>
                      <th className="p-4">Book Requested</th>
                      <th className="p-4">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {submissions.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="p-8 text-center text-gray-400">No submissions found.</td>
                      </tr>
                    ) : (
                      submissions.slice().reverse().map((sub, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 text-gray-500 text-xs">{sub.date}</td>
                          <td className="p-4 font-semibold text-gray-900">{sub.name}</td>
                          <td className="p-4 text-gray-600">{sub.email}</td>
                          <td className="p-4 text-gray-600">
                            <div>{sub.phone || '-'}</div>
                            <div className="text-xs text-gray-400">{sub.city}</div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium text-gray-900">{sub.bookTitle}</div>
                            <div className="text-xs text-gray-500 capitalize">{sub.language} · {sub.format}</div>
                          </td>
                          <td className="p-4 font-bold text-[#5588CB]">₹{sub.price}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Blogs View */}
        {activeTab === 'blogs' && (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-['Cormorant_Garamond',_serif] text-4xl font-bold text-gray-900 mb-2">Manage Blogs</h1>
                <p className="text-gray-500 text-sm">View and add new stories to your journal.</p>
              </div>
              <button 
                onClick={() => {
                  if (isAddingBlog) resetForm();
                  setIsAddingBlog(!isAddingBlog);
                }}
                className="cursor-pointer bg-[#5588CB] hover:bg-[#4875b3] text-white font-['Inter',_sans-serif] font-bold text-[12px] tracking-[1px] uppercase py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                {isAddingBlog ? <ArrowLeft className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
                {isAddingBlog ? 'Close Form' : 'Add New Blog'}
              </button>
            </div>

            {isAddingBlog && (
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="font-['Cormorant_Garamond',_serif] text-3xl font-bold text-gray-900">{editingBlogId ? 'Edit Blog' : 'Publish New Blog'}</h2>
                  <p className="text-gray-500 text-sm">{editingBlogId ? 'Update your journal entry details below.' : 'Write and publish new stories to your journal.'}</p>
                </div>

                <form onSubmit={handleAddBlog} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Blog Title *</label>
                      <input 
                        type="text" 
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        required
                        placeholder="Enter blog title" 
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5588CB]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Author Name</label>
                      <input 
                        type="text" 
                        value={blogAuthor}
                        onChange={(e) => setBlogAuthor(e.target.value)}
                        placeholder="e.g. John Doe" 
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5588CB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Category</label>
                      <input 
                        type="text" 
                        value={blogCategory}
                        onChange={(e) => setBlogCategory(e.target.value)}
                        placeholder="e.g. Writing, Travel" 
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5588CB]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Cover Image</label>
                      <div className="flex items-center gap-4">
                        <label className="cursor-pointer bg-white border border-gray-200 hover:border-[#5588CB] text-gray-700 px-4 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm">
                          {isUploading ? <Loader2 className="w-4 h-4 animate-spin text-[#5588CB]" /> : <ImageIcon className="w-4 h-4 text-[#5588CB]" />}
                          {isUploading ? 'Uploading...' : 'Upload Image'}
                          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploading} />
                        </label>
                        {blogImage && (
                          <div className="h-10 w-16 rounded overflow-hidden border border-gray-200 shrink-0 relative group">
                            <img src={blogImage} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Blog Content *</label>
                    <div className="h-[400px] mb-12">
                      <Editor 
                        value={blogContent} 
                        onChange={(e) => setBlogContent(e.target.value)} 
                        containerProps={{ style: { height: '100%', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.5rem' } }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-100 gap-4">
                    <button 
                      type="button"
                      onClick={() => {
                        setIsAddingBlog(false);
                        resetForm();
                      }}
                      className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[12px] tracking-[1.5px] uppercase py-3 px-8 rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="cursor-pointer bg-[#5588CB] hover:bg-[#4875b3] text-white font-['Inter',_sans-serif] font-bold text-[12px] tracking-[1.5px] uppercase py-3 px-8 rounded-xl transition-colors"
                    >
                      {editingBlogId ? 'Update Blog' : 'Publish Blog'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice().reverse().map((blog) => (
                <div key={blog.id} className="relative bg-white border border-gray-100 rounded-[20px] overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col group">
                  <div className="relative overflow-hidden w-full h-[250px]">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-t-[20px] transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={() => handleEditClick(blog)}
                        className="cursor-pointer bg-white/90 hover:bg-white text-[#5588CB] p-2.5 rounded-full shadow-md transition-all hover:scale-110"
                        title="Edit Blog"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(blog.id)}
                        className="cursor-pointer bg-white/90 hover:bg-white text-red-500 p-2.5 rounded-full shadow-md transition-all hover:scale-110"
                        title="Delete Blog"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 md:p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#5588CB] text-xs font-bold uppercase tracking-wider">{blog.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[#64748B] text-xs font-medium">{blog.date}</span>
                    </div>
                    <h3 className="font-['Cormorant_Garamond',_serif] text-2xl font-bold mb-3 text-gray-900 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed mb-0 flex-grow font-['Plus_Jakarta_Sans',_sans-serif]">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
