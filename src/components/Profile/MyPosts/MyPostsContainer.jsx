import  React from "react";
import { addPostActionCreator,updatePostActionCreator } from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StateContext from "./../../../StateContext";






 function  MyPostsContainer(props) {

    
      
    return( 
      <StateContext.Consumer>
      {

       
        (store) => {

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          } 

          let changePostValue = (text) => {
            store.dispatch(updatePostActionCreator(text));
          }

          return (
            <MyPosts updatePost={changePostValue} addPost={addPost} posts={store.getState().profilePage.posts} newPostValue={store.getState().profilePage.newPostValue}/>

          )
        }
      }
      </StateContext.Consumer>
    )
 }

 export default MyPostsContainer;