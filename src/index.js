import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css';
import { createStore, combineReducers } from 'redux'; //Globalize state 
import allReducer from './Reducers/index'
import { Provider } from 'react-redux';

const my_store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//combine reducer


//Action

// const increment = () => {
//   return {
//     type: "increment"
//   }
// }

// const decrement = () => {
//   return {
//     type: "decrement"
//   }
// }

// //Reducer

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//   }
// }

// let store = createStore(counter);
// store.subscribe(() => console.log(store.getState()));
// //DISPATCH

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={my_store}>
      <App />
    </Provider>
  </React.StrictMode>
);
