import React from "react";

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      editButton: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  handleEdit(e) {
    e.preventDefault();
    const comment = Object.assign(
      {},
      { body: this.state.body },
      { productId: this.props.productId },
      { id: this.props.comment.id }
    );
    this.props.updateComment(comment);
    this.setState({ editButton: "" });
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  commentItem() {
    let comment;
    if (this.props.comment.user_id === this.props.currentUserId) {
      comment = (
        <div className="comment-list-item">
          <ul>
            <li>{this.props.comment.user}</li>
            <li>
              <ul className="comment-btns">
                <li>
                  <button onClick={this.handleEdit}>Edit</button>
                </li>
                <li>
                  <button onClick={this.handleDelete}>Delete</button>
                </li>
              </ul>
            </li>
          </ul>
          <textarea
            value={this.state.body}
            onChange={this.handleChange}
            className="comment-show-body"
          />
        </div>
      );
    } else {
      comment = (
        <div className="comment-list-item">
          <div>{this.props.comment.user}</div>
          <textarea
            className="comment-show-body"
            value={this.props.comment.body}
            readOnly
          />
        </div>
      );
    }
    return comment;
  }

  render() {
    return <div>{this.commentItem()}</div>;
  }
}
