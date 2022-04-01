export const getPrice = (prices, currentCurrency) => {
  const {amount, symbol} = parseCurrency(prices, currentCurrency);
  return `${symbol}${amount}`
};

const parseCurrency = (prices, currentCurrency) =>
  prices
    .map(({ amount, currency }) => ({ amount, ...currency }))
    .filter(({ symbol }) => symbol === currentCurrency)[0];
