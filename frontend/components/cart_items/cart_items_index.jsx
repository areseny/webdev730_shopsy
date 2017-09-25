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
    const { deleteCartItem, cartProducts } = this.props;
    return (
      <div className="cart-body">
        <div className="cart-header">
          <div className="cart-msg">{cartProducts.length} items in your cart</div>

        </div>
        <div className="cart-items">
        {cartProducts.map( cartProduct =>
          <CartItemsIndexItem
          key={cartProduct.id}
          deleteCartItem={deleteCartItem}
          cartProduct={cartProduct}/>)}
        </div>
      </div>
    );
  }
}
