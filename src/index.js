import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {update} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, updatePost, addMessage, updateMessage} from "./redux/state";

let renderComponents = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePost={updatePost} addMessage={addMessage} updateMessage={updateMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}


renderComponents(state);
update(renderComponents);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
