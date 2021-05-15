import  React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";


let postsBD = [
   {id: 1, name:"newPost", likesOnPost: 12},
   {id: 2, name:"newPost 2 ", likesOnPost: 11},

]


let postItem = postsBD.map( p =>  <Post name={p.name} likes={p.likesOnPost}/> )

 function  MyPosts(params) {
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