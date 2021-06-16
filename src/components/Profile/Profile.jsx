import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";
import {Redirect} from 'react-router-dom';



function Profile(props) {
     if (!props.isAuth) {
       return <Redirect to={'/login'}/>
    }


   return (
  <div  className = {style.content}> 
      


      <UserProfile profile={props.profile} />
      <MyPostsContainer/>
      
    </div>

   )
}

export default Profile;