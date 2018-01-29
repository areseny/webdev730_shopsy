import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import ProductFormContainer from '../products/product_form_container';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  toggleForm = (e) => {
    e.preventDefault();
    this.setState({ isHidden: !this.state.isHidden });
  }

  render () {
    const buttonText = this.state.isHidden ? 'Add Product' : 'Cancel';
    return <div className="user-page">
        <div className="user-page-header">
          <div className="user-name">
            {this.props.currentUser.username}'s Store
          </div>
          <button onClick={this.toggleForm}>{buttonText}</button>
        </div>
        {!this.state.isHidden && <ProductFormContainer type="create" />}
        <ProductIndexContainer />
      </div>;
  }
}