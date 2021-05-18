import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updatePost, addMessage, updateMessage} from "./redux/state";

export let renderComponents = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePost={updatePost} addMessage={addMessage} updateMessage={updateMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}



