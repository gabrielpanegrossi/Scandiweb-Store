function getPriceAndCurrencyFromList(currencyList, currentCurrency, onlyPrice) {
  if (currencyList && currentCurrency) {
    let result;

    currencyList.forEach((item) => {
      if (item.currency.label === currentCurrency)
        result = onlyPrice ? item.amount : `${currentCurrency} ${item.amount}`;
    });

    return result;
  }

  return null;
}

export default getPriceAndCurrencyFromList;
