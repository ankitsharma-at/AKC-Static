import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { courses } from '../../data/courses';
import { Star, Users, Clock } from 'lucide-react';

const CourseCards: React.FC = () => {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? courses 
    : courses.filter(courses => courses.medium === filter);
  return (
    <section id="courses" className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Top Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover high-quality courses taught by industry experts designed to help you achieve your goals.
          </p>
          
        </div>
        <div className="flex flex-wrap justify-center gap-2 my-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('ONLINE')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'ONLINE' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Online
            </button>
            <button 
              onClick={() => setFilter('OFFLINE')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'OFFLINE' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Offline
            </button>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((course) => (
           <Link to={`/course?id=${course.id}`}> 
           <div 
              key={course.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            ><div className='bg-green-500 my-4 rounded-md flex items-center justify-center text-lg text-violet-50 font-bold animate-bounce w-full '>{course.tagLine}
            </div>
              <div className="relative">
              
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900 hover:text-blue-600 transition-colors">{course.title}</h3>
                
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{course.rating} ({Math.floor(course.students / 10)} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-blue-500 mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                
                {/* <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 text-blue-500 mr-1" />
                    <span>3 Months</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {course.id * 8 + 12} lessons
                  </div>
                </div> */}
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-center">
                  {/* <div className="flex items-center">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + course.id}.jpg`} 
                      alt={course.instructor} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">{course.instructor}</span>
                  </div> */}
                  <div className="*:font-bold text-lg text-blue-600">Rs {course.price}</div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">


  <button className="text-blue-600 hover:underline">Learn More</button>


              </div>
            </div></Link>
          ))}
        </div>
        
      

        {/* Supabase Integration Comment */}
        {/* 
          Supabase Integration:
          - Store course data in Supabase database
          - Implement course filtering by category, price, rating
          - Add user enrollment tracking
          - Enable course bookmarking/favorites
        */}
      </div>
    </section>
  );
};

export default CourseCards;