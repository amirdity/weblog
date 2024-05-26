import React, { useState } from "react";
import Post from "./Post";
import classes from "./Post.module.scss";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((Post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
          <Post author="ali" body="sdffsfsdfs is fsfdsf" />
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>there are no posts yet.</h2>
          <p>start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
