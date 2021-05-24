import  React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { addPostActionCreator,updatePostActionCreator } from "./../../../redux/state";



let newPostElement = React.createRef();



 function  MyPosts(props) {
    let postItem = props.posts.map( p =>  <Post name={p.name} likes={p.likesOnPost}/> );

    let addPost = () => {
     // props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let changePostValue = () => {
      let text = newPostElement.current.value;
      //props.updatePost(text);
      props.dispatch(updatePostActionCreator(text));
    }
      
    return( 
     <div className={style.container}>
     <textarea  ref={newPostElement} value={props.newPostValue} onChange={changePostValue}></textarea>

     <button onClick={addPost}>
     Add Post</button>
      {postItem}
 </div>
    )
 }

 export default MyPosts;