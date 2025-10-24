import React from 'react'
import './BlogPost.css'
import PostCards from '@elements/PostCards/Postcards'



const BlogPost = () => {
  return (
    <>
    <section className="container">
        <div className="blogpost-area">
            <h4 className="blogpost-subheadline">Latest Blog and News</h4>
            <div className="blogpost-box">
                    <h3 className="blogpost-headline">Check Out Our Latest Blog and News Update</h3>
                    <span className="blogpost-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
            </div>
            <div className="blogpost-post">
                <PostCards />
                <PostCards />
                <PostCards />
            </div>

        </div>
    </section>
    
    
    </>
  )
}

export default BlogPost