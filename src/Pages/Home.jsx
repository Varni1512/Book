import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import SeoSection from '../Components/SeoSection';
import MeetTheAuthor from '../Components/MeetTheAuthor';
import TheSeries from '../Components/TheSeries';
import WorldOfBlueLatitude from '../Components/WorldOfBlueLatitude';
import ComingSoon from '../Components/ComingSoon';
import FreeBooksSection from '../Components/FreeBooksSection';
import TestimonialSlider from '../Components/TestimonialSlider';
import BlogInsights from '../Components/BlogInsights';
import MysteryCTA from '../Components/MysteryCTA';
import Footer from '../Components/Footer';
import AnimateOnScroll from '../Components/AnimateOnScroll';

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
      <AnimateOnScroll delay={0}>
        <Hero />
      </AnimateOnScroll>
      <SeoSection />
      <AnimateOnScroll delay={0.1}>
        <MeetTheAuthor />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <TheSeries />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <WorldOfBlueLatitude />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <ComingSoon />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <FreeBooksSection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <TestimonialSlider />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <BlogInsights />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <MysteryCTA />
      </AnimateOnScroll>
      <Footer />
    </>
  );
};

export default Home;
