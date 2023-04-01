export type Rates = {
  [currency: string]: number;
};

export const currencyList = ["USD", "EUR", "UAN", "PLN"];

export const rates: Rates = {
  USD: 1,
  EUR: 0.9195,
  UAN: 36.92,
  PLN: 4.31,
};
