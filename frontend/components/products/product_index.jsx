import React from 'react';
import ProductIndexItem from './product_index_item';

export default class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div className="product-row">
        {this.props.products.map( product =>
        <ProductIndexItem
        key={product.id}
        product={product} />
        )}
      </div>
    );
  }
}
