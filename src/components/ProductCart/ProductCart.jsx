import './ProductCart.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import ButtonQuantity from '../ButtonQuantity/ButtonQuantity';

export default class ProductCart extends Component {
  render() {
    const { title, price, thumbnail, disabled } = this.props;
    return (
      <Item className="product-cart">
        <Item.Image size="tiny" src={ thumbnail } />

        <Item.Content>
          <Item.Header>{`R$ ${String(price).replace('.', ',')}`}</Item.Header>
          <Item.Meta>
            <span
              className="title-product-cart"
              data-testid="shopping-cart-product-name"
            >
              {title}
            </span>
          </Item.Meta>
          <ButtonQuantity disabled={ disabled } />
        </Item.Content>
      </Item>
    );
  }
}

ProductCart.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
