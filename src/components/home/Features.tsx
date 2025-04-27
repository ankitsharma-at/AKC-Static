import React from 'react';
import { features } from '../../data/features';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn With EduSphere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers the best learning experience with expert instructors and comprehensive resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-3 p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to start your learning journey?</h3>
              <p className="text-blue-100 text-lg mb-8">
                Join thousands of students already learning on our platform. Get unlimited access to all courses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                      alt="Student" 
                      className="w-10 h-10 rounded-full border-2 border-blue-600"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-white font-bold">10,000+</span> students already enrolled
                </div>
              </div>
            </div>
            <div className="col-span-2 hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy students learning" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;