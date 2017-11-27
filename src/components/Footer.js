
import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container text-center' style={{ 'width': '100%' }}>
          <a className='' href='/terms'>Terms and Conditions</a> |&nbsp;
          <a className='' href='/compliance'>Compliance</a> |&nbsp;
          <a className='' href='/inforeq'>Information Request</a> |&nbsp;
          {/* <a className='' href='#'>Site Map</a> |&nbsp; */}
          <span className='text-muted'>©2017 Catenae Bio. All Rights Reserved.</span>
        </div>
      </footer>
    )
  }
}
