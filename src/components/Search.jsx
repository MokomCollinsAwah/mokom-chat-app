import React from "react";
import classes from "../index.module.css";

const Search = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Find a User" />
      <div className={classes.userChat}>
        <img
          src="https://images.pexels.com/photos/2376383/pexels-photo-2376383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="#"
        />
        <div className={classes.userInfo}>
          <span>Jane</span>
          <p>Okay, thank you</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
