import React from "react";
import classes from "../index.module.css";

import { AiOutlineUserAdd, AiOutlineVideoCamera } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>Tyler</span>
        <div className={classes.chatIcons}>
          <AiOutlineVideoCamera color="white" size={20} />
          <AiOutlineUserAdd color="white" size={20} />
          <BsThreeDots color="white" size={20} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
