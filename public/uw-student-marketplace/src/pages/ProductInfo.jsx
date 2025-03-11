import React from 'react';
import MiddleSection from '../components/MiddleSection';
import './ProductInfo.css';
import { useNavigate} from 'react-router-dom';

function ProductInfo() {
    const navigate = useNavigate();
    return (
        <div>
          <div className="app-container">
            <MiddleSection>
                <div className='productInfo-container'>

                    <div className="productImage-container">
                        <img className="product-image"/>
                    </div>

                    <div className="detail-container">
                        <h2 className="detail-container" id="productName">ProductName</h2>
                        <p className="detail-container" id="price">$0</p>
                        <p className="detail-container" id="location">Location - </p>
                        <p className="detail-container" id="condition">Condition - </p>
                    </div>

                    <div className="description-container">
                        <h2>Description</h2>
                        <p></p>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="contactSellerButton" 
                        onClick={() => navigate('/ContactSellerPage')}
                    >Contact Seller</button>
                </div>
            </MiddleSection>
          </div>
        </div>
      );
}

export default ProductInfo;
