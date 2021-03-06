import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import * as serviceWorker from './serviceWorker';
//import ws from './service/websocket'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

export const loggerMiddleware = store => next => action => {
    console.log('---');
    console.log(action);
    next(action);
};
export const store = createStore(
    reducers,
    compose(
        // applyMiddleware(thunk, loggerMiddleware),
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}> 
        < App />
    </Provider>    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
