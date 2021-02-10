import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import logo from './logo.svg';
import { CounterButton } from './CounterButton'
import { CongratulationsMessage } from './CongratulationsMessage';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to PeopleList Page</Link>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/counter/:name">
          <CounterButtonPage />
        </Route>
        <Route path="/people-list">
          <PeopleListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
