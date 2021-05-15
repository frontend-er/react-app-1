import  React from "react";
import style from "./Post.module.css";
 

 function  Post(props) {
    return(
        <div className={style.item}>
            {props.name} {props.likes}
         </div>

    )
 }

 export default Post;