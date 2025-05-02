import { useLocation } from 'react-router-dom';
import { courses } from '../data/courses';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';




export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};




export default function CourseDetails() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const course = courses.find((c) => c.id === Number(id));
  const [showMore, setShowMore] = useState(false);

  if (!course) {
    return <div className="p-6 text-red-600 text-center text-lg font-semibold">🚫 Course not found</div>;
  }

  const toggleDescription = () => setShowMore(!showMore);
  const maxLength = 150;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-10 px-4 flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <div className="bg-blue-600 text-white text-sm font-bold inline-block px-3 py-1 rounded-full mb-4 shadow">
            {course.medium} Course
          </div>
          
            { course.demo &&  
          <div >
            <video className="w-full h-64 object-cover object-center rounded-lg my-4" controls controlsList='nodownload' autoPlay >
                  <source src={course.demo} type='video/mp4' />
                </video>
                
          </div>}
          <h2 className="text-2xl font-bold text-green-700 leading-snug mb-4">{course.title}</h2>

          {/* Description with Show More */}
          <p className="text-gray-700 text-sm mb-4">
            {showMore || course.description.length <= maxLength
              ? course.description
              : `${course.description.slice(0, maxLength)}...`}
            {course.description.length > maxLength && (
              <span
                onClick={toggleDescription}
                className="text-blue-600 cursor-pointer ml-1 hover:underline"
              >
                {showMore ? 'Show Less' : 'Show More'}
              </span>
            )}
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">⏱️</span> Course Duration:
              </div>
              <span className="font-bold text-black">25 Hrs</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">⏳</span> Assessment Duration:
              </div>
              <span className="font-bold text-black">60 Min</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏷️</span> Price:
              </div>
              <span className="line-through text-gray-500 font-medium">₹{course.price + 2000}</span>
            </div>

            <div className="bg-green-100 px-4 py-2 rounded-xl flex justify-between items-center font-semibold text-green-700">
              <div className="flex gap-2 items-center">
                <span className="text-lg">%</span> Offer Price
              </div>
              <span className="text-lg">₹{course.price}</span>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl flex items-center gap-3 text-sm font-medium">
              <span className="text-lg">📜</span> You will get a Certificate of Merit
            </div>
            { course.medium == 'ONLINE' ?  
            <a href={course.payLink} target='_main'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <span className="text-lg">🛒</span> Buy Now
            </motion.button></a>
            :
            <a href={`https://api.whatsapp.com/send?phone=9351433289&text=i want to join in ${course.title}`} target='_main'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <span className="text-lg">🛒</span> Join Now
            </motion.button></a>
             }
          </div>
        </div>
      </motion.div>
    </div>
  );
}
