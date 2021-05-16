import  React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";






 function  MyPosts(props) {
    let postItem = props.posts.map( p =>  <Post name={p.name} likes={p.likesOnPost}/> )
    return( 
     <div className={style.container}>
     <textarea>
     </textarea>

     <button>
     Add Post</button>
      {postItem}
 </div>
    )
 }

 export default MyPosts;