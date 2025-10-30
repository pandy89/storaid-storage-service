import React, { useState, useEffect } from 'react'
import Testimonial from '../elements/Testimonial'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  const getTestimonials = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonials(data)
  }

  useEffect(() => {
    getTestimonials()
  }, [])

  return (
    <>
    <section id="testimonials-area" aria-label="Background with storagepersonal with a green grandient">
        <div className="container">
          <div className="testimonials-content">
            <h4 className="testimonials-headling">Testimonials</h4>
            <h3 className="testimonials-subheadline">See What Our Client Have to Say</h3>
            <span className="testimonials-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
          </div>
          <div className="testimonials-card">
            {
              testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} item={testimonial}/>
              ))
            }
          </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials