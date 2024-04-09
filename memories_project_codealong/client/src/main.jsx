import React from "react"
import ReactDOM from "react-dom/client";  // React 17 "react-dom-client" -> React 18 "react-dom/client"
import App from "./App.jsx"
import "./index.css"
/*
// From Ariel's Checkpoint:
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import reducers from "./reducers";
 */

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <App />
    </React.StrictMode>,
)
