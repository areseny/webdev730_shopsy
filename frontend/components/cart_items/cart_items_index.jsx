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
    const { deleteCartItem } = this.props;
    return (
      <div>
        Cart
        {this.props.cartProducts.map( cartProduct =>
          <CartItemsIndexItem
          key={cartProduct.id}
          deleteCartItem={deleteCartItem}
          cartProduct={cartProduct}
          />)
        }
      </div>
    );
  }
}
