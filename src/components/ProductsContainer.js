

import React from 'react';
import ProductCard from './ProductCard';

export default class ProductsContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card-deck">
          { /* {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)} */}
          <ProductCard title={"Human"}/>
          <ProductCard title={"Human Diseased"}/>
          <ProductCard title={"Non-Human"}/>
        </div>
      </div>
    );
  }
}