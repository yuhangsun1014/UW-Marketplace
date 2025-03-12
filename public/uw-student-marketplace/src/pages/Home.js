import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import fetchProducts from '../components/ProductList';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(res => {
      const fetchedProducts = res.docs.map(doc => doc.data());
      setProducts(fetchedProducts);

      // Check if there's a search query in the URL
      const queryParams = new URLSearchParams(location.search);
      const searchQuery = queryParams.get('search');

      if (searchQuery) {
        const filtered = fetchedProducts.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(fetchedProducts);
      }
    }).catch(err => console.log(err));
  }, [location.search]); // Trigger fetch and filter on URL change

  return (
    <div>
      <div className="app-container">
        <MiddleSection>
          <div className='grid-container'>

            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 6).map((product, index) => (
                <BoxContainer
                  key={index}
                  imageUrl={product.imageUrl}
                  name={product.title}
                  price={product.price}
                  city={product.location}
                  condition={product.condition}
                  description={product.description}

                />
              ))
            ) : (
              <p>No products found. Try a different search!</p>
            )}
          </div>
          {/* Button to clear the search and reset home page */}
          {location.search && (
            <button onClick={() => navigate('/')}>Clear Search</button>
          )}

        </MiddleSection>
      </div>
    </div>
  );
}
