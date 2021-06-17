import  React  from "react";
 import {Field ,reduxForm  } from  'redux-form';


 const Login = () =>  {

    const onSubmit = (formData) => {
       console.log(formData)
    }
    return (
       <div>
         Login
         <LoginReduxForm onSubmit={onSubmit} />
       </div>
        
    )
 }



  const LoginForm = (props) =>  {
    return (
         <form onSubmit={props.handleSubmit}>
            <div> 
               <Field placeholder={"login"} type={"text"} name={"login"} component={"input"}/>
            </div>
            <div><Field placeholder={"password"} name={"password"} type={"text"} component={"input"} /> </div>

            <div><Field placeholder={"login"} name={"rememberMe"} type={"checkbox"}  component={"input"}/> remember me</div>
            <div> <button>Sing in</button> </div>

         </form>
    )
 }

const LoginReduxForm = reduxForm ({form: "form"})(LoginForm);

 export default Login