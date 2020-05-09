import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recipio from './components/Recipio';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch />
      <Route path='/' component={App} exact />
      <Route path='/recipio/:id' component={Recipio} />

      <Switch />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
