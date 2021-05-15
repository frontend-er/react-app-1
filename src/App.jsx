import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route} from "react-router-dom";


import './App.css';


function App() {
  return ( 
    <BrowserRouter>
  <div className = "app-wrapper"> 
  <Header />
  <Navigation />
  <div className="app-wrapper-content">
    <Route path="/dialogs" component={Dialogs} />
    <Route path="/profile" component={Profile} />
    <Route path="/news" component={News} />
    <Route path="/settings" component={Settings} />

    
  </div>
  
  </div>
    </BrowserRouter>

  );
}

export default App;