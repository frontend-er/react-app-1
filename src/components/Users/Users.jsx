import React from 'react';
import style from './Users.module.css';
import userPhoto from "../../assets/img/profilePhoto.png";


function Users (props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
      

      let pages = [];

      for (let i = 1; i <= 30; i++ ) {
         pages.push(i);
      }
      debugger;
      console.info(pages);
   return (
      <div>
         <div className={style.pagination}>
         {
            pages.map( p => {
               return (
               <span className = {props.currentPage === p  &&  style.selected} onClick={()=> {props.onPageChanged(p)}}> {p} </span>

               )
            })
         }
         </div>
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