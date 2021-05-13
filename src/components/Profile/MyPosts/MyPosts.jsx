import  React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";


 function  MyPosts(params) {
    return( 
     <div className={style.container}>
     <textarea>
     </textarea>

     <button>
     Add Post</button>
        
   <Post props="New Post"/>
   <Post props="New"/>
 </div>
    )
 }

 export default MyPosts;