import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.productId);
  }

  render() {
    
  }
}
