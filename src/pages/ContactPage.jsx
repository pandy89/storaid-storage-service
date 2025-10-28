import React from 'react'
import HeroSubPage from '../components/sections/Hero/HeroSubPage'
import GetInTouch from '../components/sections/GetInTouch/GetInTouch'
import FindUsOn from '../components/sections/FindUsOn/FindUsOn'




const ContactPage = () => {
  return (
    <div>
      <HeroSubPage title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."  />
      <GetInTouch />
      <FindUsOn />

      {/* FAQ */}
    </div>
  )
}

export default ContactPage