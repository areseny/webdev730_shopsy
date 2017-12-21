import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import ProductFormContainer from '../products/product_form_container';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(e) {
    e.preventDefault();
    const productForm = document.getElementById("addProductForm");
    if (e.target.innerHTML === "Add product") {
      productForm.classList.remove("hide-form");
      productForm.classList.add("show-form");
      e.target.innerHTML = "Cancel";
    } else {
      productForm.classList.remove("show-form");
      productForm.classList.add("hide-form");
      e.target.innerHTML = "Add product";
    }
  }

  render () {
    return <div className="user-page">
        <div className="user-page-header">
          <div className="user-name">
            {this.props.currentUser.username}'s Store
          </div>
          <button onClick={this.toggleForm}>Add product</button>
        </div>
        <ProductFormContainer type="create" />
        <ProductIndexContainer />
      </div>;
  }
}