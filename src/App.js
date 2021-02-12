import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { FormsNavBar } from './FormsNavBar';
import { NavBar } from './NavBar';
import {
  ControlledFormPage,
  CounterButtonPage,
  HomePage,
  NotFoundPage,
  PeopleListPage,
  ProtectedPage,
  UnControlledFormPage,
  UserProfilePage
} from './pages';
import { ThemeContext } from './ThemeContext';
import { UserDataLoader } from './UserDataLoader';

function App() {

  return (
    <ThemeContext.Provider value='light'>
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
              <Route path="/user">
                <UserDataLoader>
                  <UserProfilePage />
                </UserDataLoader>
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
    </ThemeContext.Provider>
  );
}

export default App;
