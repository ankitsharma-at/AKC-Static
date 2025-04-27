import React from 'react';
import { Menu, BookOpen ,Linkedin} from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <a href="/" className="flex items-center space-x-2 ml-2 lg:ml-0">
              <img src='https://res.cloudinary.com/danqalwag/image/upload/v1745669174/IMG-20250426-WA0005-removebg-preview_uwiuer.png' className='bg-transparent h-14'></img>
              <span className="text-xl font-bold text-gray-900">Arvindam ki Class</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Courses</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Gallery</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
          </div>
          
        </div>
      </div></nav>
  );
};


export default Navbar;