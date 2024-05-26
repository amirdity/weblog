import React from "react";
import classes from "./Post.module.scss";
function NewPost({ onBodyChange, onAuthurChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="" id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name=""
          id="name"
          required
          onChange={onAuthurChange}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>cancel</button>
        <button type="">submit</button>
      </p>
    </form>
  );
}

export default NewPost;
