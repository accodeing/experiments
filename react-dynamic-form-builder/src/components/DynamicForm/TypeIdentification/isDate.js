import TypeInfo from './TypeInfo'

const isDate = ( value ) => {
  if( typeof value !== 'string' || ( isNaN(Date.parse( value )) || new Date( value ) === 'Invalid Date' )){
    return
  }

  const cohersed_value = new Date( value ).toISOString().slice(0,-8)

  return new TypeInfo({
    type: 'date',
    control: 'input',
    hint: 'converted to UTZ',
    properties: { type: 'datetime-local', value: cohersed_value }
  });
}

export default isDate;
