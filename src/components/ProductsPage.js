import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import ProductsContainer from './ProductsContainer'
import Footer from './Footer'
import SearchCard from './SearchCard'

export const ProductsPage = () => (
  <div>
    <div className='container'>
      <Navbar />
      <ProductsContainer />
    </div>
    <Footer />
  </div>
)

export default ProductsPage
