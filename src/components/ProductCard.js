
import React from 'react'

export default class ProductCard extends React.Component {
  render () {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px'
    }

    return (
      <div onClick={function (err) { console.log(err) }}className='card' style={{'color': 'none', 'border': 'none'}}>
        <img className='thumbnail card-img-top img-fluid' src='https://imgur.com/1oLyMvD.jpg' alt='Card image cap' style={{ 'maxHeight': 'auto', 'width': '200px' }} />
        <div className='card-block text-center'>
          <h4 className='card-title'>{this.props.title}</h4>
        </div>
      </div>
    )
  }
}
