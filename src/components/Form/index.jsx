import React from "react";
import styles from "./Form.module.css";
import useSearchProfile from "./useSearchProfile";

const Form = () => {
  const { username, handleInputUsername, handleSearchUsername } =
    useSearchProfile();
  return (
    <form className={styles.form} onSubmit={handleSearchUsername}>
      <div className={styles.formThumbnail}></div>
      <input
        className={styles.formInput}
        value={username}
        onChange={handleInputUsername}
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
