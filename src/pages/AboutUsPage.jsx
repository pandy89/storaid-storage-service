import React from 'react'
import HeroSubPage from '../components/sections/Hero/HeroSubPage';
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Brand from '../components/sections/Brand/Brand';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import WhyUs from '../components/sections/WhyChooseUS/WhyUs';
import Subscribe from '../components/sections/Subscribe/Subscribe';


const AboutUsPage = () => {
  return (
    <>
      <HeroSubPage title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <AboutUs />
      <Brand />
      <Testimonials />
      <WhyUs/>
      <Subscribe />
    </>
  )
}

export default AboutUsPage