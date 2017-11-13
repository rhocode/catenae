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
      <div className='container'>
        <h1>Terms And Conditions</h1>
        <p>
          Unless otherwise agreed in writing, all of Catenae Bio’s sales and services are subject to the following <a href="https://drive.google.com/open?id=0ByWmZqgUCja0S2xsRndUcGNITlM5T1Z3Yk4yWDEta3ZGeUQ0">Terms and Conditions</a> which are attached to each customer quote.  We encourage customers to review them carefully prior to placing an order. If you have any questions, please contact us. Thank you!
        </p>
        <iframe src="https://drive.google.com/file/d/0ByWmZqgUCja0S2xsRndUcGNITlM5T1Z3Yk4yWDEta3ZGeUQ0/preview" width="100%" height="720"></iframe>
      </div>
    </div>
    <Footer />
  </div>
)

export default TermsPage
