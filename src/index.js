import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import reducers from "./reducers/index";

const ReduxThunk = require("redux-thunk").default;

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
    document.getElementById('root'));


serviceWorker.unregister();
