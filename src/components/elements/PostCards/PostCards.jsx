import React from 'react'
import './PostCards.css'
import { Link } from "react-router-dom";

const PostCards = () => {
  return (
    <>
    <div className="postcard-area">
        <div className="postcard-placeholder"></div>
        <div className="postcard-date"><img src="public/icons/calender.svg" /><span className="postcard-date-text">August 17, 2025</span></div>
        <div className="postcard-title"><h6>Free Up Your Space, Free Up Your Life: The Power of Decluttering</h6></div>
        <div className="postcard-text"><span>Clutter doesn’t just take up physical space—it weighs on your mind too. Studies show that a tidy environment can reduce stress and increase focus, helping you feel more in control of your daily life. Decluttering starts with small steps: sort your belongings, decide what to keep, and store away items you don’t use regularly. Renting a storage unit can help you keep your home organized without having to part with valuable possessions. By freeing up your living space, you also create mental space for creativity, relaxation, and productivity. A cleaner space truly leads to a clearer mind.</span></div>
        <Link className="postcard-link" to="#">Read more<img src="public/icons/arrow-right-yellow.svg" /></Link>
    </div>
    </>
  )
}

export default PostCards