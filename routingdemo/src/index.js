import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Title from './App';
import  List from './List';
import './index.css';

ReactDOM.render(
  <Router>
      {/* <div> */}
      <Switch>
        <Route exact path="/" component={Title} />
        <Route path="/list" component={List} />
      </Switch>
      {/* </div> */}
  </Router>,
  document.getElementById('root')
)


