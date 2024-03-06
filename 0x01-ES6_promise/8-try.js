export default function divideFunction(numerator, denominator) {
  // divideFunction with numerator and denominator as parameters
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
