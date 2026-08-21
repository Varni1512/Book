import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      sessionStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-full max-w-md">
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#5588CB]/10 text-[#5588CB] rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-['Cormorant_Garamond',_serif] text-3xl font-bold text-gray-900">Admin Access</h1>
          <p className="text-sm text-[#64748B] font-['Plus_Jakarta_Sans',_sans-serif] mt-1">Please login to manage the dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5 font-['Plus_Jakarta_Sans',_sans-serif]">
          {error && <div className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded-md">{error}</div>}
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#64748B]">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com" 
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5588CB] focus:ring-1 focus:ring-[#5588CB] transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#64748B]">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5588CB] focus:ring-1 focus:ring-[#5588CB] transition-all"
              required
            />
          </div>

          <button 
            type="submit" 
            className="cursor-pointer w-full bg-[#5588CB] hover:bg-[#4875b3] text-white font-['Inter',_sans-serif] font-bold text-[12px] tracking-[1.5px] uppercase py-3.5 rounded-xl transition-colors mt-2"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLogin;
