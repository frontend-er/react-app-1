import React from 'react';
import { connect } from "react-redux";
import { followAC,unfollowAC,setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from "./../../redux/users-reducer";
import * as axios from 'axios';
import Users from "./Users";

class UsersContainer extends React.Component {
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
      return <Users currentPage={this.props.currentPage} 
                  onPageChanged={this.onPageChanged}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                   />
   }

}



let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
   }
}

let mapDispachToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setUsersTotalCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount))
      }

   }
}


export default connect(mapStateToProps, mapDispachToProps)(UsersContainer);