import ContactForm from '../elements/ContactForm'
import getInTouchImage from '/image-4.png'

const GetInTouch = () => {
  return (
    <>
    <section id="get-in-touch-area">
      <div className="container">
          <div className="get-in-touch-content">
            <h4 className="get-in-touch-subheadline">Get in Touch</h4>
            <h3 className="get-in-touch-headline">Get Personalized Assistance – Contact Us</h3>
            <span className="get-in-touch-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
            <div className="get-in-touch-placeholder"><img src={getInTouchImage} /></div>            
            <div className="get-in-touch-contact-form">
            <ContactForm />
            </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default GetInTouch