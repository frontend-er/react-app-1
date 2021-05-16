import React from 'react';
import style from './Friends.module.css'
import Friend from "./Friend/Friend";

function Friends(props) {
   let friendItem = props.friends.map(f => <Friend name={f.name} img={f.img}/> )
   return (
   <nav className={style.friendsHolder}>
      <div className={style.header}>
         Friends
      </div>
      <div className={style.friends}>
         {friendItem}
      </div>
  </nav>

   )
}

export default Friends;