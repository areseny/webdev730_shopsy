import React from 'react';
import ProductIndexItem from './product_index_item';
import Banner from '../banner/banner';

export default class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div className="main-index">
      <div className="banner-container">
        <Banner/>
      </div>
      <div className="product-index">
        <div className="product-row">
          {this.props.products.map( product =>
          <ProductIndexItem
          key={product.id}
          product={product} />
          )}
        </div>
      </div>
      </div>
    );
  }
}
