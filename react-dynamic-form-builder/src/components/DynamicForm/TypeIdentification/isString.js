import TypeInfo from './TypeInfo'

const isString = ( value ) => {
  const coerced_value = value.toString();

  return new TypeInfo({
    type: 'string',
    control: 'input',
    properties:{
      type: 'text',
      value: coerced_value
    }
  })
}

export default isString
