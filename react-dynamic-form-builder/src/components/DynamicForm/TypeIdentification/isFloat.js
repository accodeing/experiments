import TypeInfo from './TypeInfo'

// https://stackoverflow.com/a/9539746
const decimalPlaces = ( n ) => {
  // Make sure it is a number and use the builtin number -> string.
  var s = "" + (+n);
  // Pull out the fraction and the exponent.
  var match = /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/.exec(s);
  // NaN or Infinity or integer.
  // We arbitrarily decide that Infinity is integral.
  if (!match) { return 0; }
  // Count the number of digits in the fraction and subtract the
  // exponent to simulate moving the decimal point left by exponent places.
  // 1.234e+2 has 1 fraction digit and '234'.length -  2 == 1
  // 1.234e-2 has 5 fraction digit and '234'.length - -2 == 5
  return Math.max(
      0,  // lower limit.
      (match[1] === '0' ? 0 : (match[1] || '').length)  // fraction length
      - (match[2] || 0));  // exponent
}

const isFloat = ( value ) => {
  if( !isNaN( value ) && !isNaN( parseFloat( value ))){
    const decimals = decimalPlaces( value );
    const step = '0.' + '0'.repeat( Math.max(decimals -1, 0)) + '1';

    return new TypeInfo({
      type: 'float',
      control: 'input',
      properties: { type: 'number', step, value }
    })
  }
}

export default isFloat;
