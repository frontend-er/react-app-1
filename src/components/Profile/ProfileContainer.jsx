import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from "react-redux";
import { getUserProfile, getUserProfileStatus, updateUserProfileStatus } from "./../../redux/profile-reducer";
import { withRouter } from "react-router";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../HOC/withAuthRedirect.jsx";
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
         userId = 17432;
      }
      this.props.getUserProfile(userId);
      this.props.getUserProfileStatus(userId);
   }

   render() {

       
      return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserProfileStatus={this.props.updateUserProfileStatus}/>
      )
   }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status

})


export default compose(
   connect(mapStateToProps, {getUserProfile, getUserProfileStatus, updateUserProfileStatus}),
   withRouter,
   //withAuthRedirect
) (ProfileContainer);
