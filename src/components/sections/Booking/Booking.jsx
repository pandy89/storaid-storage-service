import React from 'react'
import './Booking.css'

import Button from '@elements/Button/Button'

const Booking = () => {
  return (
    <>
    <section className="booking">
        <div className="container">
            <div className="booking-area">
               <h3 className="booking-headline">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h3> 
               <span className="booking-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
               <div className="button-box"><Button name="Book now"/></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Booking