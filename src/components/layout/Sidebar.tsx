import React  from 'react';
import { Link } from 'react-router-dom';
import { X} from 'lucide-react';

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
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 "
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for mobile and desktop */}
      <aside
        className={`fixed  inset-y-0 min-h-fit rounded-lg left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50  ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`} onClick={toggleSidebar}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex w-full items-center justify-center ">
            <img src='https://res.cloudinary.com/danqalwag/image/upload/v1745669174/IMG-20250426-WA0005-removebg-preview_uwiuer.png' className="h-20 w-20 text-blue-600" />
            {/* <span className="ml-2 text-lg font-semibold text-gray-800">arvindam ki class</span> */}
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2  rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 "
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-5 w-5" />
          </button>
        </div>
       <div>
        <div className="grid lg:hidden items-center lg:space-x-8">
        <Link to="/#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
  <Link to="/?scrollTo=courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Courses</Link>
  <Link to="/?scrollTo=features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</Link>
  <Link to="/?scrollTo=gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Gallery</Link>
  <Link to="/?scrollTo=faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">FAQ</Link>
  <Link to="/?scrollTo=contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</Link>
          </div>
          <hr/>
          <div className='grid justify-center items-center'>
          <a href="https://rkcl.vmou.ac.in/" target='_main'className="text-gray-700 hover:text-blue-600  py-2 px-4 text-lg font-medium">RS-CIT Result</a>
          <a href="https://www.vmou.ac.in/notices-answer-keys" target='_main' className="text-gray-700 hover:text-blue-600 px-4 py-2 text-lg font-medium">RS-CIT Answer Key</a>
          <a href="https://ilearn.myrkcl.com/" target='_main' className="text-gray-700 hover:text-blue-600 px-4 py-2 text-lg font-medium">RS-CIT Assessment</a>
          <Link to='vmou-assignments' className="text-gray-700 hover:text-blue-600 px-4 py-2 text-lg font-medium">VMOU Assigment</Link>
        </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;