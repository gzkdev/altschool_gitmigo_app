import React from "react";
import styles from "./ProfilePageLayout.module.css";

const ProfilePageLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ProfilePageLayout;
