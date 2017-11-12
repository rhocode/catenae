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

firebase.initializeApp(config)

export default class Product extends React.Component {
  constructor (props) {
    super(props)

    var productSet = this;
    const thisgroup = props.prod.substring(0, 2);
    const thiscode = props.prod.substring(3, 5);
    const thissize = props.prod.substring(5, 8);
    // const thisGroup = snapshot.val()PostTitle

    firebase.database().ref('/data/').orderByChild('ProductSku').startAt(thisgroup +  '-' + thiscode)
    .endAt(thisgroup + '-' + thiscode + "\uf8ff").once('value').then(function (snapshot) {
      var thisVal = snapshot.val()
      var thisDict = thisVal[props.prod];
      thisDict.productBase = thisVal[thisgroup + '-' + thiscode + '000']['PostTitle'];
      delete thisVal[thisgroup + '-' + thiscode + '000']
      thisDict.relatedProds= thisVal;
      console.log(thisDict)
      productSet.setState(
        thisDict            
            )
    })

    this.state = {
      PostTitle: '',
      Price: '',
      Description: ''
    }
  }

  render () {
    return (<div>
      <div className='container'>
        <Navbar />
        <ol className='breadcrumb'>
          { 'breadcrumb' }
          { /* <!--<li className="breadcrumb-item"><a href="#">${breadcrumbItem}</a></li>--> */ }
        </ol>
        <h1 className='product-title'>{ this.state.PostTitle }</h1>
        <div className='product-head row'>
          <div className='col-xl-3 col-md-4 col-sm-5'><img src='http://via.placeholder.com/200x200' className='rounded' /></div>
          <div className='col'>
            <strong>Price</strong>
            <span className='price-range'>{ this.state.Price }</span>
            <br />
            <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Choose
                          </button>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                            
                            { 'productDropdown' }
                    { /* <!--<a className="dropdown-item" href="#"></a>--> */ }
                  </div>
              </div>
          </div>
        </div>
        <br />
        <div className='product-body'>
          <ul className='nav nav-pills' role='tablist'>
            <li className='nav-item product-tab'>
                <a className='nav-link active' data-toggle='tab' href='#description' role='tab'><h5>Description</h5></a>
              </li>
            <li className='nav-item product-tab'>
                <a className='nav-link' data-toggle='tab' href='#specifications' role='tab'><h5>Specifications</h5></a>
              </li>
            <li className='nav-item product-tab'>
                <a className='nav-link' data-toggle='tab' href='#resources' role='tab'><h5>Technical Resources</h5></a>
              </li>
          </ul>
          <div className='tab-content'>
            <br />
            <div className='tab-pane active' id='description' role='tabpanel'>
                          
                          { this.state.Description }
              </div>
            <div className='tab-pane' id='specifications' role='tabpanel'>
                          $
                          { 'productSpecification' }
                { /* <table className="table table-striped">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <tbody>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <th>Format</th>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <td>Frozen</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <th>Species</th>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <td>Human</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <th>Cell Source</th>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <td>Peripheral Blood</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <th>Cell Type</th>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <td>Plasma</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </tbody>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </table> */ }
              </div>
            <div className='tab-pane' id='resources' role='tabpanel'>
                          $
                          { 'productResources' }
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>)
  }
}
