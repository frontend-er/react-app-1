import  React  from "react";
 import {Field ,reduxForm  } from  'redux-form';
import {Input} from "../common/FormsControls/FormControler";
import {maxLengthCreator, requiredField} from "../../utilites/validatirs/validators";
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";
import style from "./../common/FormsControls/FormControler.module.css"


 const Login = (props) => {

     const onSubmit = (formData) => {
         props.login(formData.email, formData.password, formData.rememberMe);
     }
     if(props.isAuth) {
         return <Redirect to={"/profile/"} />


     }
         return (
             <div>
                 Login
                 <LoginReduxForm onSubmit={onSubmit}/>
             </div>

         )
     }


let maxLength10 = maxLengthCreator(20)


  const LoginForm = ({handleSubmit,error }) =>  {
    debugger
    return (
         <form onSubmit={handleSubmit}>
            <div> 
               <Field placeholder={"login"} type={"text"} name={"email"} validate={[requiredField,maxLength10 ]} component={Input}/>
            </div>
            <div><Field type={"password"} placeholder={"password"} name={"password"}  validate={[requiredField,maxLength10 ]} component={Input} /> </div>

            <div><Field name={"rememberMe"} type={"checkbox"}  component={"input"}/> remember me</div>
             { error && <div className={style.formSummaryError}>
                 {error}
             </div>}
            <div> <button>Sing in</button> </div>

         </form>
    )
 }

 const mapStateToProps = (state) => ({
    isAuth:  state.auth.isAuth
 })


const LoginReduxForm = reduxForm ({form: "login"})(LoginForm);

export default connect(mapStateToProps, {
    login
})(Login);

