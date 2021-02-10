import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterButton } from './CounterButton'
import { CongratulationsMessage } from './CongratulationsMessage';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';

const people = [{
  "name": "aaa",
  "age": 3
}, {
  "name": "bbb",
  "age": 5
}, {
  "name": "ccc",
  "age": 10
}]

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage 
          ? null 
          : <CongratulationsMessage 
            numberOfClicks={numberOfClicks} 
            threshold={10}
            onHide={() => setHideMessage(true)} />}
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
