import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import HomePage  from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

const ErrorPage = () => (
  <div>
    <h1>Invallid !</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={HatsPage}/>
        <Route exact path="*" component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
