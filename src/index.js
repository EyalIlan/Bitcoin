import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; // whice component has access to the store
import userReducer from './Utils/features/user'
import  tokenReducer from './Utils/features/token'
import  coinReducer from './Utils/features/coin'

const store = configureStore({ // what reducer do we have. the store contains all the global state
  reducer: {
    user:userReducer,
    token:tokenReducer,
    coin:coinReducer
  }
})

// reducer take the previus state and a function and return the new state

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
