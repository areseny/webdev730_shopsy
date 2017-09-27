import React from "react";
import { Link } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";

const sessionLinks = login => {
  const guestUser = { username: "guest", password: "123456" };
  const loginDummy = () => login(guestUser);
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
};

const welcomeGreeting = (currentUser, logout) => {
  return (
    <div>
      <nav className="session-nav">
        <ul className="session-btns">
          <li className="welcome-msg">Welcome, {currentUser.username}</li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
          <li>
            <Link to={`/cart`}>
              <img
                className="cart-icon"
                src="http://res.cloudinary.com/brainzilla/image/upload/v1506036925/cart_sisp9z.png"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Greeting = ({ currentUser, logout, login }) =>
  currentUser ? welcomeGreeting(currentUser, logout) : sessionLinks(login);

export default Greeting;
