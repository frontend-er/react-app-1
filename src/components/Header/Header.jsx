import React from 'react';
import style from './Header.module.css'
import { NavLink } from "react-router-dom";


function Header(props) {
  
   return (
   <header className = {style.header}>
      <img src="https://logodownload.org/wp-content/uploads/2020/01/vk-logo-0.png" alt="" />

      <div className={style.login}>

               {props.isAuth ? <div>{props.login} <button onClick={props.logout}> Logout</button> </div> : <NavLink to={'/login/'}>Login</NavLink> }
                         
              
      </div>
    </header>

   )
}

export default Header;