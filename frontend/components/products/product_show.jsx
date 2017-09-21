import React from 'react';
import { withRouter } from 'react-router-dom';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="product-show-image">
          <img src={this.props.product.image_url}/>
        </div>
        <div className="product-info">
          <h1>{this.props.product.title}</h1>
          {this.props.product.price}
          <p>{this.props.product.description}</p>
        </div>
        <button className='add-to-cart'>Add To Cart</button>
      </div>
    );
  }
}
