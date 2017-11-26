import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDfriGe1HCNd0HbeWke2W2rf1L7ZSU-rq4',
  authDomain: 'catbioweb.firebaseapp.com',
  databaseURL: 'https://catbioweb.firebaseio.com',
  projectId: 'catbioweb',
  storageBucket: 'catbioweb.appspot.com',
  messagingSenderId: '703503072802'
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default class SearchContainer extends React.Component {
  constructor (...args) {
    super(...args)
  }

  componentDidMount(){

  }

  render () {
    console.log(this.props)
    return (
    <div>
      <div className='container' id='notfound'>
        <h1>No results found.</h1>
      </div>
      <div className='container' id='results'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Item SKU</th>
              <th>Item name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}
