import React from 'react'
import HeroSubPage from '../components/sections/HeroSubPage'
import GetInTouch from '../components/sections/GetInTouch'
import FindUsOn from '../components/sections/FindUsOn'
import Subscribe from '../components/sections/Subscribe'
import FaqSection from '../components/sections/FaqSection'




const ContactPage = () => {
  return (
    <div>
      <HeroSubPage title="Contact Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  />
      <GetInTouch />
      <FindUsOn />
      <FaqSection />
      <Subscribe /> 
    </div>
  )
}

export default ContactPage