import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../pages/Home';

const ProductListingPage = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <h1>{category} Products</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListingPage;
