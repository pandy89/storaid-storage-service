import React from 'react'
import HeroSubPage from '../components/sections/HeroSubPage';

import Brands from '../components/sections/Brands';
import Testimonials from '../components/sections/Testimonials';
import WhyUs from '../components/sections/WhyUs';
import Subscribe from '../components/sections/Subscribe';
import AboutUs from '../components/sections/AboutUs';


const AboutUsPage = () => {
  return (
    <>
      <HeroSubPage title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <AboutUs />
      <Brands />
      <Testimonials />
      <WhyUs /> 
      <Subscribe />
    </>
  )
}

export default AboutUsPage