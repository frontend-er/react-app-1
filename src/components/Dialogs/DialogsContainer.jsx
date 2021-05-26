import React  from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageActionCreator } from "./../../redux/dialogs-reducer";





function DialogsContainer(props) {
 
   let dialogItems = props.dialogs.map( d => <Dialog id={d.id}  name={d.name} img={d.img}/>);
   let messageItems = props.messages.map( m => <Message name={m.name} />);

   let newMessageElement = React.createRef();

   let addMessage = () => {
      //props.addMessage();
         props.dispatch(addMessageActionCreator())
   }

   let updateMessage = () => {
      let text = newMessageElement.current.value;
      //props.updateMessage(text);
      props.dispatch(updateMessageActionCreator(text))
   }

   return (
    <Dialog  />
   )
};

export default DialogsContainer;