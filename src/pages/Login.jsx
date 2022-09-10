import React from "react";
import classes from "../index.module.css";

const Login = () => {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <h1 className={classes.logo}>MOKOM CHAT</h1>
        <h1 className={classes.formTitle}>Login</h1>
        <form action="" className={classes.form}>
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
          <button className={classes.formBtn}>Sign In</button>
          <p>You don't have an account Register</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
