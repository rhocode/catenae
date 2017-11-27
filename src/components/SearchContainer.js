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
  constructor (props) {
    super(props)
    var thisObj = this
    firebase.database().ref('/data/').orderByChild('ProductSku').once('value').then(function (snapshot) {
      var thisVal = snapshot.val()
      console.log(props)
      if (props.query === 'all') {
        const filtered = Object.keys(thisVal).filter(key => key.substring(5, 8) === '000').reduce((obj, key) => {
          obj[key] = thisVal[key].PostTitle
          return obj
        }, {})
        thisObj.setState({
          ready: true,
          objs: filtered
        })
      } else {
        const ser = decodeURIComponent(props.query.trim()).toLowerCase().split(" ");
        const filtered2 = {}
        Object.keys(thisVal).forEach(function(item) {
          var res = ser.map(x => thisVal[item].PostTitle.toLowerCase().includes(x)).reduce((acc, currval) => acc && currval, true)
          if (res) {
            filtered2[item] = thisVal[item].PostTitle
          }
        });
        
        if (Object.keys(filtered2).length === 0) {
          const filtered3 = Object.keys(thisVal).filter(key => ser.includes(key.toLowerCase())).reduce((obj, key) => {
              obj[key] = thisVal[key].PostTitle
              return obj
            }, {})
            if (Object.keys(filtered3).length === 0) {
              thisObj.setState({
                ready: true,
                found: false
              })
            } else {
              thisObj.setState({
                ready: true,
                objs: filtered3
              })    
            }
        } else {
          thisObj.setState({
            ready: true,
            objs: filtered2
          })
        }
      }
    })

    this.state = {
      ready: false,
      objs: {},
      found: true
    }
  }

  render () {
    console.log(this.props)
    return (
      <div> {!this.state.ready
      ? (<div className='container' id='notfound'>
        <h1>{this.state.found ? 'loading...' : 'No results found.'}</h1>
      </div>)
      : (<div className='container' id='results'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Item SKU</th>
              <th>Item name</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.state.objs).map(obj => <tr key={obj}><td>{obj}</td><td><a href={'/products/' + obj}>{this.state.objs[obj]}</a></td></tr>)
            }
          </tbody>
        </table>
      </div>)}
      </div>
    )
  }
}
