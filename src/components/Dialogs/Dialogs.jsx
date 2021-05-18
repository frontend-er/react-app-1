import React  from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";





function Dialogs(props) {
   
   let dialogItems = props.dialogs.map( d => <Dialog id={d.id}  name={d.name} img={d.img}/>);
   let messageItems = props.messages.map( m => <Message name={m.name} />);

   let newMessageElement = React.createRef();

   let addMessage = () => {
      props.addMessage();
   }

   let updateMessage = () => {
      let text = newMessageElement.current.value;
      props.updateMessage(text);
   }

   return (
      <div className={style.dialogs}> 
         <div className={style.dialogsItems}>
            {dialogItems}
         </div>

         <div className={style.messages}>
            {messageItems}
             <textarea ref={newMessageElement} value={props.defaultMessage} onChange={updateMessage} ></textarea> 
             <button onClick={addMessage}>Send</button>
         </div>

        
      </div>
   )
};

export default Dialogs;