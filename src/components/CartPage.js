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

export default class CartPage extends React.Component {
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
        <div className='container'>
          <h1>My Cart</h1>
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
                <form>
                  <div class="form-group">
                      <label for="name">Your Name*</label>
                      <input type="text" placeholder="Name" id="name" className="form-control" aria-describedby="namehelp"></input>
                      <small id="namehelp">First and Last name</small>
                  </div>
                  <div className="form-group">
                      <label for="title">Title</label>
                      <input type="text" placeholder="Title" id="title" className="form-control"></input>
                  </div>
                  <div className="form-group">
                      <label for="org">Your Organization*</label>
                      <input type="text" placeholder="Organization" id="org" className="form-control"></input>
                  </div>
                  <div className="form-group">
                      <label for="phone">Phone Number</label>
                      <input type="tel" placeholder="Phone" id="phone" className="form-control"></input>
                  </div>
                  <div className="form-group">
                      <label for="email">Email Address*</label>
                      <input type="email" placeholder="Email" id="email" className="form-control"></input>
                  </div>
                  <div className="form-group">
                      <label for="qc">Questions/Comments</label>
                      <input type="text" placeholder="" id="qc" className="form-control"></input>
                  </div>
                  <button type="submit" className="btn btn-primary">Request Quote</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>)
  }
}
