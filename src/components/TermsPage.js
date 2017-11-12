import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const TermsPage = () => (
  <div>
    <div className='container'>
      <Navbar />
      <div className='card'>
        <div className='card-header faq'>
            Terms And Conditions
        </div>
        <div className='card-block faq'>
          <p className='card-text'>
          Unless otherwise agreed in writing, all of Catenae Bio’s sales and services are subject to the following <a href="https://drive.google.com/open?id=0ByWmZqgUCja0S2xsRndUcGNITlM5T1Z3Yk4yWDEta3ZGeUQ0">Terms and Conditions</a> which are attached to each customer quote.  We encourage customers to review them carefully prior to placing an order. If you have any questions, please contact us. Thank you! 

</p>

        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default TermsPage
