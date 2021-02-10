import logo from './logo.svg';
import './App.css';
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="GHOO" numberOfMessages={50} />
        <PeopleList people={people} /> 
        <p>
          <code>src/App.js</code> and save to reload.
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
