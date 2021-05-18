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
    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} defaultMessage={props.state.messagesPage.defaultMessage} addMessage={props.addMessage} updateMessage={props.updateMessage}/>} />
    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}  updatePost={props.updatePost} newPost={props.state.profilePage.newPostValue}/>} />
    <Route path="/news" component={News} />
    <Route path="/settings" component={Settings} />

    
  </div>
  
  </div>
    </BrowserRouter>

  );
}

export default App;