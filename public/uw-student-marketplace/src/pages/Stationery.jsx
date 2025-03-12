import React, { useState, useEffect } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import stationeryImage from '../Assets/stationery.webp';
import fetchProducts from '../components/ProductList';

function Stationery() {
    const [products, setProducts] = useState([]);
                  
    useEffect(() => {
    fetchProducts("Stationery").then(res => {
        setProducts(res.docs);
    }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={stationeryImage}
                        category='Stationery' 
                        description='Notebooks, pens, and all your writing essentials'
                    />
                    <div className='grid-container'>
                        <BoxContainer />
                        {!!products ? products.slice(0, 3).map(product=>{
                            const productData = product.data();
                            const imageUrl = productData['imageUrl'];
                            const name = productData['title'];
                            const price = productData['price'];
                            const city = productData['location'];
                            const condition = productData['condition'];
                            const description = productData['description'];
                        
                            return (<BoxContainer 
                                imageUrl={imageUrl}
                                name={name}
                                price={price}
                                city={city}
                                condition={condition}
                                description={description}
                                
                            />)
                        }) : <BoxContainer /> }
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}

export default Stationery;