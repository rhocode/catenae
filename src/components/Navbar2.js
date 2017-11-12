import React from 'react'

export const Navbar = props => (
  <div>
    <nav id='navbar' className='navbar navbar-toggleable-md navbar-light bg-faded'>
      <button
        className='navbar-toggler navbar-toggler-right'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <a className='navbar-brand' href='#'>Catenae Bio</a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Products</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>FAQs</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>About Us</a>
          </li>
          <li className='nav-item '>
            <a className='nav-link' href='#'>Contact</a>
          </li>
        </ul>
        {/* <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-shopping-cart">
                    </i> My Cart (<span id="cart-num">0</span>)</a>
              </li>
            </ul> */}
      </div>
    </nav>
  </div>
)

export default Navbar
