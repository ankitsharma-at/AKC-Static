import React from 'react';
import { X, BookOpen} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
 

 

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for mobile and desktop */}
      <aside
        className={`fixed lg:hidden inset-y-0 min-h-fit rounded-lg left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`} onClick={toggleSidebar}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-lg font-semibold text-gray-800">EduSphere</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid lg:flex items-center lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-14 py-2 text-lg font-medium ">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 px-14 py-2 text-lg font-medium">Courses</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 px-14 py-2 text-lg font-medium">Features</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 px-14 py-2 text-lg font-medium">Gallery</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 px-14 py-2 text-lg font-medium">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-14 py-2 text-lg font-medium">Contact</a>
          </div>
      </aside>
    </>
  );
};

export default Sidebar;