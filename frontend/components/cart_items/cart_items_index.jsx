import React from 'react';
import CartItemsIndexItem from './cart_items_index_item';

export default class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCartItems();
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        Cart
        {this.props.cartProducts.map( cartProduct =>
          <CartItemsIndexItem cartProduct={cartProduct} />)}
      </div>
    );
  }
}
