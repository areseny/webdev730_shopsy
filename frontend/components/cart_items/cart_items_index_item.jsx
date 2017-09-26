import React from 'react';


export default class CartItemsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.cartProduct.id);
  }

  render() {
    const { cartProduct } = this.props;
    return (
      <div className="cart-product">
        <img className="cart-product-img" src={cartProduct.image_url}/>
        <ul className="cart-product-details">
          <li>{cartProduct.title}</li>
          <li>Seller: {cartProduct.seller.username}</li>
          <li>{cartProduct.description}</li>
        </ul>
        <button
          className="delete-btn"
          onClick={this.handleClick}>
          <img src="http://res.cloudinary.com/brainzilla/image/upload/v1506393086/close_button_gwuq4f.png"/>
          </button>
      </div>
    );
  }
}
