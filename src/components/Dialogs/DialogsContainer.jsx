import React  from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StateContext from "./../../StateContext";





function DialogsContainer(props) {
   return (
     <StateContext.Consumer>
     {
        (store) => {

            
            let addMessage = () => {
               store.dispatch(addMessageActionCreator())
            }

            let updateMessage = (text) => {
               store.dispatch(updateMessageActionCreator(text))
            }
           return (
            <Dialogs  dialogs={store.getState().dialogsPage.dialogs} messages={store.getState().dialogsPage.messages} addMessage={addMessage} updateMessage={updateMessage} defaultMessage={store.getState().dialogsPage.defaultMessage}/>

           )
        }
     }
     </StateContext.Consumer> 
   )
};

export default DialogsContainer;