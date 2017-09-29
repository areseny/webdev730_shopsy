import React from "react";

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      submitButton: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  handleEdit(e) {
    e.preventDefault();
    const submitButton = <button onClick={this.handleSubmit}>Submit</button>;
    const ele = document.getElementById(`${this.props.comment.id}`);
    ele.focus();
    this.setState({ submitButton });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign(
      {},
      { body: this.state.body },
      { productId: this.props.productId },
      { id: this.props.comment.id }
    );
    this.props.updateComment(comment);
    this.setState({ submitButton: "" });
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  commentItem() {
    if (this.props.comment.user_id === this.props.currentUserId) {
      return (
        <div className="comment-list-item">
          <ul className="comment-details">
            <li className="author-name">{this.props.comment.user}</li>
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
            id={this.props.comment.id}
          />
        </div>
      );
    } else {
      return (
        <div className="comment-list-item">
          <ul className="comment-details">
            <li className="author-name">{this.props.comment.user}</li>
          </ul>
          <textarea
            className="comment-show-body"
            value={this.props.comment.body}
            readOnly
          />
        </div>
      );
    }
  }

  render() {
    return <div>{this.commentItem()}</div>;
  }
}
