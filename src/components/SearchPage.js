import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import ProductsContainer from './ProductsContainer'
import Footer from './Footer'
import SearchContainer from './SearchContainer'

export const SearchPage = (props) => (
  <div>
    <div className='container'>
      <Navbar />
      <SearchContainer query={props.query}/>
    </div>
    <Footer />
  </div>
)

export default SearchPage
