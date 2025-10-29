import React from 'react'
import Button from '@elements/Button'

const ContactForm = () => {
  return (
    <>
    <form className="form-area" noValidate>
        <div className="contact-form">
            <div className="form-group" id="yourName">
                <label className="required">Your Name</label>
                <input type="text" name="text" placeholder="Your Name" required/>
                <div className="yourName-error error"></div>
            </div>
            <div className="form-group" id="email">
                <label className="required">Email</label>
                <input type="email" name="email" placeholder="Email" required />
                <div className="email-error error"></div>
            </div>
            <div className="form-group" id="telephone">
                <label>Telephone</label>
                <input type="text" name="telephone" placeholder="Telephone" />
                <div className="telephone-error error"></div>
            </div>
            <div className="form-group" id="subject">
                <label className="required">Subject</label>
                <input type="text" name="subject" placeholder="Subject" required />
                <div className="subject-error error"></div>
            </div> 
            <div className="form-group" id="comments">
                <label className="required">Comments / Questions</label>
                <textarea type="text" name="comments" placeholder="Comments" required />
                <div className="comment-error error"></div>
            </div>
            <div id="submit-button">
                <Button type="submit" name="Submit" />                
            </div>
        </div>
    </form>
    </>
  )
}

export default ContactForm