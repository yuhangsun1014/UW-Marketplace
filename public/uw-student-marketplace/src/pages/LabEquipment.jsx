import React, { useState, useEffect } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import labEquipmentImage from '../Assets/labEq.avif';
import fetchProducts from '../components/ProductList';

function LabEquipment() {
    const [products, setProducts] = useState([]);
                      
    useEffect(() => {
    fetchProducts("LabEquipment").then(res => {
        setProducts(res.docs);
    }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={labEquipmentImage}
                        category='LabEquipment' 
                        description='Scientific and laboratory equiment for your research'
                    />
                    <div className='grid-container'>

                        {!!products ? products.slice(0, 3).map(product=>{
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
export default LabEquipment;
