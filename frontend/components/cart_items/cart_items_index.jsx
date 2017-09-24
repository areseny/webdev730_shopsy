import React from 'react';
import CartItemsIndexItem from './cart_items_index_item';

export default class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     this.props.getCartItems();
  }

  render() {
    return (
      <div>
        Cart
        {this.props.cartProducts.map( cartProduct =>
          <CartItemsIndexItem
          key={cartProduct.id}
          cartProduct={cartProduct}
          />)
        }
      </div>
    );
  }
}
