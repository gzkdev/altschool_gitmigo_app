import React from "react";
import styles from "./HomePageLayout.module.css";

const HomePageLayout = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default HomePageLayout;
