import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import MeetTheAuthor from './Components/MeetTheAuthor';
import TheSeries from './Components/TheSeries';
import WorldOfBlueLatitude from './Components/WorldOfBlueLatitude';
import ComingSoon from './Components/ComingSoon';
import TestimonialSlider from './Components/TestimonialSlider';
import BlogInsights from './Components/BlogInsights';
import MysteryCTA from './Components/MysteryCTA';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <MeetTheAuthor />
      <TheSeries />
      <WorldOfBlueLatitude />
      <ComingSoon />
      <TestimonialSlider />
      <BlogInsights />
      <MysteryCTA />
      <Footer />
    </>
  );
};

export default App;