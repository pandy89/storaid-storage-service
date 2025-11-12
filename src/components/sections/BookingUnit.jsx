import SectionTextBlockFull from '../elements/SectionTextBlockFull'
import BookingForm from '../elements/BookingForm'
import bookingUnitImage from '/image-5.png'

const BookingUnit = () => {
  return (
    <section>
        <div className="container">
            <div className="booking-unit-area">
            <SectionTextBlockFull subheadline="Booking Unit" headline="Book Your Storage Unit Now & Simplify Your Life!" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida." />
            <div className="booking-unit-content">
                <div className="booking-unit-image"><img src={bookingUnitImage} alt="Man strolling a cart with boxes on." /></div>
                <div><BookingForm /></div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default BookingUnit