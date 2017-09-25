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
        <ul>
          <li>{cartProduct.title}</li>
          <button onClick={this.handleClick}>Remove Item</button>
        </ul>
      </div>
    );
  }
}
