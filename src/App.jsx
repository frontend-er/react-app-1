import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route} from "react-router-dom";


import './App.css';


function App(props) {
  return ( 
    <BrowserRouter>
  <div className = "app-wrapper"> 
  <Header />
  <Navigation friends={props.state.sideBar.friends}/>
  <div className="app-wrapper-content">
    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} defaultMessage={props.state.dialogsPage.defaultMessage} dispatch={props.dispatch}/>} />
    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} newPostValue={props.state.profilePage.newPostValue} dispatch={props.dispatch}/>} />
    <Route path="/news" component={News} />
    <Route path="/settings" component={Settings} />

    
  </div>
  
  </div>
    </BrowserRouter>

  );
}

export default App;