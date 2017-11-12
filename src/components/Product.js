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
        <div className='container'>
          <div className='row' id='product-group-row'>
            <div className='col-6 mr-auto'>
              <h4>
                <span className='product-group-sku'>03-31000</span>
                <span className='product-group'>Human Normal PB CD19+ B Cells</span>
              </h4>
            </div>
            <div className='col-6 align-self-end'>
              <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  {this.state.PostTitle}
                </button>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                  { 'productDropdown' }
                  { /* <a className="dropdown-item" href="#"></a> */ }
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>
                <strong className='price-range-label'>Range: </strong>
                <span className='price-range'>$810-$990</span>
              </p>
            </div>
          </div>
          
          <h2 className='product-title'>{ this.state.PostTitle }</h2>
          <div className='product-head row'>
            <div className='col-2'>
              <p>
                <strong className='price-label'>Price: </strong>
                <span className='price'>{ this.state.Price }</span>
              </p>
            </div>
            <div className='col-2 mr-auto'>
              <p>
                <strong className='sku-label'>SKU: </strong>
                <span className='sku'>{'product-sku'}</span>
              </p>
            </div>
            
            <div className='col-4 align-self-end'>
              <div className='input-group'>
                <input type='number' className='form-control' placeholder='1' aria-label='number' />
                <span className='input-group-btn'>
                  <button className='btn btn-danger' type='button'><i className='fa fa-shopping-cart' /> Add to cart</button>
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className='product-body'>
            <div className=''>
              <br />
              <div className='' id='description'>
                <h2>Description</h2>  
                { this.state.Description }
              </div>
              <div className='' id='specifications'>
                <h2>Specifications</h2>
                <table className="table table-striped">
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
                </table>
              </div>
              <div className='' id='resources'>
                <a className='btn btn-danger' href='#'>Prepare Sample to Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>)
  }
}
