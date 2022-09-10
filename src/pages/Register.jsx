import React from "react";
import classes from "../index.module.css";

import Add from "../assets/add.png";

const Register = () => {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <h1 className={classes.logo}>MOKOM CHAT</h1>
        <h1 className={classes.formTitle}>Register</h1>
        <form action="" className={classes.form}>
          <input
            type="text"
            placeholder="display name"
            className={classes.formInput}
          />
          <input
            type="text"
            placeholder="email"
            className={classes.formInput}
          />
          <input
            type="text"
            placeholder="password"
            className={classes.formInput}
          />
          <input
            style={{ display: "none" }}
            type="file"
            className={classes.formInput}
            id="file"
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add a Profile Picture</span>
          </label>
          {/* <div className={classes.formAgreement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div> */}
          <button className={classes.formBtn}>Sign Up</button>
          <p>Already Have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
