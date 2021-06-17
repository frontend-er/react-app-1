import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";




function Profile(props) {
    


   return (
  <div  className = {style.content}> 
      


      <UserProfile profile={props.profile} status={props.status} updateUserProfileStatus={props.updateUserProfileStatus}/>
      <MyPostsContainer/>
      
    </div>

   )
}

export default Profile;