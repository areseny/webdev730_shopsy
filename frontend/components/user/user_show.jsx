import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import ProductFormContainer from '../products/product_form_container';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className="user-page">
      <div className="user-name">
        {this.props.currentUser.username}
      </div>
      <ProductFormContainer type="create"/>
      <div>Products</div>
      <ProductIndexContainer />
    </div>
    );
  }
}