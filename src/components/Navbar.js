import React from 'react'

export const Navbar = props => (
  <div>
    <nav className='navbar navbar-light navbar-toggleable-md bg-faded' id='navbar'>
      <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarCollapse'> <span className='navbar-toggler-icon' /> </button>
      <a className='navbar-brand'>
        <h2><img src='https://i.imgur.com/i9nQvGr.jpg' alt='Logo' />
        </h2> </a>
      <div className='collapse navbar-collapse flex-column ml-lg-0 ml-3' id='navbarCollapse'>

        {/* <a className="btn btn-sm btn-primary" href="#">Log In</a>
                    <a className="btn btn-sm btn-success" href="#">Create Account</a> */}

        <div className='ml-auto search-bar'>
          <div className='input-group'>
            <input className='form-control' type='text' placeholder='Enter Product or Catalog #' />
            <span className='input-group-btn'>
              <button className='btn btn-secondary' type='button'><i className='fa fa-search' /> Search</button>
            </span>
          </div>
        </div>
        <ul className='navbar-nav flex-row' id='menu'>
          <li className='nav-item active'> <a className='nav-link menu-link' href='#'>Products</a> </li>
          <li className='nav-item'> <a className='nav-link menu-link' href='/faqs'>FAQs</a> </li>
          <li className='nav-item'> <a className='nav-link menu-link' href='/about'>About Us</a> </li>
          <li className='nav-item'> <a className='nav-link menu-link' href='/contact'>Contact</a> </li>
          <li className='nav-item ml-auto'> <a className='nav-link menu-link' href='#'><strong><i className='fa fa-shopping-cart' /> My Cart (<span id='cart-num'>0</span>)</strong></a> </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
