import React, { useEffect, useState } from "react";
import { db } from "../Firebase-config"; // Ensure your Firebase config is set up correctly
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard"; // This component displays each product
import "./BoxContainer.css"; // Ensure the styles are applied

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productList);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
