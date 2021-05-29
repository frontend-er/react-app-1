import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route} from "react-router-dom";


import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
  return ( 
    <BrowserRouter>
      <div className = "app-wrapper"> 
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} /> 
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer/>} />

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;