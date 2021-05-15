import React  from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


let dialogsBD = [
   {id:'1', name : "Dimas"},
   {id:"2", name: "Oleg"},
   {id:"3", name: "Ann"},
   {id:"4", name: "Sveta"},

]


let messagesBD = [
   {id:'1', name: "Hi"},
   {id:"2", name: "Hellow oleg"},
   {id:"3", name: "how are u?"},
   {id:"4", name: "Sveta"},

]


let dialogItems = dialogsBD.map( d => <Dialog id={d.id}  name={d.name}/>)
let messageItems = messagesBD.map( m => <Message name={m.name} />)


function Dialog(props) {
   return (
   <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
   </div>
   )
}

function Message(props) {
   return(
   <div className={style.message}>
            {props.name}
   </div>   
   )
   
}

function Dialogs() {
   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItems}>
            {dialogItems}
         </div>

         <div className={style.messages}>
            {messageItems}
         </div>
      </div>
   )
};

export default Dialogs;