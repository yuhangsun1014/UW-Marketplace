import React from "react";
import "./BoxContainer.css";
import { useNavigate } from "react-router-dom";

function BoxContainer(props) {
    const { imageUrl, name, price, city, condition, description } = props;
    const navigate = useNavigate();
    
    const handleClick = () => {
        // Navigate to product info page with the product name
        navigate(`/ProductInfo/${name}`, { 
            state: {
              imageUrl,
              name,
              price,
              city,
              condition: condition || "Not specified",
              description: description || ""
          }
            
        });
    };
    
    return (

        <div className="box-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img className="box-image" src={imageUrl} alt={name} />
            <div className="productName">
                <h4>{name}</h4>
            </div>
            <div className="productPrice">
                <p>${price}</p>
            </div>
            <div className="city">
                <p>{city}</p>
            </div>

        </div>
    );
}

export default BoxContainer;
