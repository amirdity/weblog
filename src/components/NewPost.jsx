import React from "react";
import classes from "./Post.module.scss"
function NewPost() {
  function changeBodyHandler(){

  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="" id="body" required rows={3} onChange={changeBodyHandler}></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" name="" id="name" required/>
      </p>
    </form>
  );
}

export default NewPost;
