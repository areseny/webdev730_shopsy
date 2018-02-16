import React from "react";
import { withRouter, Link } from "react-router-dom";

export default class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = e => {
    e.preventDefault();
    const { deleteProduct, product } = this.props;
    deleteProduct(product.seller.id, product.id);
  };

  handleEdit = e => {
    e.preventDefault();
    openProductForm();
    productToEdit(product);
  };

  render() {
    let editBtns;
    if (this.props.path === "/users/:userId") {
      editBtns = <div>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>;
    } else {
      editBtns = "";
    }
    return <div className="product-item-container">
        <div className="product-index-img">
          <Link to={`/products/${this.props.product.id}`}>
            <img className="product-thumb" src={this.props.product.image_url} />
          </Link>
        </div>
        <div className="product-index-info">
          <ul>
            <li><Link to={`/products/${this.props.product.id}`}>{this.props.product.title}</Link></li>
            <li>${this.props.product.price}</li>
            <li>{editBtns}</li>
          </ul>
        </div>
      </div>;
  }
}
