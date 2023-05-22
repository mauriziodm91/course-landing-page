import { useState, useEffect } from 'react'
import { client, urlFor } from '../../utils/sanityClient'
import './Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const query = '*[_type == "posts"] '
    client.fetch(query).then((data) => {
      setPosts(data)
    })
  }, [])

  return (
    <section id='blog' className='pink'>
      <div className='wrapper'>
        <h2 className='light'>Latest Posts</h2>
        <div className='content-container'>
          {posts.map(({ title, label, thumbnail }, id) => (
            <div key={id} className='post'>
              <div className='tag'>{label}</div>
              <a href='#'>
                <img src={urlFor(thumbnail)} alt='' />
              </a>

              <a href='#'>
                <h3 className='post-title'>{title}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className='btn-container'>
          <a href='#' className='all-posts-btn'>
            All Posts
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
