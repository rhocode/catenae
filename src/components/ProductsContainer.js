

import React from 'react';
import ProductCard from './ProductCard';

export default class ProductsContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card-columns">
          { /* {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)} */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    );
  }
}