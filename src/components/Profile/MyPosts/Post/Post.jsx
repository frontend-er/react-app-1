import  React from "react";
import style from "./Post.module.css";
 

 function  Post(params) {
    return(
        <div className={style.item}>
            {params.props}
         </div>

    )
 }

 export default Post;