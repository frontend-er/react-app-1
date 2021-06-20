import React from 'react';
import { connect } from "react-redux";
import { follow,unfollow,setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingInProcess } from "./../../redux/users-reducer";
import Users from "./Users";
import Loader from "./../common/Loader/Loader";
import { usersAPI } from "./../api/api";
import {withAuthRedirect} from "../HOC/withAuthRedirect.jsx";
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
   componentDidMount () {
      this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
               this.props.toggleIsFetching(false);
               this.props.setUsers(response.items);
               this.props.setUsersTotalCount(response.totalCount);

         })
   }

   onPageChanged = (pageNumber) => {
      return (
         this.props.toggleIsFetching(true),
         this.props.setCurrentPage(pageNumber),
         usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then(response => {
               this.props.toggleIsFetching(false);
               this.props.setUsers(response.items);
         })
      )
   }

   render () {
      return (
         <>
         {this.props.isFetching ? <Loader />  : null}
               <Users currentPage={this.props.currentPage} 
                  onPageChanged={this.onPageChanged}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  toggleFollowingInProcess ={this.props.toggleFollowingInProcess}
                  followInProgress={this.props.followInProgress}
                   />
         </>
      )
   }
      

}



let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state) ,
      totalUsersCount: getTotalUserCount(state),
      currentPage:getCurrentPage(state),
      isFetching: getIsFetching(state),
      followInProgress:  getFollowInProgress(state)
   }
}




export default compose(connect(mapStateToProps, {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      setUsersTotalCount,
      toggleIsFetching,
      toggleFollowingInProcess
   
   }),
) (UsersContainer);
