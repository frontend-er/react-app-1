import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/img/profilePhoto.png";

function Users(props)  {

   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         debugger;
         props.setUsers(response.data.items);
      })
   }

   return (
      <div>
         {
            props.users.map(u => <div key ={u.id}>
               <span>
                  <div className={style.avatar}>
                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
                  </div>
                  <div>
                     {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button> : <button  onClick={() => {props.follow(u.id)}}>Unfolow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.name}</div>
                     <div>{u.satus}</div>
                  </span>
                  <span>
                     <div>{"u.location.city"}</div>,
                     <div>{"u.location.country"}</div>
                  </span>
               </span>

            </div>)
         }
      </div>
   )
}  


export default Users;