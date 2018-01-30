import React from "react";
import { Link } from "react-router-dom";

export default class CartItemsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    const { deleteCartItem, cartProduct } = this.props;
    deleteCartItem(cartProduct.id);
  }

  render() {
    const { cartProduct } = this.props;
    return (
      <div className="cart-product">
        <img className="cart-product-img" src={cartProduct.image_url} />
        <ul className="cart-product-details">
          <li>
            <Link to={`products/${cartProduct.product_id}`}>
              {cartProduct.title}
            </Link>
          </li>
          <li>Seller: {cartProduct.seller.username}</li>
          <li>${cartProduct.price}</li>
          <li>{cartProduct.description}</li>
        </ul>
        <button className="delete-btn" onClick={this.handleClick}>
          <img src="http://res.cloudinary.com/brainzilla/image/upload/v1506393086/close_button_gwuq4f.png" />
        </button>
      </div>
    );
  }
}
