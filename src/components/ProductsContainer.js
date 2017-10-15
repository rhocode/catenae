

import React from 'react';
import ProductCard from './ProductCard';

import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDfriGe1HCNd0HbeWke2W2rf1L7ZSU-rq4',
  authDomain: 'catbioweb.firebaseapp.com',
  databaseURL: 'https://catbioweb.firebaseio.com',
  projectId: 'catbioweb',
  storageBucket: 'catbioweb.appspot.com',
  messagingSenderId: '703503072802',
};
firebase.initializeApp(config);


export default class ProductsContainer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
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
        <div className="col-md-2" />
      </div>
    );
  }
}