import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './Details'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/detail/:index" component={Details} />
        </Switch>
    </Router>
    , document.getElementById('root'));
