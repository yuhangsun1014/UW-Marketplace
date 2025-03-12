import React, { useState, useEffect } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import bagpackImage from '../Assets/bagpack.jpeg';
import fetchProducts from '../components/ProductList';

function Bags() {
    const [products, setProducts] = useState([]);
      
      useEffect(() => {
        fetchProducts("Bags").then(res => {
          setProducts(res.docs);
        }).catch(err => console.log(err));
      }, []);

    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={bagpackImage}
                        category='Bags' 
                        description='Backpacks, laptop bags, and carrying essentials'
                    />
                    <div className='grid-container'>

                        {!!products ? products.slice(0, 3).map(product=>{
                            const productData = product.data();
                            console.log("productData=", productData);
                            const imageUrl = productData['imageUrl'];
                            const name = productData['title'];
                            const price = productData['price'];
                            const city = productData['location'];
                            
                            console.log(imageUrl, name, price, city);
                            return (<BoxContainer 
                                imageUrl={imageUrl}
                                name={name}
                                price={price}
                                city={city}
                            />)
                        }) : <BoxContainer /> }
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}

export default Bags;