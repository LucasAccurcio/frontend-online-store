import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import { Item } from 'semantic-ui-react';
import './Cart.css';
import StepsCart from '../../components/StepsCart/StepsCart';
import Header from '../../components/Header/Header';
import ProductCart from '../../components/ProductCart/ProductCart';

export default class Cart extends Component {
  getLocalStorage = () => JSON.parse(localStorage.getItem('CartItens'))

  render() {
    const itensLocalStorage = this.getLocalStorage();

    const emptyCart = (
      <>
        <Header>
          <nav className="nav-header">
            <Link to="/">
              <BiArrowBack className="nav-icon" />
            </Link>
            <Link data-testid="shopping-cart-button" to="/cart">
              <FiShoppingCart className="nav-icon" />
            </Link>
          </nav>
        </Header>
        <section className="empty-cart-section">
          <h1
            data-testid="shopping-cart-empty-message"
            className="empty-cart"
          >

            Seu carrinho está vazio
          </h1>
        </section>
      </>
    );

    if (itensLocalStorage !== null) {
      return (
        <section>
          <Header>
            <nav className="nav-header">
              <Link to="/">
                <BiArrowBack className="nav-icon" />
              </Link>
              <Link data-testid="shopping-cart-button" to="/cart">
                <FiShoppingCart className="nav-icon" />
              </Link>
            </nav>
          </Header>
          <StepsCart choose />
          <Item.Group>
            { itensLocalStorage.map(
              ({ id, title, price, thumbnail }) => (
                <ProductCart
                  key={ id }
                  price={ price }
                  title={ title }
                  thumbnail={ thumbnail }
                />
              ),
            ) }
          </Item.Group>
          <Link to="/checkout">
            <button
              type="button"
              data-testid="checkout-products"
            >
              Finalizar compra
            </button>
          </Link>
        </section>
      );
    }

    return (itensLocalStorage !== null) ? '' : emptyCart;
  }
}
