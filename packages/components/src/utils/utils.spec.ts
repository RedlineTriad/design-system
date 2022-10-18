import { format, formatPropValueList } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});

describe('formatPropValueList', () => {
  it('returns empty string for no or empty array input', () => {
    expect(formatPropValueList()).toEqual('');
    expect(formatPropValueList([])).toEqual('');
  });

  it('format one value', () => {
    expect(formatPropValueList(['primary'])).toEqual('<code>primary</code>');
  });

  it('format two values', () => {
    expect(formatPropValueList(['primary', 'secondary'])).toEqual('<code>primary</code> or <code>secondary</code>');
  });

  it('format three or more values', () => {
    expect(formatPropValueList(['primary', 'secondary', 'tertiary'])).toEqual('<code>primary</code>, <code>secondary</code> or <code>tertiary</code>');
    expect(formatPropValueList(['primary', 'secondary', 'tertiary', 'quaternary'])).toEqual('<code>primary</code>, <code>secondary</code>, <code>tertiary</code> or <code>quaternary</code>');
  });
});
