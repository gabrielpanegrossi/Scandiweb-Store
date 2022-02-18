/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import propTypes from 'prop-types';

import { BsChevronDown } from 'react-icons/bs';

import CurrencyMenuTrigger from './style';
import GeneralContext from '../../../../context/generalContext';

export default class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyArr: [],
      openCurrencyMenu: false,
    };
  }

  componentDidMount() {
    const { currencyOptions } = this.props;
    this.setState({ currencyArr: currencyOptions });
  }

  componentDidUpdate(prevProps) {
    const { currencyOptions } = this.props;
    if (currencyOptions !== prevProps.currencyOptions) {
      this.setState({ currencyArr: currencyOptions });
    }
  }

  changeSelectedCurrency(currencyLabel) {
    this.setState({ openCurrencyMenu: false });
    const { changeSelectedCurrency } = this.context;
    changeSelectedCurrency(currencyLabel);
  }

  toggleCurrencyMenuState(value) {
    this.setState({ openCurrencyMenu: value });
  }

  render() {
    const { currencyArr, openCurrencyMenu } = this.state;
    const { selectedCurrency } = this.context;
    return (
      <CurrencyMenuTrigger>
        <div className='currency-wrapper' onMouseEnter={() => this.toggleCurrencyMenuState(true)}>
          <span>{selectedCurrency.symbol}</span>
          <BsChevronDown />
        </div>
        {openCurrencyMenu && (
          <div className='currency-submenu'>
            <ul>
              {currencyArr?.map((el) => (
                <li key={el.label}>
                  <button
                    onClick={() => {
                      this.changeSelectedCurrency({ label: el.label, symbol: el.symbol });
                    }}
                    type='button'
                  >
                    <span>{el.symbol}</span>
                    <span>{el.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CurrencyMenuTrigger>
    );
  }
}

Currency.propTypes = { currencyOptions: propTypes.arrayOf(propTypes.shape({})).isRequired };
Currency.contextType = GeneralContext;
