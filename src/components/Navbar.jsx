import React from "react";
import classes from "../index.module.css";

import dp from "../assets/dp.jpg";

const Navbar = () => {
  return (
    <div className={classes.chatContainer}>
      <span className={classes.logo}>Mokom Chat</span>
      <div className={classes.user}>
        <img src={dp} alt="" />
        <span>John</span>
        <button className={classes.navBtn}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
