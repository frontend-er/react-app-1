import React from 'react';
import style from './Users.module.css';
import userPhoto from "../../assets/img/profilePhoto.png";
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

function Users (props) {
      let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   
      let pages = [];

      for (let i = 1; i <= 23; i++ ) {
         pages.push(i);
      }
      
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
         </div >
            <div className={style.usersContainer}>
            {
               props.users.map(u => <div className={style.placeholder} key ={u.id}>
               
               <span >
                  <div className={style.avatar}>
                  <NavLink to={'/profile/' + u.id}>
                  
                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
                  </NavLink>

                  </div>
                  <div className={style.button}>
                     {u.followed ? <button onClick={() => { 
                        
                        
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                           withCredentials: true,
                           headers: {
                                 "API-KEY": "4e0e2285-df51-4910-837e-25942ded4b41"
                           }
                        })
                        .then(response => {
                              if (response.data.resultCode === 0) {
                                 props.unfollow(u.id)
                              }
                        })


                        
                        
                        }
                     
                     }>Follow</button> : <button  onClick={() => { 
                        
                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                           withCredentials: true,
                           headers: {
                              "API-KEY": "4e0e2285-df51-4910-837e-25942ded4b41"
                           }
                        })
                        .then(response => {
                              if (response.data.resultCode === 0) {
                                 props.follow(u.id) 
                              }
                        }) 
                        }
                     
                     
                     }>Unfolow</button>}
                  </div>
               </span>
               <span className={style.text}> 
                  <span >
                     <div className={style.name}>{u.name}</div>
                     <div>{u.satus}</div>
                  </span>
                  <span>
                     <div>{"u.location.city"}</div>
                     <div>{"u.location.country"}</div>
                  </span>
               </span>

               </div>)
               }
            </div>
         
      </div>
   )
}

export default Users;