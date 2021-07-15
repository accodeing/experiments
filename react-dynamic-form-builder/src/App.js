import React, { useState } from 'react';
import styled from 'styled-components'

import Form from 'components/DynamicForm'
import DropZone from 'components/DropZone'


const SideBySide = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Pre = styled.pre`
  background: lightgray;
  padding: 1em 1.5em;
  border-radius: 4px;
  font-family: 'Source Code Pro', monospace;
`;

function App() {
  const [ state, setState ] = useState({})
  const [ file, setFile ] = useState( new File([], '') )

  const handleDrop = ( file ) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setFile( file )
      setState( JSON.parse( event.target.result ))
    };
    reader.readAsText(file);
  }

  return (
    <main>
      <a href="test_data.json">Download test data</a>
      <SideBySide>
      <Form name={ file.name } data={ state } onChange={ setState } />
      <Pre>{ JSON.stringify( state, null, 2 ) }</Pre>
      </SideBySide>
      <DropZone onChange={handleDrop}>Drop a JSON file here</DropZone>
    </main>
  );
}

export default App;
