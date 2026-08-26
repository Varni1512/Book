import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-800 py-6 px-4 sm:px-8 flex justify-center">
      {/* Changed to exact Figma width: 1246px */}
      <div className="w-full max-w-[1446px]">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-0">
          
          {/* Logo */}
          <div className="flex items-center justify-center lg:w-1/4 lg:justify-start">
            <img 
              src="/logo.webp" 
              alt="World Traveler And Write Logo" 
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[18px] leading-[16.16px] text-gray-900 lg:w-2/4">
            <Link to="/#books" className="hover:text-blue-900 transition-colors">
              Books
            </Link>
            <Link to="/#about" className="hover:text-blue-900 transition-colors">
              About Author
            </Link>
            <Link to="/blog" className="hover:text-blue-900 transition-colors">
              Blog
            </Link>
            <Link to="/#review" className="hover:text-blue-900 transition-colors">
              Review
            </Link>
            <Link to="/#contact" className="hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Details */}
          <div className="flex flex-col items-start justify-center gap-3 font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[18px] leading-[16.16px] text-gray-900 lg:w-1/4 lg:items-end">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-900 flex-shrink-0" />
                <a 
                  href="mailto:alevine@bluelatitudebooksonline.com" 
                  className="hover:text-blue-900 transition-colors break-all sm:break-normal"
                >
                  alevine@bluelatitudebooksonline.com
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Divider - Applied exact 0.89px border thickness */}
        <hr className="border-t-[0.89px] border-gray-400 my-2" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
          
          <p className="text-center sm:text-left font-['Plus_Jakarta_Sans',_sans-serif] font-normal text-[18px] leading-[16.16px] text-gray-900">
            © 2026 Blue Latitude Books India Pvt. Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center">
            <svg 
              width="237" 
              height="37" 
              viewBox="0 0 237 37" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-8 sm:h-9 object-contain"
            >
              <a href="https://www.facebook.com/andrewdlevine894/" target="_blank" rel="noopener noreferrer" className="group">
                <rect width="36" height="36" rx="18" fill="#CAD5E2" className="group-hover:fill-blue-100 transition-colors" />
                <path d="M18 10.5312C13.875 10.5312 10.5 13.8988 10.5 18.0463C10.5 21.7963 13.245 24.9087 16.83 25.4712V20.2213H14.925V18.0463H16.83V16.3888C16.83 14.5063 17.9475 13.4713 19.665 13.4713C20.4825 13.4713 21.3375 13.6137 21.3375 13.6137V15.4662H20.3925C19.4625 15.4662 19.17 16.0438 19.17 16.6363V18.0463H21.255L20.9175 20.2213H19.17V25.4712C20.9373 25.1921 22.5467 24.2904 23.7074 22.9288C24.8682 21.5672 25.504 19.8355 25.5 18.0463C25.5 13.8988 22.125 10.5312 18 10.5312Z" fill="#5588CB" className="group-hover:fill-blue-900 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/alevine894" target="_blank" rel="noopener noreferrer" className="group">
                <rect x="49.456" width="36" height="36" rx="18" fill="#CAD5E2" className="group-hover:fill-blue-100 transition-colors" />
                <path d="M72.706 11.25C73.1038 11.25 73.4853 11.408 73.7667 11.6893C74.048 11.9706 74.206 12.3522 74.206 12.75V23.25C74.206 23.6478 74.048 24.0294 73.7667 24.3107C73.4853 24.592 73.1038 24.75 72.706 24.75H62.206C61.8082 24.75 61.4266 24.592 61.1453 24.3107C60.864 24.0294 60.706 23.6478 60.706 23.25V12.75C60.706 12.3522 60.864 11.9706 61.1453 11.6893C61.4266 11.408 61.8082 11.25 62.206 11.25H72.706ZM72.331 22.875V18.9C72.331 18.2515 72.0734 17.6297 71.6149 17.1711C71.1563 16.7126 70.5344 16.455 69.886 16.455C69.2485 16.455 68.506 16.845 68.146 17.43V16.5975H66.0535V22.875H68.146V19.1775C68.146 18.6 68.611 18.1275 69.1885 18.1275C69.467 18.1275 69.734 18.2381 69.931 18.435C70.1279 18.632 70.2385 18.899 70.2385 19.1775V22.875H72.331ZM63.616 15.42C63.9502 15.42 64.2707 15.2873 64.5069 15.051C64.7432 14.8147 64.876 14.4942 64.876 14.16C64.876 13.4625 64.3135 12.8925 63.616 12.8925C63.2798 12.8925 62.9574 13.026 62.7197 13.2637C62.482 13.5014 62.3485 13.8238 62.3485 14.16C62.3485 14.8575 62.9185 15.42 63.616 15.42ZM64.6585 22.875V16.5975H62.581V22.875H64.6585Z" fill="#5588CB" className="group-hover:fill-blue-900 transition-colors" />
              </a>
              <a href="https://www.youtube.com/@andrewlevine2659" target="_blank" rel="noopener noreferrer" className="group">
                <rect x="98.912" width="37.004" height="37.004" rx="18.502" fill="#CAD5E2" className="group-hover:fill-blue-100 transition-colors" />
                <g clipPath="url(#clip0_2266_2842)">
                  <path d="M124.832 15.4749C124.832 15.4749 124.684 14.4313 124.229 13.973C123.652 13.3698 123.008 13.367 122.712 13.3315C120.595 13.1777 117.417 13.1777 117.417 13.1777H117.411C117.411 13.1777 114.233 13.1777 112.116 13.3315C111.82 13.367 111.176 13.3698 110.599 13.973C110.144 14.4313 109.999 15.4749 109.999 15.4749C109.999 15.4749 109.848 16.6992 109.848 17.9259V19.073C109.848 20.2968 109.999 21.524 109.999 21.524C109.999 21.524 110.147 22.5675 110.599 23.0259C111.176 23.6291 111.933 23.6083 112.269 23.6736C113.482 23.789 117.417 23.8245 117.417 23.8245C117.417 23.8245 120.598 23.8188 122.715 23.6679C123.011 23.6324 123.656 23.6296 124.232 23.0264C124.687 22.568 124.835 21.5244 124.835 21.5244C124.835 21.5244 124.986 20.3006 124.986 19.0735V17.9263C124.983 16.702 124.832 15.4749 124.832 15.4749ZM115.85 20.4657V16.211L119.939 18.3459L115.85 20.4657Z" fill="#5488C6" className="group-hover:fill-blue-900 transition-colors" />
                </g>
              </a>
              <a href="https://www.instagram.com/andrewdlevine894/" target="_blank" rel="noopener noreferrer" className="group">
                <rect x="149.372" width="37.004" height="37.004" rx="18.502" fill="#CAD5E2" className="group-hover:fill-blue-100 transition-colors" />
                <g clipPath="url(#clip1_2266_2842)">
                  <mask id="mask0_2266_2842" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="160" y="11" width="16" height="16">
                    <path d="M160.664 11.6406H175.081V26.0578H160.664V11.6406Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_2266_2842)">
                    <path d="M167.872 12.9403C169.797 12.9403 170.025 12.9475 170.785 12.9821C171.488 13.0146 171.87 13.1321 172.124 13.2308C172.438 13.3462 172.721 13.53 172.954 13.77C173.193 14.0029 173.378 14.2862 173.493 14.5997C173.592 14.8535 173.709 15.2355 173.742 15.9384C173.776 16.6989 173.783 16.9259 173.783 18.8506C173.783 20.776 173.776 21.0038 173.742 21.7643C173.709 22.4672 173.592 22.8485 173.493 23.103C173.373 23.4137 173.189 23.696 172.954 23.9316C172.718 24.1672 172.436 24.351 172.126 24.4711C171.872 24.5699 171.49 24.6874 170.788 24.7191C170.027 24.7537 169.799 24.7609 167.875 24.7609C165.95 24.7609 165.721 24.7537 164.962 24.7191C164.259 24.6867 163.877 24.5699 163.623 24.4711C163.31 24.3556 163.026 24.171 162.793 23.9312C162.554 23.6988 162.369 23.4155 162.253 23.1022C162.155 22.8478 162.037 22.4657 162.005 21.7629C161.971 21.0031 161.964 20.7753 161.964 18.8506C161.964 16.9252 161.971 16.6974 162.005 15.9369C162.038 15.2341 162.155 14.8528 162.253 14.5983C162.369 14.2854 162.553 14.0014 162.793 13.7693C163.026 13.5296 163.309 13.3451 163.622 13.2294C163.877 13.1306 164.259 13.0131 164.962 12.9814C165.721 12.9468 165.949 12.9389 167.874 12.9389L167.872 12.9403ZM167.874 11.6406C165.916 11.6406 165.67 11.6486 164.901 11.6839C164.133 11.7192 163.609 11.8425 163.151 12.0198C162.67 12.201 162.234 12.4849 161.874 12.8517C161.507 13.212 161.223 13.6479 161.042 14.129C160.864 14.5868 160.742 15.1115 160.707 15.8785C160.673 16.6455 160.664 16.8921 160.664 18.8499C160.664 20.8078 160.673 21.0536 160.707 21.822C160.743 22.5912 160.864 23.1138 161.042 23.5715C161.223 24.0524 161.507 24.488 161.874 24.8482C162.234 25.2158 162.67 25.4991 163.151 25.68C163.609 25.8581 164.133 25.9799 164.901 26.0152C165.668 26.0498 165.915 26.0585 167.873 26.0585C169.831 26.0585 170.076 26.0505 170.845 26.0152C171.614 25.9799 172.136 25.8581 172.594 25.68C173.073 25.4949 173.508 25.2117 173.871 24.8486C174.234 24.4855 174.517 24.0505 174.703 23.5715C174.881 23.1138 175.002 22.589 175.038 21.822C175.072 21.0543 175.081 20.807 175.081 18.8499C175.081 16.8921 175.072 16.6463 175.038 15.8771C175.002 15.1087 174.881 14.5868 174.703 14.129C174.522 13.6479 174.238 13.2119 173.871 12.8517C173.511 12.4849 173.075 12.201 172.594 12.0198C172.136 11.8417 171.612 11.7199 170.844 11.6853C170.077 11.65 169.83 11.6421 167.872 11.6421L167.874 11.6406Z" fill="#5488C6" className="group-hover:fill-blue-900 transition-colors" />
                    <path d="M167.872 15.15C166.891 15.15 165.949 15.54 165.255 16.2342C164.561 16.9284 164.171 17.8699 164.171 18.8516C164.171 19.8334 164.561 20.7749 165.255 21.4691C165.949 22.1632 166.891 22.5532 167.872 22.5532C168.854 22.5532 169.796 22.1632 170.49 21.4691C171.184 20.7749 171.574 19.8334 171.574 18.8516C171.574 17.8699 171.184 16.9284 170.49 16.2342C169.796 15.54 168.854 15.15 167.872 15.15ZM167.872 21.2557C167.235 21.2557 166.623 21.0024 166.172 20.5516C165.722 20.1007 165.468 19.4892 165.468 18.8516C165.468 18.214 165.722 17.6026 166.172 17.1517C166.623 16.7009 167.235 16.4476 167.872 16.4476C168.51 16.4476 169.121 16.7009 169.572 17.1517C170.023 17.6026 170.276 18.214 170.276 18.8516C170.276 19.4892 170.023 20.1007 169.572 20.5516C169.121 21.0024 168.51 21.2557 167.872 21.2557ZM171.72 15.8687C171.95 15.8687 172.17 15.7776 172.332 15.6154C172.494 15.4531 172.585 15.2331 172.585 15.0037C172.585 14.7743 172.494 14.5543 172.332 14.392C172.17 14.2298 171.95 14.1387 171.72 14.1387C171.491 14.1387 171.271 14.2298 171.109 14.392C170.946 14.5543 170.855 14.7743 170.855 15.0037C170.855 15.2331 170.946 15.4531 171.109 15.6154C171.271 15.7776 171.491 15.8687 171.72 15.8687Z" fill="#5488C6" className="group-hover:fill-blue-900 transition-colors" />
                  </g>
                </g>
              </a>
              <a href="https://www.tiktok.com/@andrewdlevine/video/7611641265683303710" target="_blank" rel="noopener noreferrer" className="group">
                <rect x="199.832" width="37.004" height="37.004" rx="18.502" fill="#CAD5E2" className="group-hover:fill-blue-100 transition-colors" />
                <g clipPath="url(#clip2_2266_2842)">
                  <path d="M216.505 26.0568C218.978 26.0568 220.984 24.1124 220.984 21.713V15.8369C221.345 16.3705 221.834 16.806 222.405 17.1043C223.092 17.4629 223.868 17.6159 224.64 17.545H224.641V15.165C222.742 15.0313 221.216 13.5965 221.016 11.7598H218.906L218.883 21.7416C218.883 22.9661 217.768 23.9307 216.505 23.9307C215.242 23.9307 214.22 22.9383 214.22 21.7138C214.22 20.4902 215.243 19.4978 216.505 19.4978C216.6 19.4978 216.69 19.5146 216.782 19.5247V17.3835C216.69 17.3776 216.599 17.3692 216.505 17.3692C214.033 17.3692 212.026 19.3145 212.026 21.713C212.026 24.1124 214.031 26.0568 216.505 26.0568Z" fill="#5488C6" className="group-hover:fill-blue-900 transition-colors" />
                </g>
              </a>

              <defs>
                <clipPath id="clip0_2266_2842">
                  <rect width="15.138" height="15.138" fill="white" transform="translate(109.845 10.9336)" />
                </clipPath>
                <clipPath id="clip1_2266_2842">
                  <rect width="15.138" height="15.138" fill="white" transform="translate(160.305 10.9336)" />
                </clipPath>
                <clipPath id="clip2_2266_2842">
                  <rect width="15.138" height="15.138" fill="white" transform="translate(210.764 10.9336)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;