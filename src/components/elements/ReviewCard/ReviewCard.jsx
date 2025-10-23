import React from 'react'
import './ReviewCard.css'

const ReviewCard = () => {
  return (
    <div>
        <div className="card-area">
            <div className="container">
                <div className="card-content">
                    <div className="card-item">
                        <div className="stars">Stars</div>
                        <div className="review-text">The facility is clean, secure, and easy to access. I felt confident leaving my belongings here knowing they were protected and well cared for.</div>
                        <div className="user-info">
                            <div className="user-avatar"></div>
                            <div className="user-name-title">
                                <span className="user-name">Name</span>
                                <span className="user-title">Title</span>
                            </div>
                        </div>
                        <div className="testimonials-quots"><img src="/icons/quotation-marks.svg" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard