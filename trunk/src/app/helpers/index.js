export const getPrice = (prices, currentCurrency) => {
  const { amount, symbol } = parseCurrency(prices, currentCurrency);
  return `${symbol}${amount}`;
};

const parseCurrency = (prices, currentCurrency) =>
  prices
    .map(({ amount, currency }) => ({ amount, ...currency }))
    .filter(({ symbol }) => symbol === currentCurrency)[0];

export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
