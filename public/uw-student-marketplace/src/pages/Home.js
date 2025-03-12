import React, { useEffect, useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import fetchProducts from '../components/ProductList';

export default function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res.docs);
    }).catch(err => console.log(err));
  }, []);
  
  return (
    <div>
      <div className="app-container">
        <MiddleSection>
            <div className='grid-container'>
=======
                {!!products ? products.slice(0, 6).map(product=>{
                  const productData = product.data();
                  const imageUrl = productData['imageUrl'];
                  const name = productData['title'];
                  const price = productData['price'];
                  const location = productData['location'];
                  
                  return (<BoxContainer 
                    imageUrl={imageUrl}
                    name={name}
                    price={price}
                    location={location}
                  />)
                }) : <BoxContainer /> }
                
            </div>
        </MiddleSection>
      </div>
    </div>
  );
  
}

