import React from 'react'
import HeroSubPage from '../components/sections/Hero/HeroSubPage';
import AboutUs from '../components/sections/AboutUs/AboutUs'

const AboutUsPage = () => {
  return (
    <div>
        <HeroSubPage title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        <AboutUs />
    </div>
  )
}

export default AboutUsPage