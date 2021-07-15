import TypeInfo from './TypeInfo'

const isInt = ( value ) => {
  if( parseInt( value ).toString() === value.toString() ){
    return new TypeInfo({
      type: 'integer',
      control: 'input',
      properties: { type: 'number', value }
    })
  }
}

export default isInt;
