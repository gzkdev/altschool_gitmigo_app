import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formThumbnail}></div>
      <input
        className={styles.formInput}
        autoComplete="off"
        type="search"
        name="search"
        id="search"
        placeholder="Enter username"
      />
      <button className={styles.formButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
