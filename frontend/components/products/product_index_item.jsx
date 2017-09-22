import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const ProductIndexItem = ({ product }) => (
  <Link to={`products/${product.id}`}>
    <div className="product-item-container">
      <div className="product-index-img">
          <img className="product-thumb" src={product.image_url}/>
      </div>
      <div className='product-index-info'>
        <ul>
          <li>{product.title}</li>
          <li>${product.price}</li>
        </ul>
      </div>
    </div>
  </Link>
);

export default ProductIndexItem;
