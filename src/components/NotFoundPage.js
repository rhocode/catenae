/* eslint react/forbid-prop-types: "off" */

import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Footer from './Footer'

export class NotFoundPage extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.is404 = true;
    }
  }

  render() {
    return (
      <div>
          <div className='container'>
          <Navbar />
          <div className="not-found">
            <h1>Page not found!</h1>
            <p>
              <Link to="/">Go home</Link>
            </p>
          </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default NotFoundPage;
