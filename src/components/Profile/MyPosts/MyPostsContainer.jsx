import  React from "react";
import { addPostActionCreator,updatePostActionCreator } from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";






 function  MyPostsContainer(props) {

    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let changePostValue = (text) => {
      props.store.dispatch(updatePostActionCreator(text));
    }
      
    return( 
     <MyPosts updatePost={changePostValue} addPost={addPost} posts={state.profilePage.posts} newPostValue={state.profilePage.newPostValue}/>
    )
 }

 export default MyPostsContainer;