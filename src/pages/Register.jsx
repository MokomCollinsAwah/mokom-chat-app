import React, { useState } from "react";
import classes from "../index.module.css";

import Add from "../assets/add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);

  //prevent default browser behaviors
  const submitHandler = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <h1 className={classes.logo}>MOKOM CHAT</h1>
        <h1 className={classes.formTitle}>Register</h1>
        <form action="" className={classes.form} onSubmit={submitHandler}>
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
          <button className={classes.formBtn}>Sign Up</button>
          {err && <span style={{ color: "red" }}>Something is Wrong!!!</span>}
          <p>Already Have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
