import React from 'react'
import './BookingForm.css'
import Button from '@elements/Button/Button'

const BookingForm = () => {
  return (
    <>
    <form className="form-area" noValidate>
        <div className="booking-form">
            <div className="form-group" id="yourName">
                <label className="required">Your Name</label>
                <input type="text" name="text" placeholder="Your Name" required/>
                <div className="yourName-error" class="error"></div>
            </div>
            <div className="form-group" id="email">
                <label className="required">Email</label>
                <input type="email" name="email" placeholder="Email" required />
                <div className="email-error" class="error"></div>
            </div>
            <div className="form-group" id="unit">
                <label className="required">Choose Unit</label>
                <input type="text" name="unit" placeholder="Choose Unit" />
                <div className="unit-error" class="error"></div>
            </div>
            <div className="form-group" id="storage">
                <label className="required">Storage purpose</label>
                <textarea type="text" name="storage" placeholder="Describe your storage purpose so that we can match your request" required />
                <div className="storage-error" class="error"></div>
            </div>
            <div id="submit-button">
                <Button type="submit" name="Book Unit" />                   
            </div>
        </div>
    </form>
    </>
  )
}

export default BookingForm