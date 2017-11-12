import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const ContactPage = () => (
  <div>
    <div className='container'>
      <Navbar />
      <div className='card'>
        <div className='card-header faq'>
            About Us
        </div>
        <div className='card-block faq'>
          <h4 className='card-title'>Contact Us</h4>
          <p className='card-text'>
    
2215 Faraday Ave, Suite H <br />
Carlsbad, California 92008
<br />
<br />
(858) 480-9149
</p>

        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default ContactPage
