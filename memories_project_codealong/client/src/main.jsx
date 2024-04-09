import React from 'react'
// import ReactDOM from 'react-dom-client'  // React 17?
import ReactDOM from 'react-dom/client';  // React 18
// import { createRoot } from 'react-dom/client';  // more direct way
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
// import ReactDOM from "react-dom";  // React 17
import { createRoot } from 'react-dom/client';  // React 18

ReactDOM.createRoot(document.getElementById(root)).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
