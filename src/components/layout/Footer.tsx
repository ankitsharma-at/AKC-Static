import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, PhoneCall, MapPin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              
              <span className="text-xl font-bold ml-2">ArvindamKiClass Pvt Ltd</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming education through technology and innovation. Join our global community of learners today.
            </p>
            <div className='my-4'>
            <a href="https://hits.sh/ankitsharma-at.github.io/AKC-Static/"><img alt="website visitors" src="https://hits.sh/ankitsharma-at.github.io/AKC-Static.svg?style=for-the-badge&label=website%20visitors&color=187bee"/></a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15jj7vxSXo/" target="_main" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" target="_main" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-extrabold">
                X
              </a>
              <a href="https://www.instagram.com/arvin_dam?igsh=MWNhbW42aW1tMXFscg==" target="_main" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.instagram.com/arvin_dam?igsh=MWNhbW42aW1tMXFscg==" target="_main" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/@arvindamkiclass427?si=d62LFS_JPg1rso8B" target="_main" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Accessibility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Arvindam ki Class Pvt Ltd, Kalyanpura Road, Village-Karoi, Bhilwara</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">+91 9351433289</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">Arvindamkiclass999@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} EduSphere. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;