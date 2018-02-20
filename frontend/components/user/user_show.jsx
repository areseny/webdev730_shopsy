import React from "react";
import ProductIndexContainer from "../products/product_index_container";
import ProductFormContainer from "../products/product_form_container";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.closeProductForm();
  }

  toggleForm = e => {
    e.preventDefault();
    if (this.props.match.params.productId) {
      this.props.history.push(`/users/${this.props.currentUser.id}`);
      this.props.closeProductForm();
    } else if (this.props.isProductFormHidden) {
      this.props.openProductForm();
    } else {
      this.props.closeProductForm();
    }
  };

  render() {
    const { isProductFormHidden } = this.props;
    const buttonText = isProductFormHidden ? "Add Product" : "Cancel";
    return (
      <div className="user-page">
        <div className="user-page-header">
          <div className="user-name">
            {this.props.currentUser.username}'s Store
          </div>
          <button onClick={this.toggleForm}>{buttonText}</button>
        </div>
        {!isProductFormHidden && <ProductFormContainer />}
        <div className="user-show-products">
          <ProductIndexContainer />
        </div>
      </div>
    );
  }
}
