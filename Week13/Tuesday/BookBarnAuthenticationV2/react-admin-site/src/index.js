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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'
import requireAuth from './requireAuth'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)

ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>
        <BaseLayout>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/login' component={Login} />
                <Route path='/books/view' component={requireAuth(View)} />
                <Route path='/books/add-book' component={requireAuth(Add)} />
            </Switch>
        </BaseLayout>
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
