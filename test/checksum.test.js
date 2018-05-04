import checksum from '../src/checksum';

describe('position weighed checksum', () => {
  test('checksum of 11111111 is 8', () => {
    expect(checksum('11111111')).toBe('8');
  });

  test('checksum of 00000000 is 0', () => {
    expect(checksum('00000000')).toBe('0');
  });

  test('checksum of 12345678 is 0', () => {
    expect(checksum('12345678')).toBe('0');
  });

  test('not a string of 8 digits is passed through', () => {
    expect(checksum(null)).toBe(null);
    expect(checksum(undefined)).toBe(undefined);
    expect(checksum('a')).toBe('a');
    expect(checksum('10')).toBe('10');
    expect(checksum(123412)).toBe(123412);
  });
});
