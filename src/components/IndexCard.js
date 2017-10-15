

import React from 'react';

export default class IndexCard extends React.Component {
  render() {
    const searchStyle = {
      'marginLeft': '50px',
      'marginRight': '50px',
    };

    return (
      <div className="row" style={{ 'paddingBottom' : '50px' }}>
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="card text-center" style={{ 'marginTop': '20px', 'width' : '100%' }}>
            <h4 className="card-header">We offer high quality human hematopoietic cells to support health-related research.</h4>
            <div className="card-block">
              <h4 className="card-title">We guarantee:</h4>
              <div className="row" style={searchStyle}>
                <ul className="list-group" style={{ 'width': '100%' }}>
                  <li className="list-group-item">cell number (+/- 5% of labeled numbers)</li>
                  <li className="list-group-item">cell viability ( > 90% for fresh, > 70% for frozen )</li>
                  <li className="list-group-item">cell purity ( > 90% )</li>
                  <li className="list-group-item">competitive price</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card text-center" style={{ 'marginTop': '20px', 'width' : '100%' }}>
            <h4 className="card-header">We Offer Diseased Cells as follows:</h4>
            <div className="card-block">
              <div className="row" style={searchStyle}>
                <ul className="list-group" style={{ 'width': '100%' }}>
                  <li className="list-group-item">ALL BM MNC (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">ALL PB MNC (Newly Diagnosed / Untreated</li>
                  <li className="list-group-item">AML B CD34+ Cells (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">AML BM MNC (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">AML PB MNC (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">AML PB Plasma (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CLL BM CD19+/CD5+ B Cells (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CLL BM MNC (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CLL BM Plasma (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CLL PB CD19+/CD5+ B Cells (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CLL PB MNC (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CLL PB Plasma (Newly Diagnosed / Untreated)</li>
                  <li className="list-group-item">CML BM MNC (Chronic Phase)</li>
                  <li className="list-group-item">CML PB Plasma (Chronic Phase)</li>
                  <li className="list-group-item">CML PBMC (Newly Diagnosed)</li>
                  <li className="list-group-item">Crohn's Disease Plasma</li>
                  <li className="list-group-item">Prostate Cancer PB MNC</li>
                  <li className="list-group-item">Psoriasis Plasma</li>
                  <li className="list-group-item">Rheumatoid Arthritis Plasma</li>
                  <li className="list-group-item">Systemic Lupus Erythematosus Plasma</li>
                  <li className="list-group-item">Ulcerative Colitis Plasma</li>
                  <li className="list-group-item">Ulcerative Colitis WB MNC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

