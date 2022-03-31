export const getPrice = (prices, currentCurrency) => {
  console.log(currentCurrency)
  const {amount, symbol} = parseCurrency(prices, currentCurrency);
  return `${symbol}${amount}`
};

const parseCurrency = (prices, currentCurrency) =>
  prices
    .map(({ amount, currency }) => ({ amount, ...currency }))
    .filter(({ label }) => label === currentCurrency)[0];
