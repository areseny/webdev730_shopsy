import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (login) => {
  const dummyUser = { username: "demoUser", password: "123456"};
  const loginDummy = () => login(dummyUser);
  return(
    <nav className="session-nav">
      <ul className="session-btns">
        <li><Link to={`/signup`}>Register</Link></li>
        <li><Link to={`/login`}>Sign In</Link></li>
        <li><button onClick={loginDummy}>Demo</button></li>
      </ul>
    </nav>
  );
};

const welcomeGreeting = (currentUser, logout) => (
    <nav className="session-nav">
      <ul className="session-btns">
        <li><button onClick={logout}>Logout</button></li>
        <li><img className="cart-icon" src="/assets/cart.png"/></li>
      </ul>

    </nav>
);

const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? welcomeGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
