function getPriceAndCurrencyFromList(currencyList, currentCurrency) {
  if (currencyList && currentCurrency) {
    let result;

    currencyList.forEach((item) => {
      console.log(item);
      if (item.currency.label === currentCurrency.label)
        result = `${currentCurrency.symbol} ${item.amount}`;
    });

    return result;
  }

  return null;
}

export default getPriceAndCurrencyFromList;
