import React from "react";
import classes from "../index.module.css";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
const sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default sidebar;
