import React from "react";
import './posts.css';
const Posts = ({post}) => {
    return(
        <div className="post-card">
            <p>Title: {post.title}</p>
            <h4>Id: {post.id}</h4>
            {/* <h5>{post.body}</h5> */}
        </div>
    )
}

export default Posts;