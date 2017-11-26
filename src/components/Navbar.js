import React from 'react'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}

  // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick () {
    window.location.href = '/search/' + encodeURIComponent(document.getElementById('textelem').value)
  }
  handleClick2 (event) {
    if (event.keyCode === 13) { document.getElementById('searchMe').click() }
  }

  render () {
    return (<div>
      <div className='container'>
        <div className='row'>
          <h2 className='logo'><a href='/'><img src='https://i.imgur.com/i9nQvGr.jpg' alt='Logo' className='img-fluid' /></a></h2>
          <div className='ml-auto search-bar'>
            <div className='input-group'>
              <input id='textelem' onKeyDown={this.handleClick2} className='form-control' type='text' placeholder='Enter Product or Catalog #' />
              <span className='input-group-btn'>
                <button id='searchMe' onClick={this.handleClick} className='btn btn-secondary' type='button'><i className='fa fa-search' /> Search</button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className='navbar navbar-light bg-faded' id='navbar'>
        <div>

          {/* <a className="btn btn-sm btn-primary" href="#">Log In</a>
                    <a className="btn btn-sm btn-success" href="#">Create Account</a> */}

          <ul className='navbar-nav flex-row' id='menu'>
            <li className='nav-item active'> <a className='nav-link menu-link' href='/search/all'>Products</a> </li>
            <li className='nav-item'> <a className='nav-link menu-link' href='/faqs'>FAQs</a> </li>
            <li className='nav-item'> <a className='nav-link menu-link' href='/about'>About Us</a> </li>
            <li className='nav-item'> <a className='nav-link menu-link' href='/contact'>Contact</a> </li>
            <li className='nav-item ml-auto'> <a className='nav-link menu-link' href='/cart'><strong><i className='fa fa-shopping-cart' /> My Cart (<span id='cart-num'>0</span>)</strong></a> </li>
          </ul>
        </div>
      </nav>

    </div>)
  }
}

export default Navbar
