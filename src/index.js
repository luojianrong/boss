import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './redux/store';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './containers/login/login';
import Register from './containers/register/register';
import Dashboard from './containers/dashboard/dashboard';


ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route component={Register}/>
        <Route component={Dashboard}/>默认路由组件
      </Switch>
    </Router>
  </Provider>
  ), document.getElementById('root'));

