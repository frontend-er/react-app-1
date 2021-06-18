import React  from "react";
import style from "./Dialogs.module.css";
import { Redirect } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
 import {Field ,reduxForm} from  'redux-form';
import {Textarea} from "../common/FormsControls/FormControler";
import {maxLengthCreator, requiredField} from "../../utilites/validatirs/validators";


let newMessageElement = React.createRef();

let maxLength100 = maxLengthCreator(10)


  const MessageForm = (props) =>  {
     let max
    return (
         <form onSubmit={props.handleSubmit}>
            <div> 
               <Field   ref={newMessageElement} value={props.defaultMessage}  placeholder={"Your message"} name={"message"} validate={[requiredField, maxLength100 ]} component={Textarea}/>
            </div>
           
            <div> <button>Send Message</button> </div>

         </form>
    )
 }

const AddMessageReduxForm = reduxForm ({form: "messageForm"})(MessageForm);


function Dialogs(props) {
   let dialogItems = props.dialogs.map( d => <Dialog id={d.id}  name={d.name} img={d.img}/>);
   let messageItems = props.messages.map( m => <Message name={m.name} />);

   let addMessage = (newMessage) => {
         props.addMessage(newMessage);
         
   }


   let addNewMessage = (values) => {
      addMessage(values.message)
   }


    if (!props.isAuth) {
       return <Redirect to={'/login'}/>
    }

   return (
      <div className={style.dialogs}> 
         <div className={style.dialogsItems}>
            {dialogItems}
         </div>

         <div className={style.messages}>
            {messageItems}
            
             
             <AddMessageReduxForm onSubmit={addNewMessage}/>
         </div>

        
      </div>
   )
};

export default Dialogs;