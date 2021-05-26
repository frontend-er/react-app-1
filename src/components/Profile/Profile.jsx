import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
   return (
  <div  className = {style.content}> 
      

      <div className={style.preview}>
      <img src="https://storge.pic2.me/c/1360x800/299/565eb2e9d5fe1.jpg" alt="" />
      </div>

      <div className={style.profilePhoto}>
      <img src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" alt="" />
      </div>
      <MyPostsContainer/>
      
    </div>

   )
}

export default Profile;