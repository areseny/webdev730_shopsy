import React from 'react';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  render() {
    if (this.props.product === undefined) return (<div></div>);
    return (
      <div className="product-show-container">
        <div className="product-image">
          <img src={this.props.product.image_url}/>
        </div>
        <div className="product-info">
          <h1>{this.props.product.title}</h1>
          <ul className="product-detail-list">
            <li>
              <div className="product-show-price">
                ${this.props.product.price}
              </div>
            </li>
            <li>
              <div className="product-description">
                {this.props.product.description}
              </div>
            </li>
          </ul>
          <input type="submit" className='add-to-cart-btn' value='Add To Cart'/>
        </div>
      </div>
    );
  }
}
