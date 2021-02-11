import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UnControlledFormPage
} from './pages';
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
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter/:name">
            <CounterButtonPage />
          </Route>
          <Route path="/people-list">
            <PeopleListPage />
          </Route>
          <Route path="/protected">
            <ProtectedPage />
          </Route>
          <Route path="/controlled">
            <ControlledFormPage />
          </Route>
          <Route path="/uncontrolled">
            <UnControlledFormPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
