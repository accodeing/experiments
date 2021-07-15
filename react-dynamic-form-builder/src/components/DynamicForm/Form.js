import React from 'react';
import styled from 'styled-components'

import TypeIdentification from './TypeIdentification'

const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  & > label {
    text-align: right;
    padding-right: 1em;
  }
  margin: .5em 0;
`;

const buildControl = ( name, value, onChange ) => {
  const type_info = TypeIdentification( value );

  const TagName = type_info.control
  const label = type_info.hint ? `${ name } (${type_info.hint})` : name

  return (
    <Field key={ name }>
      <label htmlFor={ name }>{ label }</label>
      <TagName
        id={ name }
        { ...type_info.properties }
        onChange={ ( event ) => type_info.onChange( event, onChange ) }
      />
    </Field>
  )
}

const FieldSet = styled.fieldset`
  box-sizing: border-box;
  display: block;
  width: auto;
  border: none;
  border-left: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding-right: 0;
  border-top-left-radius: 4px;
  & > legend {
    color: gray;
  }
`;

const buildControls = ( name, value, onChange ) => {
  switch (typeof value) {
    case 'array':
      return (
        <FieldSet key={ name || 'root' }>
          { name && (<legend>{ name }</legend>) }
          { value.map((item, index) => buildControls( `[${index}]`, item )) }
        </FieldSet>
      )
    case 'object':
      const handleChange = ( prop_name, new_value ) => {
        onChange({
          ...value,
          [ prop_name ]: new_value
        })
      }
      return (
        <FieldSet key={ name || 'root' }>
          { name && (<legend>{ name }</legend>) }
          { Object.entries( value ).map(([key, item]) => buildControls( key, item, ( value ) => handleChange( key, value ) )) }
        </FieldSet>
      )
    case 'undefined':
      return null
    default:
      return buildControl( name, value, onChange )
  }
}

const Form = styled.form`
  width: 600px;
`;

const FormComponent = ({ name, data, onChange }) => {
  return (
    <Form>
      { buildControls( name, data, onChange ) }
    </Form>
  )
}

export default FormComponent;
