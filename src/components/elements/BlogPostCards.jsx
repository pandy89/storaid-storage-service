import React from 'react'
import { Link } from "react-router-dom";

const BlogPostCards = ({item}) => {  
  /* Change the date from 2025-04-08T00:00:00 to 8 April, 2025 and remove the time. With help from Chat GPT I created the dates change. */
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
      .replace(/ (\d{4})$/, ", $1"); 
  };


  return (
    <>
      <div className="postcard-area">
        <div className="postcard-content">
          <img className="postcard-image" src={item.imageUrl} alt="blogpostimage" />
          <div className="postcard-date">
            <img src="icons/calender.svg" alt="Calender icon" /><span className="postcard-date-text">{formatDate(item.created)}</span>
          </div>
        <div className="postcard-title">
          <h6>{item.title}</h6>
        </div>
        <div className="postcard-text">
          <span>{item.description}</span>
        </div>
        <Link className="postcard-link" to="/">Read more<img src="icons/arrow-right-yellow.svg" alt="Arrow icon to read more about a Blogpost or Newspost" /></Link>
      </div>
      </div>
    </>
  )
}

export default BlogPostCards