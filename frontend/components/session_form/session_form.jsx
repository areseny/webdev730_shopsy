import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === "login") {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div>
          <ul className="nav-link-list">
            <li>
              <p>Not signed up yet?</p>
            </li>
            <li>
              <Link onClick={this.props.clearErrors} to="/signup">
                Register
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="nav-link-list">
            <li>
              <p>Already signed up?</p>
            </li>
            <li>
              <Link onClick={this.props.clearErrors} to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    const errors = this.props.errors.map((err, i) => (
      <li className="errors" key={i}>
        {err}
      </li>
    ));
    const title = this.props.formType === "login" ? "Sign In" : "Register";
    return (
      <div className="auth-form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="auth-form-title">{title}</h1>
          <input
            className="form-text-input"
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
          <input
            className="form-text-input"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
          {errors}
          <input type="submit" value={title} className="auth-form-btn" />
          {/* <input type="button" value="Demo Login" onClick={} className="auth-form-btn"/> */}
          {this.navLink()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
