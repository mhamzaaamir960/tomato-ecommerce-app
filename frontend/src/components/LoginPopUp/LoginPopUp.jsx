import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./LoginPopUp.module.css";

function LoginPopUp({ showLogin, setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className={styles.popUp}>
      <form className={styles.popUpContainer}>
        <div className={styles.popUpHeader}>
          <h2 className={styles.popUpTitle}>{currentState}</h2>
          <IoClose onClick={() => setShowLogin(false)}  className={styles.crossIcon}/>
        </div>
        <div className={styles.inputFields}>
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Enter your name..." />
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{currentState === "Sign Up" ? "Sign Up" : "Login"}</button>
        </div>
        {currentState === "Sign Up" && (
          <div className={styles.checkboxCondition}>
            <input type="checkbox" />
            <p>I agree to the terms and conditions</p>
          </div>
        )}
        {currentState === "Sign Up" ? (
          <div className={styles.loginText}>
            Already have an account? <span onClick={() => setCurrentState("Login")}>Login</span>
          </div>
        ) : (
          <div className={styles.loginText}>
            Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here!</span>{" "}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
