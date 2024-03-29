import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './BaseLayout'
import {Add} from './Add'
import {View} from './View'
import Login from './Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { setAuthenticationHeader } from './authenticate'


let token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/login' component={Login} />
                <Route path='/books/view' component={View} />
                <Route path='/books/add-book' component={Add} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
