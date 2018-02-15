import React from "react";
import { Link } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser && nextProps.currentUser) {
      this.props.getCartItems();
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getCartItems();
    }
  }

  sessionLinks() {
    return <nav className="session-nav">
        <ul className="session-btns">
          <li>
            <Link className="session-btn" to={`/signup`}>
              Register
            </Link>
          </li>
          <li>
            <Link className="session-btn" to={`/login`}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>;
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
            <li className="welcome-msg">Welcome, {this.props.currentUser.username}</li>
            <li className="session-btn">
              <Link className="session-btn" to={`/users/${currentUser.id}`}>
                Sell
              </Link>
            </li>
            <li className="session-btn" onClick={logout}>
              Logout
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
    const { currentUser, login, logout, cartCount } = this.props;
    if (currentUser) {
      return this.welcomeGreeting(
        currentUser,
        logout,
        cartCount
      );
    } else {
      return this.sessionLinks(login);
    }
  }
}

export default Greeting;
