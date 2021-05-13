import React from 'react';
import style from './Navigation.module.css';

function Navigation() {
   return (
   <nav className = {style.navigationBar}>
      <div className = {style.item}>
        <a href="/profile">Profile</a> 
      </div>
      <div>
        <a href="/dialogs">Messages</a> 
      </div>
      <div>
        <a href="">News</a> 
      </div>
      <div>
        <a href="">Feed</a> 
      </div>
      <div>
        <a href="">Settings</a> 
      </div>
    </nav>

   )
}

export default Navigation;