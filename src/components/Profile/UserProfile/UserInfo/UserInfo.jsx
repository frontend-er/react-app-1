import React from "react";
import style from "./UserInfo.module.css"
import Status from "./Status.jsx";

function UserInfo (props) {

   if(!props.contacts) {
      return <div>No profile info</div>
   }

   let contactInfo = (info, icon) => {
      if (!info)
      return (<div>

      </div> 
      )
      return (
         <div>
            <i class={icon}></i>
            <a href=''>{info}</a>
         </div>
      
      )
   }

   let workInfo = (staus) => {
      if (!staus) {
         return null
      }
      return (
         <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/51/personal-computer_1f4bb.png" alt=""/>
      )
   }


   return (
      <div className={style.usersInfo} >
            <div className={style.job}>
               {workInfo(props.lookingForAJob)}
               <Status status={props.status} updateUserProfileStatus={props.updateUserProfileStatus}/>
            </div>
            {contactInfo(props.contacts.facebook,"fab fa-facebook-f")}
            {contactInfo(props.contacts.website,"fas fa-laptop")}
            {contactInfo(props.contacts.vk,"fab fa-vk")}
            {contactInfo(props.contacts.twitter,"fab fa-twitter")}
            {contactInfo(props.contacts.instagram,"fab fa-instagram")}
            {contactInfo(props.contacts.youtube,"fab fa-youtube")}
            {contactInfo(props.contacts.github,"fab fa-github")}
      </div>
   )
}

export default UserInfo;