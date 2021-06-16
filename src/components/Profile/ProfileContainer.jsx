import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from "react-redux";
import { getUserProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../HOC/withAuthRedirect.jsx";

class ProfileContainer extends React.Component {
  
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
         userId = 2;
      }
      this.props.getUserProfile(userId);
   }

   render() {

       
      return (
         <Profile {...this.props} profile={this.props.profile}/>
      )
   }
}

let RedirectMoponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,

})



let UserProfileContainerWithPath = withRouter(RedirectMoponent);

export default connect(mapStateToProps, {getUserProfile})(UserProfileContainerWithPath);