import React  from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";





function DialogsContainer(props) {
 
 
   let state = props.store.getState();
   let addMessage = () => {
      props.store.dispatch(addMessageActionCreator())
   }

   let updateMessage = (text) => {
      props.store.dispatch(updateMessageActionCreator(text))
   }

   return (
    <Dialogs  dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addMessage={addMessage} updateMessage={updateMessage} defaultMessage={state.dialogsPage.defaultMessage}/>
   )
};

export default DialogsContainer;