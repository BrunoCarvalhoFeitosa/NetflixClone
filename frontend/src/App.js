import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignInPage/SignIn';
import SignUpPage from './pages/SignUpPage/SignUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/users/create" component={SignUpPage}></Route>
          <Route path="/users/login" component={SignIn}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
};

export default App;