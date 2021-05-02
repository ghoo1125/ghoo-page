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
                {/* <UserDataLoader> */}
                <UserProfilePage />
                {/* </UserDataLoader> */}
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
              <Route path='/login' component={() => {
                let redirectUri = 'https%3A%2F%2F3212389bd3a9.ngrok.io'
                let lineAuthorizeUrl = `https://access.line.me/oauth2/v2.1/authorize?client_id=1655869470&redirect_uri=${redirectUri}&scope=profile&response_type=code&response_mode=query&state=abc&nonce=123`;
                console.log(lineAuthorizeUrl);
                window.location.href = lineAuthorizeUrl;
                return null;
              }} />
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
