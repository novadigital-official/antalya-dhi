export type Currency = 'GBP' | 'EUR' | 'USD' | 'TRY';

export const currencySymbols: Record<Currency, string> = {
  GBP: '£',
  EUR: '€',
  USD: '$',
  TRY: '₺'
};

export const PRICES = {
  standard: {
    GBP: 1850,
    EUR: 2150,
    USD: 2350,
    TRY: 95000
  },
  vip: {
    GBP: 2200,
    EUR: 2550,
    USD: 2800,
    TRY: 115000
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
