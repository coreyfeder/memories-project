import React from 'react';
// import ReactDOM from "react-dom";  // React 17
import ReactDOM from 'react-dom/client';  // React 18
// import { createRoot } from 'react-dom/client';  // more direct way

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render()  // React 17
// React 18:
ReactDOM.createRoot(document.getElementById(root)).render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
