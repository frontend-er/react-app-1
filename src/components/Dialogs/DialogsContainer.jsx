import React  from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      defaultMessage: state.dialogsPage.defaultMessage,
      isAuth: state.auth.isAuth
   }
}


let mapDispatchToProps = (dispatch) => {
return {
      addMessage: () => {dispatch(addMessageActionCreator())},
      updateMessage: (text) => {dispatch(updateMessageActionCreator(text))},
      
   }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;