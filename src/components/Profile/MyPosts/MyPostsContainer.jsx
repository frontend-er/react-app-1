import  React from "react";
import { addPostActionCreator,updatePostActionCreator } from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostValue: state.profilePage.newPostValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreator())},
    updatePost: (text) => {dispatch(updatePostActionCreator(text))}
  }
}



const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;