import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product/:id/:title" component={ ProductDetails } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
