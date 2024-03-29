import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


const ErrorPage = () => (
  <div>
    <h1>Invallid !</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignUpPage}/>
        <Route exact path="*" component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
