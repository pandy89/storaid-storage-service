import React from 'react'
import HeroSubPage from '../components/sections/Hero/HeroSubPage'
import WhyUS from '../components/sections/WhyChooseUS/WhyUs'
import Booking from '../components/sections/Booking/Booking'
import Subscribe from '../components/sections/Subscribe/Subscribe'


const BookingPage = () => {
  return (
    <>
    <HeroSubPage title="Booking" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
    {/* BookingUnit */}
    <WhyUS />
    <Booking /> 
    {/* FAQ */}
    <Subscribe />
    </>
  )
}

export default BookingPage