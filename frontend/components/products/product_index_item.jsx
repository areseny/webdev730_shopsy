import React from "react";
import { withRouter, Link } from "react-router-dom";

export default class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = e => {
    e.preventDefault();
    const { deleteProduct, product, closeProductForm, isEditing, userId } = this.props;
    deleteProduct(product.seller.id, product.id);
    closeProductForm();
    if (isEditing) this.props.history.push(`/users/${userId}`);
  };

  handleEdit = e => {
    this.props.openProductForm();
  };

  render() {
    let editBtns;
    if (this.props.path === "/users/:userId/:productId?") {
      editBtns = (
        <div>
          <Link
            to={`/users/${this.props.userId}/${this.props.product.id}`}
            onClick={this.handleEdit}
          >
            Edit
          </Link>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    } else {
      editBtns = "";
    }
    return (
      <div className="product-item-container">
        <div className="product-index-img">
          <Link to={`/products/${this.props.product.id}`}>
            <img className="product-thumb" src={this.props.product.image_url} />
          </Link>
        </div>
        <div className="product-index-info">
          <ul>
            <li>
              <Link to={`/products/${this.props.product.id}`}>
                {this.props.product.title}
              </Link>
            </li>
            <li>${this.props.product.price}</li>
            <li>{editBtns}</li>
          </ul>
        </div>
      </div>
    );
  }
}
