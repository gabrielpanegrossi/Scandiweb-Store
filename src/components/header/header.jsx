import React from 'react';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

import getMenuOptions from '../../services/database/getMenuOptions';
import getCurrencyOptions from '../../services/database/getCurrencyOptions';
import NavMenu from './navMenu';
import CartAndCurrency from './cartAndCurrency';
import Logo from './logo';
import * as S from './style';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuArr: [],
      selectedMenu: '',
      currencyArr: [],
    };
  }

  componentDidMount() {
    this.checkCurrentPage();
    this.queryMenuOptions();
    this.queryCurrencyOptions();
  }

  async queryMenuOptions() {
    const menuOptions = await getMenuOptions();

    this.setState({ menuArr: menuOptions.categories });
  }

  async queryCurrencyOptions() {
    const currencyOptions = await getCurrencyOptions();

    this.setState({ currencyArr: currencyOptions.currencies });
  }

  checkCurrentPage() {
    const { location } = this.props;

    const splitedUrl = location.pathname.split('/');

    this.setState({ selectedMenu: splitedUrl[splitedUrl.length - 1] });
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

Header.propTypes = {
  location: propTypes.shape({ pathname: propTypes.string.isRequired }).isRequired,
};

export default withRouter(Header);
