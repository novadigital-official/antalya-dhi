export type Currency = 'GBP' | 'EUR' | 'USD' | 'TRY';

export const currencySymbols: Record<Currency, string> = {
  GBP: '£',
  EUR: '€',
  USD: '$',
  TRY: '₺'
};

export const PRICES = {
  standard: {
    GBP: 1550,
    EUR: 1800,
    USD: 2000,
    TRY: 90000
  },
  vip: {
    GBP: 2050,
    EUR: 2400,
    USD: 2600,
    TRY: 120000
  }
};

export function formatPrice(amount: number, currency: Currency): string {
  const symbol = currencySymbols[currency];
  const formattedAmount = amount.toLocaleString('en-US');
  return `${symbol}${formattedAmount}`;
}

export function getDefaultCurrency(): Currency {
  return 'GBP';
}
