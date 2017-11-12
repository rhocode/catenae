

import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px',
    };

    return (
        <div className="card">
          <img className="thumbnail card-img-top img-fluid" src="http://via.placeholder.com/318x200" alt="Card image cap" style={{ 'maxHeight': 'auto', 'width': '100%' }} />
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
  }
}

