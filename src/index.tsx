import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContext } from './Components/context/CartContext';

ReactDOM.render(

    <CartContext>
      <App />
    </CartContext>
  ,
  document.getElementById('root')
);
