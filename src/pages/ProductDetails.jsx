import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import { Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from '../components/Loading/Loading';
import AddCart from '../components/AddCart';
import FormAvaliation from '../components/FormAvaliation/FormAvaliation';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      productDetails: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id, title } } } = this.props;
    this.getProductDetails(id, title);
  }

  getProductDetails = async (productId, productQuery) => {
    const { results } = await getProductsFromCategoryAndQuery(productId, productQuery);
    const productDetails = results.find(({ id }) => id === productId);
    this.setState({
      loading: false,
      productDetails,
    });
    return true;
  }

  render() {
    const { productDetails:
      { id, title, thumbnail, price, permalink }, loading } = this.state;
    const product = (
      <section>
        <header className="header-icons">
          <Link to="/">
            <BiArrowBack className="nav-icon" />
          </Link>
          <Link data-testid="shopping-cart-button" to="/cart">
            <FiShoppingCart className="nav-icon" />
          </Link>
        </header>
        <section className="product-details-container">
          <section className="product-details">
            <img src={ thumbnail } alt={ title } className="product-details-image" />
            <h1>{`R$ ${price}`}</h1>
            <p data-testid="product-detail-name ">{ title }</p>
            <section className="product-details-buttons">
              <AddCart
                id={ id }
                title={ title }
                price={ price }
                testId="product-detail-add-to-cart"
              />
              <Button variant="info">
                <a target="_blank" rel="noreferrer" href={ permalink }>Ir ao site</a>
              </Button>
            </section>
          </section>
          <FormAvaliation id={ id } />
        </section>
      </section>
    );
    return (
      (loading) ? <Loading /> : product
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
