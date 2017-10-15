

import React from 'react';

export default class Footer extends React.Component {
  render() {

    return (
      <footer className="footer">
        <div className="container text-center" style={{ 'width': '100%' }}>
          <a className="" href="#">Terms and Conditions</a> |
          <a className="" href="#">Information Request</a> |
          <a className="" href="#">Site Map</a> |
          <span className="text-muted">2017 Catenae Bio. All Rights Reserved.</span>
        </div>
      </footer>
    );
  }
}