import React from 'react'

const BookingForm = () => {

  return (
    <form className="bookingform-area" noValidate>
        <div className="bookingform-content">     
            <div className="form-group" id="bookingform-name">
                <label className="required">Your Name</label>
                <input className="bookingform-input" type="text" name="text" placeholder="Your Name" required/>
                <div className="error-message"></div>
            </div>
             <div className="form-group" id="bookingform-email">
                <label className="required">Email</label>
                <input className="bookingform-input" type="email" name="email" placeholder="Email" required />
                <div className="error-message"></div>
            </div>
            <div className="form-group" id="bookingform-unit">
                <label className="required">Choose Unit</label>
                <input className="bookingform-input" type="text" name="unit" placeholder="Choose Unit" />
                <div className="error-message"></div>
            </div>
            <div className="form-group" id="bookingform-storage">
                <label className="required">Storage purpose</label>
                <textarea className="bookingform-textarea" type="text" name="storage" placeholder="Describe your storage purpose so that we can match your request" required />
                <div className="error-message"></div>
            </div>
            <button className="btn bookingform-button" type="submit">Book Unit</button>
        </div>        
    </form>
  )
}

export default BookingForm