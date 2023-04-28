import { entries } from '../../assets/blog'
import './Blog.css'

const Blog = () => {
  return (
    <section id='blog' className='pink'>
      <div className='wrapper'>
        <h2 className='light'>Latest Posts</h2>
        <div className='content-container'>
          {entries.map(({ tag, description, image }, id) => (
            <div key={id} className='post'>
              <div className='tag'>{tag}</div>
              <a href='#'>
                <img src={image} alt='' />
              </a>

              <a href='#'>
                <h3 className='post-title'>{description}</h3>
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
