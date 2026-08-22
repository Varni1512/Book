import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import MeetTheAuthor from '../Components/MeetTheAuthor';
import TheSeries from '../Components/TheSeries';
import WorldOfBlueLatitude from '../Components/WorldOfBlueLatitude';
import ComingSoon from '../Components/ComingSoon';
import FreeBooksSection from '../Components/FreeBooksSection';
import TestimonialSlider from '../Components/TestimonialSlider';
import BlogInsights from '../Components/BlogInsights';
import MysteryCTA from '../Components/MysteryCTA';
import Footer from '../Components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <MeetTheAuthor />
      <TheSeries />
      <WorldOfBlueLatitude />
      <ComingSoon />
      <FreeBooksSection />
      <TestimonialSlider />
      <BlogInsights />
      <MysteryCTA />
      <Footer />
    </>
  );
};

export default Home;
