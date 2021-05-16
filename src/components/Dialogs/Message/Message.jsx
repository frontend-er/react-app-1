import { React } from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";




function Message(props) {
   return(
   <div className={style.message}>
            {props.name}
   </div>   
   )
   
}


export default Message;