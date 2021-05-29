import React from 'react';
import style from './Users.module.css'

function Users(props)  {
   return (
      <div>
         {
            props.users.map(u => <div key ={u.id}>
               <span>
                  <div className={style.avatar}>
                     <img src={u.avatarPhoto} alt="" />
                  </div>
                  <div>
                     {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button> : <button  onClick={() => {props.follow(u.id)}}>Unfolow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.fullName}</div>
                     <div>{u.satus}</div>
                  </span>
                  <span>
                     <div>{u.location.city}</div>,
                     <div>{u.location.country}</div>
                  </span>
               </span>

            </div>)
         }
      </div>
   )
}  


export default Users;