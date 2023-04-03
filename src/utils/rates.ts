export type Rates = {
  [currency: string]: number;
};

export const currencyList = ["USD", "EUR", "UAH", "PLN"];

export const rates: Rates = {
  USD: 1,
  EUR: 0.9195,
  UAH: 36.92,
  PLN: 4.31,
};
