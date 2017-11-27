
import React from 'react'

export default class IndexCard extends React.Component {
  render () {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px'
    }

    return (
      <div id="carouselindicator" className="carousel slide" data-ride="carousel" data-interval="10000">
        <ol className="carousel-indicators">
          <li data-target="#carouselindicator" data-slide-to="0" className="active"></li>
          <li data-target="#carouselindicator" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 img-fluid" src="https://i.imgur.com/sh1v1bF.png" alt="First slide"></img>
            <div className="carousel-caption d-none d-md-block">
              <h1>We Offer Human Hematologic Products with High Quality and Competitive Prices</h1>
              <p>Catenae Bio provides a reliable supply of hematologic products to support therapeutic research taking place in academia and the biotech industry. Our normal human cells are sourced from healthy peripheral blood, mobilized peripheral blood, bone marrow, or cord blood, while diseased cells are isolated from either peripheral blood or bone marrow. Cells in fresh and frozen formats are immuno-magnetically selected by highly trained laboratory professionals and we guarantee they are of top quality. We take pride in delivering quality products to you. For those who need hematologic cells with unique specifications, we will try our best to comply. Please let us know if you have any questions or concerns regarding our products.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="https://i.imgur.com/GEo0oGF.png" alt="Second slide"></img>
            <div className='carousel-caption d-none d-md-block'>
            <h1>We provide a Good Collection of Diseased Human Cells</h1>
            <p>We currently offer hematologic products covering 38 human diseases. They can be whole blood, serum, plasma, or PBMC from humans in each disease type. Our diseased samples are obtained from patients when they become available to our network of clinicians. Some disease types may have a long backorder depending on the frequency of the disease occurrence in the general population. All samples come from fully consented IRB approved collections.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselindicator" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselindicator" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

/*
      <div className='row'>
        <div className='col-md-12'>
          <div style={{ 'width': '100%', 'height': '580px' }}>
            <div id='carousel-home' className='carousel slide' data-ride='carousel'>
              <div className='carousel-inner' role='listbox'>
                <div className='carousel-item active'> <img className='d-block img-fluid' src='http://via.placeholder.com/1080x580' alt='First slide' /> </div>
                <div className='carousel-item'> <img className='d-block img-fluid' src='http://via.placeholder.com/1080x580' alt='Second slide' /> </div>
                <div className='carousel-item'> <img className='d-block img-fluid' src='http://via.placeholder.com/1080x580' alt='Third slide' /> </div>
              </div>
            </div>
            <div className='carousel-text'>
              <div className='container'>
                <h1>We offer high quality human hematoietic cells to support stem cell research.</h1>
                <h2>We guarantee</h2>
                <ul>
                  <li>
                    <h3>Cell number (+/- 5% of labeled numbers)</h3></li>
                  <li>
                    <h3>Cell viability (>90% for fresh, >70% for frozen)</h3></li>
                  <li>
                    <h3>Cell purity (>90%)</h3></li>
                  <li>
                    <h3>Competitive pricing</h3></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>*/
    )
  }
}
