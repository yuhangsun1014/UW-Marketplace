import React from 'react';
import MiddleSection from '../components/MiddleSection';
import './ProductInfo.css';
import { useNavigate} from 'react-router-dom';

function ProductInfo(props) {
    const navigate = useNavigate();
    const { imageUrl, name, price, location, condition, description } = props;
    return (
        <div>
          <div className="app-container">
            <MiddleSection>
                <div className='productInfo-container'>

                    <div className="productImage-container">
                        <img className="product-image" src={imageUrl}/>
                    </div>

                    <div className="detail-container">
                        <h2 className="detail-container" id="productName">{name}</h2>
                        <p className="detail-container" id="price">{price}</p>
                        <p className="detail-container" id="location">Location - {location}</p>
                        <p className="detail-container" id="condition">Condition - {condition}</p>
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
