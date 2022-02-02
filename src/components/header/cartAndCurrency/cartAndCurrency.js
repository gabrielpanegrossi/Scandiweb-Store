import React from 'react';

//Custom
import * as S from './style';
import CurrencyContext from '../../../context/currencyContext';

import { BsCart2, BsChevronDown } from 'react-icons/bs';

export default class CartAndCurrency extends React.Component {
	static contextType = CurrencyContext;

	constructor() {
		super();
		this.state = {
			currencyArr: [],
			currentCurrency: '$',
		};
	}

	changeSelectedCurrency(currencyLabel) {
		this.context.changeSelectedCurrency(currencyLabel);
	}

	componentDidUpdate(prevProps) {
		if (this.props.currencyOptions !== prevProps.currencyOptions) {
			this.setState({ currencyArr: this.props.currencyOptions });
		}
	}
	render() {
		return (
			<S.CartAndCurrencyContainer className="currency-and-cart-menu">
				<ul>
					<li className="currency-menu-trigger">
						<div className="currency-wrapper">
							<span>{this.state.currentCurrency}</span>
							<BsChevronDown />
						</div>
						<div className="currency-submenu">
							<ul>
								{this.state.currencyArr.map((el, index) => (
									<li
										key={index}
										onClick={() => (
											this.changeSelectedCurrency(el.label),
											this.setState({ currentCurrency: el.symbol })
										)}
									>
										<span>{el.symbol}</span>
										<span>{el.label}</span>
									</li>
								))}
							</ul>
						</div>
					</li>
					<li className="cart-box-trigger">
						<div>
							<button>
								<BsCart2 />
							</button>
						</div>
						<div className="cart-box">
							<h4>
								<strong>My Bag</strong>
								<span>, {this.state.cartItems} items</span>
							</h4>
							<div className="item-row">
								<div>
									<div></div>
									<div></div>
								</div>
								<div></div>
							</div>
						</div>
					</li>
				</ul>
			</S.CartAndCurrencyContainer>
		);
	}
}
