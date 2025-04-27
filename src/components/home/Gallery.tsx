import React, { useState } from 'react';
import { galleryImages } from '../../data/gallery';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Campus Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a glimpse of our vibrant community, state-of-the-art facilities, and engaging learning environments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
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
              onClick={() => setFilter('campus')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'campus' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Campus
            </button>
            <button 
              onClick={() => setFilter('students')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'students' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Students
            </button>
            <button 
              onClick={() => setFilter('facilities')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'facilities' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Facilities
            </button>
            <button 
              onClick={() => setFilter('events')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'events' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Supabase Integration Comment */}
        {/* 
          Supabase Integration:
          - Store gallery images in Supabase storage
          - Implement user-generated content uploads
          - Add tagging and metadata for better organization
          - Enable admins to manage gallery through dashboard
        */}
      </div>
    </section>
  );
};

export default Gallery;