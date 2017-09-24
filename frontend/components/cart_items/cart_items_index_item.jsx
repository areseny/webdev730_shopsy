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
      <div>
        {cartProduct.title}
        <button onClick={this.handleClick}>Remove Item</button>
      </div>
    );
  }
}
