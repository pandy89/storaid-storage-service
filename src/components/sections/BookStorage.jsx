import React from 'react'

import Button from '@elements/Button'

const Booking = () => {
  return (
    <section id="booking">
        <div className="container">
            <div className="booking-area">
               <h3 className="booking-headline">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h3> 
               <span className="booking-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
               <div className="booking-button-box"><Button name="Book Now" aria-label="Book you storage now." /></div>
            </div>
        </div>
    </section>
  )
}

export default Booking