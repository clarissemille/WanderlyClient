import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers'; // Import correct du rootReducer
import { getUsers } from './actions/users.actions';
import { getPosts } from './actions/post.actions';


// Configuration du store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

// store.dispatch(getUsers())
// store.dispatch(getPosts())

// Rendu principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
