import React from "react";
import classes from "../index.module.css";

import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
