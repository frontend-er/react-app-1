import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let renderComponents = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App  />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

}


renderComponents(store.getState());
store.subscribe(() => {
  renderComponents(store.getState());
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();