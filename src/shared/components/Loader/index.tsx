import React from "react";
import styles from "./styles.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderSpinner}></div>
    </div>
  );
};

export default Loader;
