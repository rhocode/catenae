
import React from 'react'
import ProductCard from './ProductCard'

export default class ProductsContainer extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='card-deck'>
          { /* {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)} */}
          <ProductCard title={'Human'} query={'special-search-human'} />
          <ProductCard title={'Human Diseased'} query={'special-search-humand'} />
          <ProductCard title={'Non-Human'} query={'special-search-nhuman'} />
        </div>
      </div>
    )
  }
}
