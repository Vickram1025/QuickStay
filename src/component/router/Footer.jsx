import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaGooglePlay, } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Find Room", path: "/find Room" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact Us", path: "/Contact" },
    // { name: "Privacy Policy", path: "/privacy-policy" },
    // { name: "Terms & Conditions", path: "/terms" },
  
  ];

  const centres = [
    "Olympia Tech Park, Guindy, Chennai",
    "Prince Info Park, Ambattur, Chennai",
    "L&T Estancia IT Park, Guduvanchery, Chennai",
    "Chennai Central Railway Station, Chennai"
  ];

  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaYoutube, label: "YouTube" },
    { icon: FaTiktok, label: "TikTok" }
  ];

  return (
    <footer className="bg-gray-300 text-gray-900 py-10 mt-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="font-semibold text-lg text-blue-700 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:text-blue-500 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-blue-700 mb-4">QuickStay Centres</h3>
          <ul className="space-y-2">
            {centres.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-500"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-blue-700 mb-4">Social Media</h3>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label }, index) => (
              <Icon key={index} className="text-2xl hover:text-blue-500 cursor-pointer transition" aria-label={label} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-between px-6">
        <button className="bg-blue-700 flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition">
          <FaGooglePlay /> Google Play
        </button>
      
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>© 2025 <span className="text-blue-700">QuickStay</span>. Designed with  for QuickStay</p>
      </div>
    </footer>
  );
}

export default Footer;
