import React from 'react'
import HeroSubPage from '../components/sections/Hero/HeroSubPage'
import OurServices from '../components/sections/OurServices/OurServices'
import Testimonials from '../components/sections/Testimonials/Testimonials'
import Booking from '../components/sections/Booking/Booking'
import Subscribe from '../components/sections/Subscribe/Subscribe'


const ServicePage = () => {
  return (
    <>
      <HeroSubPage title="Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  />
      <OurServices />
      <Testimonials />
      {/* FAQ */}
      <Booking />
      <Subscribe />
    </>
  )
}

export default ServicePage