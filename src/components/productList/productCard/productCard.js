import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import AddToCardButton from '../../addToCartButton';

export default class ProductCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { productInformation, currentCurrency } = this.props;
		console.log(productInformation);

		return (
			<S.ProductCardContainer>
				<Link to={`/product/${productInformation.id}`}>
					{productInformation.inStock ? (
						<div className="out-of-stock">
							<span>out of stock</span>
						</div>
					) : null}
					<div className="img-handler">
						<img src={productInformation.gallery[0]} alt="" />
						{!productInformation.inStock &&
						productInformation.attributes.length ? (
							<AddToCardButton />
						) : null}
					</div>
					<div>
						<h3>{productInformation.name}</h3>
						{productInformation.prices.map((el, index) =>
							el.currency.label === currentCurrency ? (
								<span key={index}>{`${currentCurrency} ${el.amount}`}</span>
							) : null
						)}
					</div>
				</Link>
			</S.ProductCardContainer>
		);
	}
}
