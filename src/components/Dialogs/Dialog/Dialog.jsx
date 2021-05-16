import { React } from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";


function Dialog(props) {
   return (
   <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id}>
       <img src={props.img} alt="" />
      {props.name}
      
      </NavLink>
   </div>
   )
}

export default Dialog;