import React from 'react';
import './BoxContainer.css';

function BoxContainer() {
    return (
      <div className="box-container">
        <img className="box-image"/>
        <div className="productName">
          <h4>ProductName</h4>
        </div>
        <div className="productPrice">
          <p>$0</p>
        </div>
        <div className="location">
          <p>location</p>
        </div>
        </div>
    );
  }
  
  export default BoxContainer;