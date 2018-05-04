import Validator from '../src/routing-validator';

describe('RoutingValidator', () => {
  it('has a getter for the routing number', () => {
    expect(new Validator('1234').routingNumber).toBe('1234');
    expect(new Validator(1234).routingNumber).toBe('1234');
  });

  describe('isValid', () => {
    it('throws if class was not constructed with a number', () => {
      expect(() => {
        new Validator(null).isValid();
      }).toThrow('was not constructed with a number');
    });

    it('must only be digits', () => {
      const letter = new Validator('1234K6780');
      expect(letter.isValid()).toBe(false);
    });

    it('exactly 9 digits', () => {
      const ten = new Validator('1123456780');
      expect(ten.isValid()).toBe(false);

      const eight = new Validator('23456780');
      expect(eight.isValid()).toBe(false);
    });

    it('has a valid checksum', () => {
      const valid = new Validator('123456780');
      expect(valid.isValid()).toBe(true);

      const invalid1 = new Validator('123456781');
      const invalid2 = new Validator('123456782');
      const invalid3 = new Validator('123456783');
      const invalid4 = new Validator('123456784');
      const invalid5 = new Validator('123456785');
      const invalid6 = new Validator('123456786');
      const invalid7 = new Validator('123456787');
      const invalid8 = new Validator('123456788');
      const invalid9 = new Validator('123456789');

      expect(invalid1.isValid()).toBe(false);
      expect(invalid2.isValid()).toBe(false);
      expect(invalid3.isValid()).toBe(false);
      expect(invalid4.isValid()).toBe(false);
      expect(invalid5.isValid()).toBe(false);
      expect(invalid6.isValid()).toBe(false);
      expect(invalid7.isValid()).toBe(false);
      expect(invalid8.isValid()).toBe(false);
      expect(invalid9.isValid()).toBe(false);
    });
  });

  describe('errorMessage', () => {
    it('length validation message', () => {
      const invalid = new Validator('12345678');
      expect(invalid.errorMessage()).toBe(
        'Routing Number must be exactly 9 numbers'
      );
    });

    it('checksum test message', () => {
      const invalid = new Validator('123456781');
      expect(invalid.errorMessage()).toBe('Routing Number is invalid');
    });

    it('returns empty errorMessage for valid numbers', () => {
      const valid = new Validator('123456780');
      expect(valid.errorMessage()).toBe('');
    });
  });
});
