import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import App from './containers/App';
import './index.css'
const store=createStore(rootReducer);
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
