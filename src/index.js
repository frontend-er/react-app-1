import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let renderComponents = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} updatePost={store.updatePost.bind(store)} addMessage={store.addMessage.bind(store)} updateMessage={store.updateMessage.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}


renderComponents(store.getState());
store.update(renderComponents);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
