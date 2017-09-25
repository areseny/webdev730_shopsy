import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartSuccess: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.getProduct(this.props.match.params.productId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCartItem(this.props.product.id);
    if (this.props.errors.length === 0) {
      this.setState({ cartSuccess: "Item added to cart" });
    }
  }

  render() {
    const errors = this.props.errors.map(
      (err, i) => <li className="errors" key={i}>{err}</li>);
    const { product } = this.props;
    if (!product) return (<div></div>);
    return (
      <div className="product-show-container">
        <div className="product-image">
          <img src={product.image_url}/>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <ul className="product-detail-list">
            <li>
              Seller: {product.seller.username}
            </li>
            <li>
              <div className="product-show-price">
                ${product.price}
              </div>
            </li>
            <li>
              <div className="product-description">
                {product.description}
              </div>
            </li>
            {errors}
            <li>{this.state.cartSuccess}</li>
          </ul>

          <form onSubmit={this.handleSubmit}>
            <input
              type="submit"
              className='add-to-cart-btn'
              value='Add To Cart'
            />
          </form>
          <div className="comments-section">
            <CommentFormContainer productId={product.id} />
            <CommentIndexContainer productId={product.id}/>
          </div>
        </div>
      </div>
    );
  }
}
