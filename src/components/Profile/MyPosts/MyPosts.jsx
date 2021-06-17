import  React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
 import {Field ,reduxForm} from  'redux-form';






  const PostForm = (props) =>  {
     
    return (
         <form onSubmit={props.handleSubmit}>
            <div> 
               <Field   value={props.defaultMessage}  placeholder={"Your post"} name={"post"} component={"textarea"}/>
            </div>
           
            <div> <button>Send Message</button> </div>

         </form>
    )
 }





const AddPostReduxForm = reduxForm ({form: "postForm"})(PostForm);


 function  MyPosts(props) {
    let postItem = props.posts.map( p =>  <Post name={p.name} likes={p.likesOnPost}/> );

    let addPost = (newPost) => {
        props.addPost(newPost);
    }

    let addNewPost = (value) => {
       addPost(value.post)
    }

   
      
    return( 
     <div className={style.container}>
     <AddPostReduxForm  onSubmit={addNewPost} />
      {postItem}
      </div>
    )
 }

 export default MyPosts;