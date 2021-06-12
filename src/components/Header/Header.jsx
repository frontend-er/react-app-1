import React from 'react';
import style from './Header.module.css'
import { NavLink } from "react-router-dom";


function Header(props) {
   debugger;
   return (
   <header className = {style.header}>
      <img src="https://logodownload.org/wp-content/uploads/2020/01/vk-logo-0.png" alt="" />

      <div className={style.login}>

               {props.isAuth ? props.login : <NavLink to={'/login/'}></NavLink> }
               <img src={props.photo} alt="" />            
              
      </div>
    </header>

   )
}

export default Header;