import  React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";



   let newPostElement = React.createRef();


 function  MyPosts(props) {
    let postItem = props.posts.map( p =>  <Post name={p.name} likes={p.likesOnPost}/> );

    let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
    
    }
      
    return( 
     <div className={style.container}>
     <textarea value="new post" ref={newPostElement} ></textarea>

     <button onClick={addPost}>
     Add Post</button>
      {postItem}
 </div>
    )
 }

 export default MyPosts;