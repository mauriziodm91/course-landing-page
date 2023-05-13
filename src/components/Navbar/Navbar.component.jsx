import { useState } from 'react'

import MenuIcon from '../../assets/MenuIcon.svg'
import Close from '../../assets/close.svg'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav>
        <a href='#' className='logo'>
          Sound<span className='red'>DZing</span>
        </a>
        <ul>
          <li>
            <a href='#topics'>Course Details</a>
          </li>
          <li>
            <a href='#info'>About</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#testimonials'>Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsOpen(true)} className='menu-icon'>
          <img src={MenuIcon} alt='' />
        </div>
      </nav>
      <div className={`mobile-menu-container ${isOpen ? 'active' : ''}`}>
        <div onClick={() => setIsOpen(false)} className='close-icon'>
          <img src={Close} alt='' />
        </div>
        <ul className='menu-items'>
          <li>
            <a href='#topics' onClick={() => setIsOpen(false)}>
              Course Details
            </a>
          </li>
          <li>
            <a href='#info' onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href='#blog' onClick={() => setIsOpen(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href='#testimonials' onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
