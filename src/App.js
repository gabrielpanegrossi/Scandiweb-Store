/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import { CartProvider } from './context/cartContext';
import { CurrencyProvider } from './context/currencyContext';
import { GeneralProvider } from './context/generalContext';

import Header from './components/header/index';
import Category from './containers/category';
import Product from './containers/product';
import Cart from './containers/cart';
import Home from './containers/home';
import OpacityOverContent from './components/opacityOverContent';
import attributesAreEqual from './services/comparison/compareProducts';

const { REACT_APP_GRAPHQL_URL } = process.env;

console.log(REACT_APP_GRAPHQL_URL);
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCurrency: { label: 'USD', symbol: '$' },
      cartItems: [],
      showOpacityOverContent: false,
    };
  }

  componentDidMount() {
    const lastCart = JSON.parse(localStorage.getItem('cartArr'));
    this.setState({ cartItems: lastCart || [] });
  }

  setCartStorage = () => {
    const { cartItems } = this.state;
    localStorage.setItem('cartArr', JSON.stringify(cartItems));
  };

  changeSelectedCurrency = (currencyLabel) => {
    this.setState({ selectedCurrency: currencyLabel });
  };

  insertCartItem = (item) => {
    const { cartItems } = this.state;
    const filteredIndex = cartItems.filter((listItem) => listItem.id === item.id);

    if (filteredIndex.length > 0) {
      this.increaseItemQuantityOrAddItem(item);
    } else {
      this.setState({ cartItems: [...cartItems, { ...item, quantity: +1 }] });
    }

    this.setCartStorage();
  };

  increaseItemQuantityOrAddItem = (item) => {
    const { cartItems } = this.state;
    const foundEqual = [];

    cartItems.forEach((product, index) => {
      if (product.id === item.id) {
        if (
          foundEqual.length === 0 &&
          attributesAreEqual(product.productObj.attributes, item, cartItems[index])
        ) {
          cartItems[index].quantity += 1;
          foundEqual.push(cartItems[index]);
        }
      }
    });

    if (foundEqual.length === 0) {
      this.setState({ cartItems: [...cartItems, { ...item, quantity: +1 }] });
    } else {
      this.setState({ cartItems: [...cartItems] });
    }

    this.setCartStorage();
  };

  decreaseCartItemQuantity = (item) => {
    const { cartItems } = this.state;
    const foundEqual = [];

    cartItems.forEach((product, index) => {
      if (product.id === item.id) {
        if (
          foundEqual.length === 0 &&
          attributesAreEqual(product.productObj.attributes, item, cartItems[index])
        ) {
          foundEqual.push(product);
          if (cartItems[index].quantity === 1) {
            cartItems.splice(index, 1);
          } else {
            cartItems[index].quantity -= 1;
          }
        }
      }
    });

    if (foundEqual.length > 0) {
      this.setState({ cartItems: [...cartItems] });
    }

    this.setCartStorage();
  };

  toggleOpacityOverContent = () => {
    const { showOpacityOverContent } = this.state;
    this.setState({ showOpacityOverContent: !showOpacityOverContent });
  };

  render() {
    const { selectedCurrency, cartItems, showOpacityOverContent } = this.state;
    const {
      changeSelectedCurrency,
      insertCartItem,
      increaseItemQuantityOrAddItem,
      decreaseCartItemQuantity,
      toggleOpacityOverContent,
    } = this;

    const currencyContextVal = {
      selectedCurrency,
      changeSelectedCurrency,
    };

    const cartContextVal = {
      cartItems,
      insertCartItem,
      increaseItemQuantityOrAddItem,
      decreaseCartItemQuantity,
    };

    const generalContextVal = {
      ...cartContextVal,
      ...currencyContextVal,
      toggleOpacityOverContent,
    };

    return (
      <div className='App'>
        <BrowserRouter>
          <GlobalStyle />
          <GeneralProvider value={generalContextVal}>
            <CurrencyProvider value={currencyContextVal}>
              <CartProvider value={cartContextVal}>
                <Header />
                {showOpacityOverContent && <OpacityOverContent />}
                <Route component={Category} path='/category/:categoryName' />
                <Route component={Home} exact path='/' />
                <Route component={Product} path='/product/:productId' />
                <Route component={Cart} path='/myCart' />
                <Route component={Cart} path='/checkout' />
              </CartProvider>
            </CurrencyProvider>
          </GeneralProvider>
        </BrowserRouter>
      </div>
    );
  }
}
