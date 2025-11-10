import HeroSubPage from '../components/sections/HeroSubPage'
import BookStorage from '../components/sections/BookStorage'
import Subscribe from '../components/sections/Subscribe'
import WhyUs from '../components/sections/WhyUs'
import FaqSection from '../components/sections/FaqSection'
import BookingUnit from '../components/sections/BookingUnit'


const BookingPage = () => {
  return (
    <>
    <HeroSubPage title="Booking" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
    <BookingUnit />
    <WhyUs />
    <BookStorage /> 
    <FaqSection />
    <Subscribe />
    </>
  )
}

export default BookingPage