import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Link from './Link'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Link title="Go to List" url="https://randomuser.me/api/?results=100"/>, document.getElementById('root'));
