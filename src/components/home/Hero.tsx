// import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className=" inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-indigo-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            आपकी सफलता,
            <br />
              <span className="text-blue-200"> हमारी जिम्मेदारी !</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg animate-fadeIn animation-delay-150">
            हमारे साथ जुड़ें और अपने करियर को उन्नति की ओर ले जाएं, जानते हुए कि आपकी सफलता हमारी प्राथमिकता है।
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-300">
             <a href="#courses"> <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Skill Courses By Arvind Sir
              </button></a>
              <a href='https://youtu.be/B1RdjnQ0xqo?si=s_HSO8S2DoUy94ra' target='_main'>
              <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </button></a>
            </div>
        
          </div>
          <div className="relative z-10 lg:ml-10 animate-fadeIn animation-delay-600">
             <div className='bg-lime-600 rounded-s-md flex items-center justify-center text-lg text-violet-50 font-bold animate-bounce '>Tally hai to Career Set Hai !</div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
             
              {/* <img 
                src="https://res.cloudinary.com/danqalwag/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745669174/IMG-20250426-WA0005-removebg-preview_uwiuer.png" 
                alt="Students learning together"  */}
                <video className="w-full h-64 object-cover object-center" loop autoPlay muted>
                  <source src='https://res.cloudinary.com/danqalwag/video/upload/v1745736624/hxllumwczgxztke4bxhl.mp4' type='video/mp4' />
                </video>
               
              
              <div className="p-6 bg-white text-gray-800">
                <div className="flex min-w-full  justify-around mb-4"> 
                  <span className="text-green-600 text-sm font-medium flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  Classes Available</span>
                <span className='bg-green-500 p-3 items-end rounded-full  text-white animate-bounce '> <a href='https://api.whatsapp.com/send?phone=9351433289&text='>Apply now</a></span>
                </div>
                <h3 className="text-xl font-bold mb-1">Tally Prime GST(Accounting Expert Course) ONLINE</h3>
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
                  <span className="text-blue-600 font-bold">Rs. 4499.0</span>
                 
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
      {/* promotion section */}
      <VmouCtaBanner/>


    <div className="flex justify-between flex-col md:flex-row gap-20 p-6  rounded-xl shadow-lg max-w-5xl mx-auto mt-10">
      
      {/* Left: eBook Card */}
      <a href="https://rzp.io/l/SWQOb0iY"
          target="_main" >
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center text-black max-w-md justify-center ">
        <div className='bg-green-500 rounded-md flex items-center justify-center text-lg text-violet-50 font-bold animate-bounce w-full '>New Launch e-book!</div>
        <img
          src="https://res.cloudinary.com/danqalwag/image/upload/v1746031116/IMG-20250430-WA0002_tr6xrt.jpg"
          alt="Book Cover"
          className="rounded-lg mb-4 w-40 h-auto"
        />
        <h2 className="text-xl font-bold mb-2">Notes for MICROSOFT WORD, EXEL ,POWERPOINT</h2>
        <p className="text-gray-600 mb-4 text-lg">Only ₹49</p>
        
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">Buy Now</button> 
         </div> 
        </a>
      

      {/* Right: Channel Links */}
      <div className="flex-1 bg-slate-100 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center gap-4 text-black">
        <h2 className="text-xl  font-semibold mb-4">Follow Us</h2>
        <div className="bg-white rounded-lg shadow-lg p-7 flex justify-center items-center text-center">
        <a
          href=" https://youtube.com/@arvindamkiclass427?si=d62LFS_JPg1rso8B"
          target="_blank"
          
          className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-2xl w-full text-lg font-medium transition"
        >
         <i className="fa fa-youtube text-4xl text-white my-float m-2"></i>
          Visit YouTube Channel
        </a></div>
        <div className=" bg-white rounded-lg shadow-md p-6 flex justify-center items-center text-center">
        <a
          href="https://whatsapp.com/channel/0029VaIXYNV42DceFIICHv0K"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-2xl w-full text-lg font-medium transition"
        >
          <i className="fa fa-whatsapp text-4xl text-white my-float m-2"></i>
          Join WhatsApp Channel
        </a></div>
      </div>
    </div>

      
      {/* Wave separator */}
      <div className=" ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
    </section>
  );
};

const VmouCtaBanner = () => {
  return (
    <>
      <section className="relative overflow-hidden py-10 px-4 bg-gradient-to-r from-orange-400 to-red-600 text-white rounded-md mx-6">
        {/* Glowing line animation background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 w-full h-1 bg-white animate-lineMove"></div>
          <div className="absolute bottom-0 w-full h-1 bg-white animate-lineMove"></div>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-gray-900 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 animate-fadeIn border-2 border-dashed border-yellow-300">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                🔥 VMOU Assignment 2025 Ready! Get Yours Now!
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mt-2">
                ✍️ अब अपनी VMOU असाइनमेंट समय पर और सही फॉर्मेट में प्राप्त करें!
              </p>
            </div>
            <a
              href="/vmou-assignments"
              className="w-full sm:w-auto inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg ring-2 ring-indigo-300 transition duration-300 animate-bounce"
            >
              Click Here / यहाँ क्लिक करें
            </a>
          </div>
        </div>
      </section>

      {/* Add custom animation styles */}
      <style>
        {`
        @keyframes lineMove {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-lineMove {
          background-image: linear-gradient(to right, white, transparent);
          animation: lineMove 4s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        `}
      </style>
    </>
  );
};



export default Hero;