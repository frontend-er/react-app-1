import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/img/profilePhoto.png";

class Users extends React.Component {
   componentDidMount () {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then(response => {
               this.props.setUsers(response.data.items);
               this.props.setUsersTotalCount(response.data.totalCount);

         })
   }

   onPageChanged = (pageNumber) => {
      return (
         this.props.setCurrentPage(pageNumber),
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`).then(response => {
               debugger;
               this.props.setUsers(response.data.items);
         })
      )
   }


   render () {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      

      console.info(this.props.totalUsersCount);
      let pages = [];

      for (let i = 1; i <= 30; i++ ) {
         pages.push(i);
      }

      return (
      <div>
         <div className={style.pagination}>
         {
            pages.map( p => {
               return (
               <span className = {this.props.currentPage === p  &&  style.selected} onClick={()=> {this.onPageChanged(p)}}> {p} </span>

               )
            })
         }
         </div>
         {
            this.props.users.map(u => <div key ={u.id}>
               <span>
                  <div className={style.avatar}>
                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
                  </div>
                  <div>
                     {u.followed ? <button onClick={() => {this.props.unfollow(u.id)}}>Follow</button> : <button  onClick={() => {this.props.follow(u.id)}}>Unfolow</button>}
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

}


export default Users;