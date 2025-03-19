/* File: Books.jsx
* Description: 
            This file creates the Books page of the website. 
            It displays the category image and description, and the first three products in the Books category.

 */
import React, { useState, useEffect } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import libImage from '../Assets/books.jpg'
import fetchProducts from '../components/ProductList';

function Books() {
    const [products, setProducts] = useState([]);
      
      useEffect(() => {
        fetchProducts("Books").then(res => {
          setProducts(res.docs);
        }).catch(err => console.log(err));
      }, []);

    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={libImage}
                        category='Books' 
                        description='Textbooks, study guides, and leisure reading'
                    />
                    <div className='grid-container'>
                        {!!products ? products.slice(0, 3).map(product=>{
                            const productData = product.data();
                            console.log("productData=", productData);
                            const imageUrl = productData['imageUrl'];
                            const name = productData['title'];
                            const price = productData['price'];
                            const city = productData['location'];
                            const condition = productData['condition'];
                            const description = productData['description'];
                            
                            
                            console.log(imageUrl, name, price, city);
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

export default Books;