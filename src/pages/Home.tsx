import React from 'react';
import Hero from '../components/home/Hero';
import CourseCards from '../components/home/CourseCards';
import Features from '../components/home/Features';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import ContactSection from '../components/home/ContactSection';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [location.search]);




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