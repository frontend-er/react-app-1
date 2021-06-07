import React from 'react';
import style from './UserProfile.module.css'
import Loader from "./../../common/Loader/Loader";
import UserInfo from "./UserInfo/UserInfo";

function UserProfile(props) {
   if (!props.profile) {
      return <Loader/>
   }
   return (
      <div>
         <div className={style.previevPhoto} >
            <img src="https://scontent.fsbz1-1.fna.fbcdn.net/v/t31.18172-0/p480x480/19575079_10103832396388711_8894816584589808440_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=8oLMWEVmuusAX8FTv7d&_nc_ht=scontent.fsbz1-1.fna&tp=6&oh=2558c88fb986d8425faa6ea5ca387454&oe=60D466A3" alt="" />
         </div>

         <div className={style.profilePhoto}>
            <img src={props.profile.photos.large} alt="profilePhoto" />
            <div className={style.profileInfo}> 
            <div className={style.userName}>
               {props.profile.fullName}
            </div>
               <UserInfo  contacts={props.profile.contacts} lookingForAJob={props.profile.lookingForAJob} lookingForAJobDescription={props.profile.lookingForAJobDescription}/>

            </div>

         </div>

         
      </div>
   )
}

export default UserProfile;