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
          <p>
            <h3>Address</h3>
            2215 Faraday Ave, Suite H <br />
            Carlsbad, California 92008
            <h3>Phone</h3>
            (858) 480-9149
          </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default ContactPage
