import React from "react";
import ProductIndexContainer from "../products/product_index_container";
import ProductFormContainer from "../products/product_form_container";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isProductFormHidden: this.props.isProductFormHidden };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isProductFormHidden: nextProps.isProductFormHidden });
  }

  toggleForm = e => {
    e.preventDefault();
    this.setState({ isProductFormHidden: !this.state.isProductFormHidden });
  };

  render() {
    const buttonText = this.state.isProductFormHidden ? "Add Product" : "Cancel";
    return (
      <div className="user-page">
        <div className="user-page-header">
          <div className="user-name">
            {this.props.currentUser.username}'s Store
          </div>
          <button onClick={this.toggleForm}>{buttonText}</button>
        </div>
        {!this.state.isProductFormHidden && <ProductFormContainer />}
        <div className="user-show-products">
          <ProductIndexContainer />
        </div>
      </div>
    );
  }
}
