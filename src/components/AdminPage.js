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

export default class AdminPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      PostTitle: '',
      Price: '',
      Description: '',
      GroupSku: '',
      GroupTitle: '',
      Format: '',
      Source: '',
      GauranteedViability: '',
      GauranteedPurity: '',
      CollectionOrIsolationProcedure: '',
      Anticoagulant: '',
      relatedProds: {},
      prodDropdown: null
    }
  }

  render () {
    return (<div>
      <div className='container'>
        <Navbar />
        <div className='admin-card'>
          <h1>Order# <span className='order'>000</span></h1>
          <div className='row'>
            <div className='col' id='cartlist'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Item SKU</th>
                    <th>Item name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col' id='contact'>
              <h2 className="title">Contact info</h2>
              <div>
                <p>Name: <span className='name'></span></p>
                <p>Title: <span className='title'></span></p>
                <p>Organization: <span className='org'></span></p>
                <p>Phone: <span className='phone'></span></p>
                <p>Email: <span className='email'></span></p>
                <p>Qs/Comments: <span className='comments'></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>)
  }
}
