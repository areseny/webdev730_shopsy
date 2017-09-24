import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCartItem(this.props.product.id);
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
          <form onSubmit={this.handleSubmit}>
            <input
              type="submit"
              className='add-to-cart-btn'
              value='Add To Cart'
            />
          </form>
          <div className="comments-section">
            <CommentFormContainer productId={this.props.product.id} />
            <CommentIndexContainer productId={this.props.product.id}/>
          </div>
        </div>
      </div>
    );
  }
}
