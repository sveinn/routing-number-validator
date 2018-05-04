export default function checksum(number) {
  if (number && typeof number === 'string' && /^\d{8}$/.test(number)) {
    const weights = [3, 7, 1];
    const weighedSum = number.split('').reduce((previous, current, i) => {
      return previous + weights[i % 3] * parseInt(current, 10);
    }, 0);

    const checkdigit = (10 - weighedSum % 10) % 10;
    return checkdigit.toString();
  }
  return number;
}
