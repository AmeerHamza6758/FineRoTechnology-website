import React from 'react';
import './FrontendDesign.css'
import { Link, Outlet } from 'react-router-dom';
import logo1 from '../../src/Assets/Images/logo1.png'


const Navbar = () => {
  return (
    <>
      <header>
        <div className='nav-head'>
          <div className='logo'>
            <img src={logo1} alt='logo' />
          </div>
          <div className='nav-items'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='product' className='nav-link'>Products</Link>
            <Link to='contact' className='nav-link'>Contact Us</Link>
            <Link to='footer' className='nav-link'>About Us</Link>
          </div>
          
          <div className='nav-items'>
            <Link to='login' className='nav-link'>Login</Link>
            <Link to='signup' className='nav-link'>Sign Up</Link>
          </div>
        </div>
      </header>
      <Outlet/>
      <footer>
        <div className='footer'>
          <div className='footer-left'>
            <div>
              <h2>Contact Us</h2>
            </div>
            <div className='contact-detail'>
              <Link to="@">
                <span className="material-symbols-outlined icon1">location_on</span>
                <span>Khanpur Adda, Rahim Yar khan, Pakistan</span>
              </Link>
              <Link to="@">
                <span className="material-symbols-outlined icon2">phone_in_talk</span>
                <span>+9304-7533 611</span>
              </Link>
              <Link to="@">
                <span className="material-symbols-outlined icon3">mail</span>
                <span>finetech@yahoo.com</span>
              </Link>
            </div>
          </div>

          <div className='footer-right'>
            <div>
              <h2>About This Company</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas rem natus, accusantium reprehenderit tenetur consectetur quo ratione corporis at aut amet velit corrupti quae commodi unde neque enim perferendis.</p>
            </div>
            <div className='social-icons'>
              <h1>Follow us ⫸</h1>
              <Link><i className="ri-facebook-box-fill"></i></Link>
              <Link><i className="ri-discord-fill"></i></Link>
              <Link><i className="ri-twitter-fill"></i></Link>
              <Link><i className="ri-linkedin-box-fill"></i></Link>
            </div>
          </div>
        </div>
        <center className='bottom-footer'>
          <span> Ameer hamza 2023 &#169;</span>
        </center>
      </footer>
    </>
  );
}

export default Navbar;
