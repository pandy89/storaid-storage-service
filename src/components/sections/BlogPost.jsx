import React, { useState, useEffect } from 'react'
import BlogPostCards from '@elements/BlogPostcards'

const BlogPost = () => {
  const [blogpost, setBlogpost] = useState([])
  
    const getBlogpost = async () => {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
      const data = await res.json()
      setBlogpost(data)
    }
  
    useEffect(() => {
      getBlogpost()
    }, [])
    


  return (
    <section id="blogpost-section">
      <div className="container">
      <div className="blogpost-area">
          <h4 className="blogpost-subheadline">Latest Blog and News</h4>
          <div className="blogpost-box">
              <h3 className="blogpost-headline">Check Out Our Latest Blog and News Update</h3>
              <span className="blogpost-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
          </div>
          <div className="blogpost-post">
            {
              blogpost.map((blogpost) => (
                <BlogPostCards key={blogpost.id} item={blogpost}/>
              ))
            }
          </div>
      </div>
      </div>
    </section>
  )
}

export default BlogPost