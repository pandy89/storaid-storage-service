import React from 'react'
import './Testimonials.css'
import ReviewCard from '../../elements/ReviewCard/ReviewCard'

const Testimonials = () => {
  return (
    <>
    <section className="testimonials-area">
        <div className="container">
            <div className="testimonials-content">
                <h4 className="testimonials-headling">Testimonials</h4>
                <h3 className="testimonials-subheadline">See What Our Client Have to Say</h3>
                <span className="testimonials-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
            </div>
                <div className="testimonials-card">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials