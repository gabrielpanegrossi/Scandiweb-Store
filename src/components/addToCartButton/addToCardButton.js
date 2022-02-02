import React from 'react';

import { BsCart2 } from 'react-icons/bs';
import * as S from './style';

export default class AddToCardButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { rectangle } = this.props;
		return (
			<S.addToCartButtonContainer rectangle={rectangle}>
				{rectangle ? 'ADD TO CART' : <BsCart2 />}
			</S.addToCartButtonContainer>
		);
	}
}
