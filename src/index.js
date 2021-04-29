import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={App} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);