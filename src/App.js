import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  ControlledFormPage,
  CounterButtonPage,
  HomePage,
  NotFoundPage,
  PeopleListPage,
  ProtectedPage,
  UnControlledFormPage
} from './pages';
import { FormsNavBar } from './FormsNavBar';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter">
              <CounterButtonPage />
            </Route>
            <Route path="/people-list">
              <PeopleListPage />
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route path="/forms">
              <FormsNavBar />
              <Route path="/forms/controlled">
                <ControlledFormPage />
              </Route>
              <Route path="/forms/uncontrolled">
                <UnControlledFormPage />
              </Route>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
