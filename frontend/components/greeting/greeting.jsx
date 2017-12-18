import React from "react";
import { Link } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    if (this.props.currentUser) {
      this.props.getCartItems();
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getCartItems();
    }
  }

  sessionLinks() {
    const guestUser = { username: "Guest", password: "123456" };
    const loginDummy = () => this.props.login(guestUser);
    return (
      <nav className="session-nav">
        <ul className="session-btns">
          <li>
            <Link to={`/signup`}>Register</Link>
          </li>
          <li>
            <Link to={`/login`}>Sign In</Link>
          </li>
          <li>
            <button onClick={loginDummy}>Demo</button>
          </li>
        </ul>
      </nav>
    );
  }

  welcomeGreeting(currentUser, logout, cartCount) {
    let cartNum;
    if (cartCount > 0) {
      cartNum = <div className="cart-num">{cartCount}</div>;
    } else {
      cartNum = "";
    }
    return (
      <div>
        <nav className="session-nav">
          <ul className="session-btns">
            <li className="welcome-msg"><Link to={`/users/${currentUser.id}`}>Welcome, {currentUser.username}</Link></li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li>
              <Link to={`/cart`}>
                <img
                  className="cart-icon"
                  src="https://res.cloudinary.com/brainzilla/image/upload/v1506036925/cart_sisp9z.png"
                />
              </Link>
             {cartNum}
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.welcomeGreeting(this.props.currentUser, this.props.logout, this.props.cartCount);
    } else {
      return this.sessionLinks(this.props.login);
    }
  }
}

export default Greeting;
