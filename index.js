import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
