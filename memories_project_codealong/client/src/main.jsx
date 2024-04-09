import React from "react"
import ReactDOM from "react-dom/client";  // React 17 "react-dom-client" -> React 18 "react-dom/client"
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {thunk} from "redux-thunk";

import App from "./App.jsx"
import reducers from "./reducers";
import "./index.css"



const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
