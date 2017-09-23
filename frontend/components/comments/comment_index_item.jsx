import React from 'react';

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  commentItem() {
    let comment;
    if (this.props.comment.user_id === this.props.currentUserId) {
      comment = <div><textarea
        value={this.state.body}
        onChange={this.handleChange}
        />
      <button onClick={this.handleClick}>Delete</button>
      </div>;
    } else {
      comment = <textarea value={this.props.comment.body} readOnly/>;
    }
    return comment;
  }

  render() {
    console.log(this.props);
    return(
      <div>
        {this.commentItem()}
      </div>
    );
  }

}
