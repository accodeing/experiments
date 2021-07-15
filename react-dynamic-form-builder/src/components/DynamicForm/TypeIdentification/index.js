import isDate from './isDate';
import isFloat from './isFloat';
import isInt from './isInt';
import isBool from './isBool';
import isString from './isString';

const TypeIdentification = ( value ) => {
  return isInt( value ) ||
         isFloat( value ) ||
         isBool( value ) ||
         isDate( value ) ||
         isString( value )
}

export default TypeIdentification
