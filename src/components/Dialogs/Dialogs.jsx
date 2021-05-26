import React  from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


 let newMessageElement = React.createRef();


function Dialogs(props) {
   let dialogItems = props.dialogs.map( d => <Dialog id={d.id}  name={d.name} img={d.img}/>);
   let messageItems = props.messages.map( m => <Message name={m.name} />);

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
             <textarea placeholder="Type your message"  ref={newMessageElement} value={props.defaultMessage} onChange={updateMessage} ></textarea> 
             <button onClick={addMessage}>Send</button>
         </div>

        
      </div>
   )
};

export default Dialogs;