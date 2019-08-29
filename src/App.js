import React from 'react';
import {Button, Alert, Spinner} from 'reactstrap'
import styled from 'styled-components'

const CustomButotn=styled.button( {
  background: 'navy',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  padding: '10px 15px',
  '&hover': {opacity: 0.7}
} )

const CustomButton=styled.button` 
background: navy,
color: white,
border: none,
borderRadius: 4,
padding: 10px 15px,
&:hover{opacity: 0.7}
${( props ) => props.size==='small'? 'padding:0px':null};
${( props ) => props.size==='medium'? 'padding:10px 15px':null};
${(props) => props.size==='large'? 'padding:30px' : null};
`

function App() {
  return (
    <div className="App">
      <Button color="danger">Danger</Button>
      <Alert color="danger">
      <Spinner color="danger" size="med"/>This is Alerting YOU...ALERDDD</Alert>
      <header className="App-header">
        <CustomButotn />
        <CustomButton size={'large'}>CustomButton</CustomButton>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
