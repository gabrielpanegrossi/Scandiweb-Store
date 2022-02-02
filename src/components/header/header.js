import React from 'react';
import { withRouter } from 'react-router-dom';

//Custom
import customHooks from '../../hooks';
import NavMenu from './navMenu';
import CartAndCurrency from './cartAndCurrency';
import Logo from './logo';
import * as S from './style';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			menuArr: [],
			selectedMenu: '',
			currencyArr: [],
		};
	}

	async queryMenuOptions() {
		const menuOptions = await customHooks.getMenuOptions();

		this.setState({ menuArr: menuOptions.categories });
	}

	async queryCurrencyOptions() {
		const currencyOptions = await customHooks.getCurrencyOptions();

		this.setState({ currencyArr: currencyOptions.currencies });
	}

	checkCurrentPage() {
		const splitedUrl = this.props.location.pathname.split('/');

		this.setState({ selectedMenu: splitedUrl[splitedUrl.length - 1] });
	}

	componentWillMount() {
		this.checkCurrentPage();
		this.queryMenuOptions();
		this.queryCurrencyOptions();
	}

	render() {
		const { menuArr, selectedMenu, currencyArr } = this.state;

		return (
			<S.Header>
				<S.HeaderHandler>
					<NavMenu menuOptions={menuArr} selectedOption={selectedMenu} />
					<Logo />
					<CartAndCurrency currencyOptions={currencyArr} />
				</S.HeaderHandler>
			</S.Header>
		);
	}
}

export default withRouter(Header);
