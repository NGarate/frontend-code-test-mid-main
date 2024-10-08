type PriceFormatterParams = {
  currency: string;
  decimalPlaces?: number;
  culture: string;
  price: number;
};

export default function priceFormatter({ currency, decimalPlaces = 0, culture, price }: PriceFormatterParams): number {
  const formatter = new Intl.NumberFormat(culture, { style: 'currency', currency });
  const value = price / Math.pow(10, decimalPlaces);

  return formatter.format(value);
}
