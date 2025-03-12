import React from "react";
import "./BoxContainer.css"; // Uses styles from BoxContainer.css

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className="product-info">
                <h4>{product.title}</h4>
                <p><strong>${product.price}</strong></p>
                <p>{product.location}</p>
            </div>
        </div>
    );
}

export default ProductCard;
