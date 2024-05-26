import React, { useState } from "react";
import Post from "./Post";
import classes from "./Post.module.scss";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostsList({isPosting, onStopPosting}) {
  
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authurChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
    
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthurChange={authurChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="ali" body="next js is awsome two" />
        <Post author="sins" body="reactjs is awsome" />
        <Post author="ali" body="sdffsfsdfs is fsfdsf" />
      </ul>
    </>
  );
}

export default PostsList;
