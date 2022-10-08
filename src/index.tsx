import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContext } from './Components/context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <App />
    </CartContext>
  </React.StrictMode>,
  document.getElementById('root')
);
