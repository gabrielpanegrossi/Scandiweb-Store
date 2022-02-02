import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import { cartContext } from './context/currencyContext';
import { CurrencyProvider, CurrencyConsumer } from './context/currencyContext';

import Header from './components/header/index';
import Category from './containers/category/';
import Product from './containers/product';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedCurrency: 'USD',
		};
	}

	changeSelectedCurrency = (currencyLabel) => {
		this.setState({ selectedCurrency: currencyLabel });
	};

	render() {
		const { changeSelectedCurrency } = this;

		const val = {
			...this.state,
			changeSelectedCurrency,
		};

		return (
			<div className="App">
				<BrowserRouter>
					<GlobalStyle />
					<CurrencyProvider value={val}>
						<Header />
						<Route component={Category} path="/category/:categoryName" />
						<Route component={Product} path="/product/:productId" />
					</CurrencyProvider>
				</BrowserRouter>
			</div>
		);
	}
}
