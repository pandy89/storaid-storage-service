import React from 'react'
import './GetInTouch.css'
import ContactForm from '../../forms/ContactForm'

const GetInTouch = () => {
  return (
    <>
    <div className="container">
        <div className="get-in-touch-area">
            <div className="get-in-touch-content">
                <h4 className="get-in-touch-subheadline">Get in Touch</h4>
                <h3 className="get-in-touch-headline">Get Personalized Assistance – Contact Us</h3>
                <span className="get-in-touch-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
                <div className="get-in-touch-placeholder"></div>            
            <div className="get-in-touch-contact-form">
                <ContactForm />
            </div></div>
        </div>
    </div>
    </>
  )
}

export default GetInTouch