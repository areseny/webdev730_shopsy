import React from "react";

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      submitButton: ""
    };
  }

  handleDelete = (e) => {
    const { deleteComment, comment } = this.props;
    e.preventDefault();
    deleteComment(comment.id);
  }

  handleEdit = (e) => {
    e.preventDefault();
    const submitButton = <button onClick={this.handleSubmit}>Submit</button>;
    this.textArea.focus();
    this.setState({ submitButton });
  }

  handleSubmit = (e) => {
    const { productId, comment, updateComment } = this.props;
    e.preventDefault();
    const newComment = Object.assign(
      {},
      { productId },
      { body: this.state.body },
      { id: comment.id }
    );
    updateComment(newComment);
    this.setState({ submitButton: "" });
  }

  handleChange = (e) => {
    this.setState({
      body: e.target.value
    });
  }

  commentItem() {
    const { comment, currentUserId } = this.props;
    if (comment.user_id === currentUserId) {
      return (
        <div className="comment-list-item">
          <ul className="comment-details">
            <li className="author-name">{comment.user}</li>
            <li>
              <ul className="comment-btns">
                <li>
                  <button onClick={this.handleDelete}>Delete</button>
                </li>
                <li>
                  <button onClick={this.handleEdit}>Edit</button>
                </li>
                <li>{this.state.submitButton}</li>
              </ul>
            </li>
          </ul>
          <textarea
            value={this.state.body}
            onChange={this.handleChange}
            className="comment-show-body"
            ref={(textArea) => {this.textArea = textArea}}
          />
        </div>
      );
    } else {
      return (
        <div className="comment-list-item">
          <ul className="comment-details">
            <li className="author-name">{comment.user}</li>
          </ul>
          <textarea
            className="comment-show-body"
            value={comment.body}
            readOnly
          />
        </div>
      );
    }
  }

  render() {
    return <div className="comment-list-item-container">{this.commentItem()}</div>;
  }
}
