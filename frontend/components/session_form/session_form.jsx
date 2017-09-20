import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div>
          <p>Not signed up yet?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>Already signed up?</p>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }

  render() {
    const title = this.props.formType === "login" ? "Login" : "Sign Up";
    return (
      <div>
        <h1>Hello! Please {title}</h1>
        {this.navLink()}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <input type="submit" value={title}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
