import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Home extends Component {
  render() {
    return (
      <section>
        <nav>
          <Nav />
        </nav>
        <section>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </section>
      </section>
    );
  }
}
