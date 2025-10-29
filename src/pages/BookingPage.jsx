import React from 'react'
import HeroSubPage from '../components/sections/HeroSubPage'

import BookStorage from '../components/sections/BookStorage'
import Subscribe from '../components/sections/Subscribe'
import WhyUs from '../components/sections/WhyUs'


const BookingPage = () => {
  return (
    <>
    <HeroSubPage title="Booking" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
    {/* BookingUnit */}
    <WhyUs />
    <BookStorage /> 
    {/* FAQ */}
    <Subscribe />
    </>
  )
}

export default BookingPage