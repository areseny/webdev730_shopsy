import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as CartAPIUtil from './util/cart_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchCartItems = CartAPIUtil.fetchCartItems;
  window.fetchCartItem = CartAPIUtil.fetchCartItem;
  window.createCartItem = CartAPIUtil.createCartItem;
  window.deleteCartItem = CartAPIUtil.deleteCartItem;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});
