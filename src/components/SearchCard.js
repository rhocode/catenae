

import React from 'react';

export default class SearchCard extends React.Component {
  render() {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px',
    };

    return (
      <div className="row" style={{ 'marginBottom': '20px' }}>
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="card text-center" style={{ 'marginTop': '0px' }}>
            <h3 className="card-header">Quick Search</h3>
            <div className="card-block">
              <div className="row" style={searchStyle}>
                <div className="input-group">
                  <input
                    style={{ 'textAlign': 'center' }}
                    className="form-control"
                    type="text"
                    placeholder="Enter Product or Catalog Number"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button"><i className="fa fa-search" /></button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}