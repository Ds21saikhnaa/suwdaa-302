export const formatMoney = (value: number | undefined, currency: string = '₮', fixed: number = 0): string | undefined => {
  if (typeof value === 'undefined') return value;

  const re: string = '\\d(?=(\\d{3})+(\\.\\d*[0-9])?$)';

  if (currency === '$') {
    return `${currency}${Number(value)
      .toFixed(fixed)
      .replace(new RegExp(re, 'g'), '$&,')
      .replace(/(\.\d*[1-9])0+$|\.0*$/, '$1')
      .trim()}`;
  } else {
    return `${Number(value)
      .toFixed(fixed)
      .replace(new RegExp(re, 'g'), '$&,')
      .replace(/(\.\d*[1-9])0+$|\.0*$/, '$1')
      .trim()} ${currency.trim()}`;
  }
};
