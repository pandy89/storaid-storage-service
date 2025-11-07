import React from 'react'
import SectionTextBlockFull from '../elements/SectionTextBlockFull'
import BookingForm from '../elements/BookingForm'

const BookingUnit = () => {
  return (
    <section>
        <div className="container">
            <div className="booking-unit-area">
            <SectionTextBlockFull subheadline="Booking Unit" headline="Book Your Storage Unit Now & Simplify Your Life!" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida." />
            <div className="booking-unit-content">
                <div className="booking-unit-image"></div>
                <div><BookingForm /></div>
            </div>
            </div>
        </div>
        
        
    </section>
  )
}

export default BookingUnit