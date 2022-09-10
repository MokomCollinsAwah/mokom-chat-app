import React from "react";
import classes from "../index.module.css";

import { MdOutlineAttachFile } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";

const Input = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="Type Message..." />
      <div className={classes.send}>
        <MdOutlineAttachFile size={20} />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file"></label>
        <BiImageAdd size={20} cursor />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
