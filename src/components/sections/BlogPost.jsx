import { useState, useEffect } from 'react'
import BlogPostCards from '@elements/BlogPostCards'
import SectionTextBlockFull from '../elements/SectionTextBlockFull'

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
          <SectionTextBlockFull headline="Check Out Our Latest Blog and News Update" subheadline="Latest Blog and News" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."/>
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