
import React from 'react'

export default class ProductCard extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px'
    }
    const quer = this.props.query
    return (
      <div onClick={function (err) { location.href = '/search/' + quer }}className='card' style={{'color': 'none', 'border': 'none', 'cursor': 'pointer'}}>
        <img className='thumbnail card-img-top img-fluid' src='https://imgur.com/1oLyMvD.jpg' alt='Card image cap' style={{ 'maxHeight': 'auto', 'width': '200px' }} />
        <div className='card-block text-center'>
          <h4 className='card-title'>{this.props.title}</h4>
        </div>
      </div>
    )
  }
}
