import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

export default class AddCart extends React.Component {
  addLocalStorage = (id, title, price) => {
    const products = { id, title, price };
    if (localStorage.getItem('CartItens') === null) {
      localStorage.setItem('CartItens', JSON.stringify([products]));
    } else {
      const itensLocalStorage = JSON.parse(localStorage.getItem('CartItens'));
      localStorage.setItem(
        'CartItens',
        JSON.stringify([...itensLocalStorage, products]),
      );
    }
  }

  render() {
    const { id, title, testId, price } = this.props;
    return (
      <Button
        type="button"
        data-testid={ testId }
        onClick={ () => this.addLocalStorage(id, title, price) }
      >
        Adicionar ao Carrinho
      </Button>
    );
  }
}

AddCart.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
