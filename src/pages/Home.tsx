import React from 'react';
import Hero from '../components/home/Hero';
import CourseCards from '../components/home/CourseCards';
import Features from '../components/home/Features';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import ContactSection from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <CourseCards />
      <Features />
      <Gallery />
      <FAQ />
      <ContactSection />
    </div>
  );
};