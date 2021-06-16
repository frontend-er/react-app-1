import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";




function Profile(props) {
    


   return (
  <div  className = {style.content}> 
      


      <UserProfile profile={props.profile} />
      <MyPostsContainer/>
      
    </div>

   )
}

export default Profile;