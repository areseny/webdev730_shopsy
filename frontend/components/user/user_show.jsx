import React from 'react';
import ProductIndexContainer from '../products/product_index_container';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getUser(this.props.currentUser.id);
  }

  render () {
    return (
    <div className="user-page">
      <div className="user-name">
        {this.props.currentUser.username}
      </div>
      <ProductIndexContainer />
    </div>
    );
  }
}