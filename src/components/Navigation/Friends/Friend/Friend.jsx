import React from 'react';
import style from './Friend.module.css'

function Friend(props) {
   return (
   <nav className={style.friendHolder}>
      <div className={style.name}>
         {props.name}
      </div>
      <div className={style.friends}>
         <img src={props.img} alt="" />
      </div>
  </nav>

   )
}

export default Friend;