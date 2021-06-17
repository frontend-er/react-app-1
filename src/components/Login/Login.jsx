import  React  from "react";
 


 const Login = () =>  {
    return (
       <div>
         Login
         <LoginForm />
       </div>
        
    )
 }

  const LoginForm = () =>  {
    return (
         <form>
            <div> <input placeholder="login" type="text" /></div>
            <div><input placeholder="password" type="text" /> </div>

            <div><input placeholder="login" type="checkbox" /> remember me</div>
            <div> <button>Sing in</button> </div>

         </form>
    )
 }

 export default Login