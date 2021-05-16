import React from 'react';
import style from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

function Navigation(props) {
   return (
   <nav className = {style.navigationBar}>
      <div className = {style.item}>
        <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink> 
      </div>
      <div className = {style.item} >
        <NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink> 
      </div>
      <div className = {style.item}>
        <NavLink to="/news" activeClassName={style.active}>News</NavLink> 
      </div>
      <div className = {style.item}>
        <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink> 
      </div>
      <div className = {style.item}>
       <NavLink to="/login" activeClassName={style.active}>Login</NavLink> 
      </div>

      <Friends friends={props.friends} />
  </nav>

   )
}

export default Navigation;