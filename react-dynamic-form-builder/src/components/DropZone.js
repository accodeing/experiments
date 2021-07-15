import React from 'react'
import styled from 'styled-components'


const Drop = styled.div`
  display: grid;
  margin: 2em;
  border: 1px dashed lightgrey;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 5px;
`;

const DropZone = ({ children, onChange }) => {

  const handleDrop = ( event ) => {
    event.stopPropagation();
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if( file ){
      onChange( file )
    } else {
      console.log( event.dataTransfer )
    }
  }

  const handleDragOver = ( event ) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  return(
    <Drop onDragOver={ handleDragOver } onDrop={ handleDrop }>{children}</Drop>
  )
}

export default DropZone
