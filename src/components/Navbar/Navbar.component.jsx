import MenuIcon from '../../assets/MenuIcon.svg'
import Close from '../../assets/close.svg'
import './Navbar.css'

const Navbar = () => {
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

        <div className='menu-icon'>
          <img src={MenuIcon} alt='' />
        </div>
      </nav>
      <div className='mobile-menu-container'>
        <div className='close-icon'>
          <img src={Close} alt='' />
        </div>
        <ul className='menu-items'>
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
      </div>
    </>
  )
}

export default Navbar
