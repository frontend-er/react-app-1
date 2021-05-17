import App from './App';
import reportWebVitals from './reportWebVitals';
import { renderComponents } from "./render";
import state from "./redux/state";


renderComponents(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
