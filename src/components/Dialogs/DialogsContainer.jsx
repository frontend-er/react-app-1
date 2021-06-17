import React  from "react";
import { addMessageActionCreator  } from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../HOC/withAuthRedirect.jsx";
import {compose} from 'redux';

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      defaultMessage: state.dialogsPage.defaultMessage,
      
   }
}


let mapDispatchToProps = (dispatch) => {
return {
      addMessage: (newMessage) => {dispatch(addMessageActionCreator(newMessage))}
     
      
   }
}



export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   withAuthRedirect
)(Dialogs);