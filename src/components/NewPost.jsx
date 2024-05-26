import React from "react";
import classes from "./Post.module.scss";
import { useState } from "react";
function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authurChangeHandler(event) {
    setEnteredAuthor(event.target.value);
    
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      auther: enteredAuthor,
    };
    onAddPost(postData)
    onCancel()
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          name=""
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name=""
          id="name"
          required
          onChange={authurChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          cancel
        </button>
        <button type="">submit</button>
      </p>
    </form>
  );
}

export default NewPost;
