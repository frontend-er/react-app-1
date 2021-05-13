import React from 'react';
import style from './Navigation.module.css';

function Navigation() {
   return (
   <nav className = {style.navigationBar}>
      <div className = {style.item}>
        <a href="">Profile</a> 
      </div>
      <div>
        <a href="">Messages</a> 
      </div>
      <div>
        <a href="">News</a> 
      </div>
      <div>
        <a href="">Feed</a> 
      </div>
    </nav>

   )
}

export default Navigation;