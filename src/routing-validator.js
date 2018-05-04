import checksum from './checksum';

export default class RoutingValidator {
  constructor(routingNumber) {
    this.number = routingNumber && routingNumber.toString();
  }

  get routingNumber() {
    return this.number;
  }

  set routingNumber(routingNumber) {
    this.number = routingNumber;
  }

  isValid() {
    if (!this.number) {
      throw 'was not constructed with a number';
    }

    if (!/^\d{9}$/.test(this.number)) {
      this.error = 'Routing Number must be exactly 9 numbers';
      return false;
    }

    const firstEight = this.number.substring(0, 8);
    const lastOne = this.number.substring(8, 9);
    const checkdigit = checksum(firstEight);

    if (checkdigit !== lastOne) {
      this.error = 'Routing Number is invalid';
      return false;
    }

    this.error = '';
    return true;
  }

  errorMessage() {
    if (this.error == null) {
      this.isValid();
    }
    return this.error;
  }
}
