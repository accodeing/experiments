import TypeInfo from './TypeInfo'

const isBool = ( value ) => {
  if( value !== true && value !== false && value.toString().toLowerCase() !== 'true' && value.toString().toLowerCase() !== 'false' ){
    return
  }

  const cohersed_value = value || value.toString().toLowerCase() === 'true'

  return new TypeInfo({
    type: 'boolean',
    control: 'input',
    properties: { type: 'checkbox', defaultChecked: cohersed_value },
    onChange: ( event, handler ) => handler( !value )
  })
}

export default isBool;
