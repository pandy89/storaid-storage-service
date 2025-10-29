import React from 'react'
import Button from '@elements/Button'

const Subscribe = () => {

  return (
    <section className="subscribe">
        <div className="container">
            <div className="subscribe-area">
                <div className="subscribe-content">
                    <h3>Subscribe Our Newletter</h3>
                    <span>Subscribe to our newsletter to receive early discount offers, updates and info</span>
                </div>
                <div className="subscribe-form">
                  <div>
                    <input className="input-field-subscribe" name="subscribe" type="email" placeholder="Enter your email address *" id="inputField" required /><span className="asterisk_required_field"></span>
                    <div className="comment-error error"></div>
                  </div>
                  <Button type="submit" name="Submit" aria-label="Submit to our newsletter" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe