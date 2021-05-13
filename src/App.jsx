import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

import './App.css';


function App() {
  return ( 
  <div className = "app-wrapper"> 
  <Header />
  <Navigation />

  <Profile/>
  </div>
  );
}

export default App;