import React from 'react';

const ProductIndexItem = ({ product }) => (
  <div className="product-item-container">
    <figure className="product-img-small">
      <img className="product-thumb" src="assets/moonsurfer_black_model_2.jpg"/>
    </figure>
    <div className='product-index-info'>
      <h2>{product.title}</h2>
    </div>
  </div>
);

export default ProductIndexItem;
