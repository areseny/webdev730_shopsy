import React from "react";
import CommentIndexContainer from "../comments/comment_index_container";
import CommentFormContainer from "../comments/comment_form_container";
import ProductIndexContainer from "../products/product_index_container";
import { createCartItem } from "../../actions/cart_items_actions";

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authMsg: "" };
  }

  componentDidMount() {
    const { clearErrors, getProduct } = this.props;
    window.scrollTo(0, 0);
    clearErrors();
    getProduct(this.props.match.params.productId);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createCartItem(this.props.product.id);
      this.props.history.push(`/cart`);
    } else {
      this.setState({ authMsg: "Please login to add items to cart." });
    }
  }

  render() {
    const errors = this.props.errors.map((err, i) => (
      <li className="errors" key={i}>
        {err}
      </li>
    ));
    const { product } = this.props;
    if (!product) return <div />;
    return (
      <div className="product-page">
        <div className="product-show-container">
          <div className="product-image">
            <img src={product.image_url} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <ul className="product-detail-list">
              <li>Seller: {product.seller.username}</li>
              <li>
                <div className="product-show-price">${product.price}</div>
              </li>
              <li>
                <div className="product-description">{product.description}</div>
              </li>
              {errors}
              <li className="auth-msg">{this.state.authMsg}</li>
            </ul>

            <form onSubmit={this.handleSubmit}>
              <input
                type="submit"
                className="add-to-cart-btn"
                value="Add To Cart"
              />
            </form>
          </div>
        </div>
        <div className="product-extras">
          <div className="comments-section">
            <CommentFormContainer productId={product.id} />
            <CommentIndexContainer productId={product.id} />
          </div>
          <div className="user-products">
            <div>More products by this seller.</div>
            <ProductIndexContainer sellerId={this.props.product.seller.id} />
          </div>
        </div>
      </div>
    );
  }
}
