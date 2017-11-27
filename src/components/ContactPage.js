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
      <div className='container'>
        <h1>Contact Us</h1>
          <h3>Address</h3>
          <p>
            2215 Faraday Ave, Suite H <br />
            Carlsbad, California 92008 <br />
          </p>
          <h3>Phone</h3>
          <p>
            <a href='tel:+18584809149'>(858) 480-9149</a>
          </p>
          <h3>Email</h3>
          <p>
            <a href='mailto:info@atenaebio.com'>info@catenaebio.com</a>
          </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default ContactPage
