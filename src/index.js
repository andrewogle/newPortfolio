import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import browserHistory from 'history/createBrowserHistory'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const history = browserHistory()


ReactDOM.render(<BrowserRouter history = {history}> <App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

