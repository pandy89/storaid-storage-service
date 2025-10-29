import React from 'react'
import HeroSubPage from '../components/sections/HeroSubPage'
import OurServices from '../components/sections/OurServices'
import Testimonials from '../components/sections/Testimonials'
import BookStorage from '../components/sections/BookStorage'
import Subscribe from '../components/sections/Subscribe'


const ServicePage = () => {
  return (
    <>
      <HeroSubPage title="Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  />
      <OurServices />
      <Testimonials />
      {/* FAQ */}
      <BookStorage/>
      <Subscribe />
    </>
  )
}

export default ServicePage