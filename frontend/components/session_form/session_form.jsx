import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formType, login, signup } = this.props;
    const user = Object.assign({}, this.state);
    if (formType === "login") {
      login(user);
    } else {
      signup(user);
    }
  }

  demoLogin = (e) => {
    e.preventDefault();
    this.setState({ username: "", password: ""});
    const guestUser = ["Guest", "123456"];
    const guestName = guestUser[0].split("");
    const guestPass = guestUser[1].split("");
    const setFields = () => {
      if (guestName.length > 0) {
        this.setState({
          username: this.state.username.concat(guestName.shift())
        });
      } else if (guestPass.length > 0) {
        this.setState({
          password: this.state.password.concat(guestPass.shift())
        });
      } else {
        clearInterval(interval);
        const user = Object.assign({}, this.state);
        this.props.login(user);
      }
    };
    const interval = setInterval(setFields, 100);
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
          <input
            type="button"
            value="Demo Login"
            onClick={this.demoLogin}
            className="auth-form-btn"
          />
          {this.navLink()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
