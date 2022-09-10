import React from "react";
import classes from "../index.module.css";

const Message = () => {
  return (
    <div className={`${classes.message} ${classes.owner}`}>
      <div className={classes.messageInfo}>
        <img
          src="https://images.pexels.com/photos/2376383/pexels-photo-2376383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="#"
        />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/2376383/pexels-photo-2376383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Message;
