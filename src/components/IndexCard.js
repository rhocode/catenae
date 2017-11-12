
import React from 'react'

export default class IndexCard extends React.Component {
  render () {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px'
    }

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div style={{ 'width': '100%', 'height': '580px' }}>
            <div id='carousel-home' className='carousel slide' data-ride='carousel'>
              <div className='carousel-inner' role='listbox'>
                <div className='carousel-item active'> <img className='d-block img-fluid' src='http://via.placeholder.com/1080x550' alt='First slide' /> </div>
                <div className='carousel-item'> <img className='d-block img-fluid' src='http://via.placeholder.com/1080x550' alt='Second slide' /> </div>
                <div className='carousel-item'> <img className='d-block img-fluid' src='http://via.placeholder.com/1080x550' alt='Third slide' /> </div>
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
        <div className='col-md-2' />
        <div className='col-md-8'>
          <div className='card text-center' style={{ 'width': '100%' }}>
            <h4 className='card-header' style={{ 'width': '100%' }}>We Offer Diseased Cells as follows:</h4>
            <div className='card-block'>
              <div className='row' style={searchStyle}>
                <ul className='list-group' style={{ 'width': '100%' }}>
                  <li className='list-group-item'>ALL BM MNC (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>ALL PB MNC (Newly Diagnosed / Untreated</li>
                  <li className='list-group-item'>AML B CD34+ Cells (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>AML BM MNC (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>AML PB MNC (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>AML PB Plasma (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CLL BM CD19+/CD5+ B Cells (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CLL BM MNC (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CLL BM Plasma (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CLL PB CD19+/CD5+ B Cells (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CLL PB MNC (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CLL PB Plasma (Newly Diagnosed / Untreated)</li>
                  <li className='list-group-item'>CML BM MNC (Chronic Phase)</li>
                  <li className='list-group-item'>CML PB Plasma (Chronic Phase)</li>
                  <li className='list-group-item'>CML PBMC (Newly Diagnosed)</li>
                  <li className='list-group-item'>Crohn's Disease Plasma</li>
                  <li className='list-group-item'>Prostate Cancer PB MNC</li>
                  <li className='list-group-item'>Psoriasis Plasma</li>
                  <li className='list-group-item'>Rheumatoid Arthritis Plasma</li>
                  <li className='list-group-item'>Systemic Lupus Erythematosus Plasma</li>
                  <li className='list-group-item'>Ulcerative Colitis Plasma</li>
                  <li className='list-group-item'>Ulcerative Colitis WB MNC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-2' />
      </div>
    )
  }
}
