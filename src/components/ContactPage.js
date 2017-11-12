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
    Contact Info or form Here
</p>

        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default ContactPage
