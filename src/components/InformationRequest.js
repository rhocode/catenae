import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const InformationRequest = () => (
  <div>
    <div className='container'>
      <Navbar />
      <div className='card'>
        <div className='card-header faq'>
          Request Info
        </div>
        <div className='card-block faq'>
          {/* <h4 className='card-title'>Information Request</h4> */}
          <div>
            {/* <form>
              <div className='form-group'>
                <label className='name'>Your Name*</label>
                <input type='text' placeholder='Name' id='name' className='form-control' aria-describedby='namehelp' />
                <small id='namehelp'>First and Last name</small>
              </div>
              <div className='form-group'>
                <label className='title'>Title</label>
                <input type='text' placeholder='Title' id='title' className='form-control' />
              </div>
              <div className='form-group'>
                <label className='org'>Your Organization*</label>
                <input type='text' placeholder='Organization' id='org' className='form-control' />
              </div>
              <div className='form-group'>
                <label className='phone'>Phone Number</label>
                <input type='tel' placeholder='Phone' id='phone' className='form-control' />
              </div>
              <div className='form-group'>
                <label className='email'>Email Address*</label>
                <input type='email' placeholder='Email' id='email' className='form-control' />
              </div>
              <div className='form-group'>
                <label className='qc'>Questions/Comments</label>
                <input type='text' placeholder='' id='qc' className='form-control' />
              </div>
              <button type='submit' className='btn btn-primary'>Submit Inquiry</button>
            </form> */}
            <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfoF2EqOJhCZTR5hkaeM1O8f6_7_dd5qxoKQlt3qBvulws6KQ/viewform?embedded=true' width='760' height='1500' scrolling="no">Loading...</iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default InformationRequest
