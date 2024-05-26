import React from "react";
import Post from "./Post";
import classes from "./Post.module.scss";
import NewPost from "./NewPost";
function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="amir" body="reactjs is awsome" />
        <Post author="ali" body="next js is awsome two" />
        <Post author="sins" body="reactjs is awsome" />
        <Post author="ali" body="sdffsfsdfs is fsfdsf" />
      </ul>
    </>
  );
}

export default PostsList;
