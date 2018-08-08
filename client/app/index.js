import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App';
import NotFound from './components/NotFound';

import Home from './components/Home';

import User from './components/User';

import NewMint from './components/NewMint';

import ViewMint from './components/ViewMint';

import SignUp from './components/SignUp';

import Profile from './components/Profile';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/User/:uid" component={User}/>
        <Route path="/NewMint" component={NewMint}/>
        <Route path="/ViewMint" component={ViewMint}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Profile" component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
