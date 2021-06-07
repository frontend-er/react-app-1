import React from 'react';
import Navigation from './components/Navigation/Navigation';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route} from "react-router-dom";


import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
  return ( 
    <BrowserRouter>
      <div className = "app-wrapper"> 
        <HeaderContainer />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} /> 
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer/>} />

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;