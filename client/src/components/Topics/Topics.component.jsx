import { useState } from 'react'
import { topics } from '../../assets/topics'
import bgElement1 from '../../assets/bgElement1.svg'
import './Topics.css'

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(topics[0].image)

  return (
    <section id='topics' className='black'>
      <div className='wrapper'>
        <h2>What will you learn?</h2>
        <div className='content-container'>
          <ul className='topics-list'>
            {topics.map(({ description, image }, id) => (
              <li key={id} onMouseEnter={() => setCurrentImage(image)}>
                {description}
              </li>
            ))}
          </ul>
          <div className='topic-image'>
            <img src={currentImage} />
          </div>
        </div>
        <img src={bgElement1} className='bg-element-1' />
      </div>
    </section>
  )
}

export default Topics
