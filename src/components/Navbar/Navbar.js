import React,{useState} from 'react';
import logoImg from '../../images/logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const handleNavbar =()=>setToggle(!toggle)
  return (
    <nav className='navbar ' id='navbar'>
      <div className='container navbar-content  flex'>
        <div className='brand-and-toggler flex flex -sb'>
          <Link to='/' className='navbar-brand flex'>
          <img src={logoImg} alt='/'/>
          <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type='button'  className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{color: `${toggle ? '#fff': '#010101'}`}}/>
          </button>
        </div>
        <div className={toggle ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='book' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About
              </Link>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar