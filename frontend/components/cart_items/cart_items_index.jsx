import React from "react";
import CartItemsIndexItem from "./cart_items_index_item";
import { Link } from "react-router-dom";

export default class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getCartItems();
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  cartTotal() {
    const prices = this.props.cartProducts.map(product => product.price);
    const total = prices.reduce((a, b) => a + b, 0);
    return total;
  }

  render() {
    const { deleteCartItem, cartProducts } = this.props;
    const products = cartProducts.map(cartProduct => (
      <CartItemsIndexItem
        key={cartProduct.id}
        deleteCartItem={deleteCartItem}
        cartProduct={cartProduct}
      />
    ));
    return (
      <div className="cart-body">
        <div className="cart-header">
          <div className="cart-msg">
            {cartProducts.length} items in your cart
          </div>
          <Link to="/products" className="keep-shopping-btn">
            Keep shopping
          </Link>
        </div>
        <div className="cart-content">
          <div className="cart-items">{products}</div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            {this.cartTotal()}
          </div>
        </div>
      </div>
    );
  }
}
