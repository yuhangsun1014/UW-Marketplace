import React from "react";
import "./BoxContainer.css";

function BoxContainer(props) {
    const { imageUrl, name, price, location} = props;
    console.log("props=", props)
    
    return (

      <div className="box-container">
        <img className="box-image" src={imageUrl}/>
        <div className="productName">
          <h4>{name}</h4>
        </div>
        <div className="productPrice">
          <p>${price}</p>
        </div>
        <div className="location">
          <p>{location}</p>
        </div>
        </div>
    );
}

export default BoxContainer;
