import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


function Profile() {
   return (
  <div  className = {style.content}> 
      Main Content

      <div className={style.preview}>
      <img src="https://lh3.googleusercontent.com/proxy/ZGOfpJRkxsY8F_3oBlzzN7MRg2AY5GDKswyrNUq7uwLNRMHiCfNje9UO2qKDfwhg8gt8fgUCEliFLnmjJEMtaXTwVEjxSoP9wI6rkcyhMw" alt="" />
      </div>

      <div className={style.profilePhoto}>
      <img src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" alt="" />
      </div>
      <MyPosts />
      
    </div>

   )
}

export default Profile;