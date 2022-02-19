function getPriceAndCurrencyFromList(currencyList, currentCurrency) {
  if (currencyList && currentCurrency) {
    let result;

    currencyList.forEach((item) => {
      if (item.currency.label === currentCurrency.label) result = item.amount;
    });

    return result;
  }

  return null;
}

export default getPriceAndCurrencyFromList;
