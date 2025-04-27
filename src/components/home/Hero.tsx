import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-indigo-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Expand Your Skills, <br />
              <span className="text-blue-200">Elevate Your Future</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg animate-fadeIn animation-delay-150">
              Discover expert-led courses across tech, business, creative, and more. 
              Join thousands of students learning on Arvindam ki Class today.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-300">
             <a href="#courses"> <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Browse Courses
              </button></a>
              <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
         
          </div>
          <div className="relative z-10 lg:ml-10 animate-fadeIn animation-delay-600">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* <img 
                src="https://res.cloudinary.com/danqalwag/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745669174/IMG-20250426-WA0005-removebg-preview_uwiuer.png" 
                alt="Students learning together"  */}
                <video className="w-full h-64 object-cover object-center" loop autoPlay playsInline>
                  <source src='https://res.cloudinary.com/danqalwag/video/upload/v1745736624/hxllumwczgxztke4bxhl.mp4' type='video/mp4' />
                </video>
               
              
              <div className="p-6 bg-white text-gray-800">
                <div className="flex items-center mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-green-600 text-sm font-medium"> Classes Available</span>
                 <a href='https://api.whatsapp.com/send?phone=9351433289&text='><span className='bg-green-500 p-3 rounded-full ml-20 text-white animate-bounce'>Apply now</span></a> 
                </div>
                <h3 className="text-xl font-bold mb-1">Tally Prime GST(Accounting Expert Course)</h3>
                <p className="text-gray-600 mb-4">Learn in-demand skills in Computerised Accounting, Finance, Administration and discover nre career opportunities</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i*100} flex items-center justify-center text-xs font-bold text-white`}>
                        {i}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                      +3k
                    </div>
                  </div>
                  <span className="text-blue-600 font-bold">Rs. 7500</span>
                 
                </div>
                 <div className='mt-6 flex items-center justify-center'>
                   <a href='https://tallyeducation.com/tepl/certificate/' target='_main'> <button className='bg-indigo-600 px-2 py-2 rounded text-white' >
                      verify your Certificate
                    </button></a>
                  </div>
              </div>
            </div>
            {/* Course card stacked effect */}
            <div className="absolute -bottom-10 -left-10 right-10 top-10 border-2 border-blue-300 rounded-xl -z-10 opacity-70"></div>
            <div className="absolute -bottom-5 -left-5 right-5 top-5 border-2 border-purple-300 rounded-xl -z-10 opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;