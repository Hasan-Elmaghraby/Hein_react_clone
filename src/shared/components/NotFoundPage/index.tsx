import React from "react";
import styles from "./styles.module.scss";
import { Image } from "../Image";
import notFoundImage from "@public/images/followers/noData.png";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.empty}>
      <Image src={notFoundImage} alt="empty" />
      <p className={styles.text}> Not found Page</p>
    </div>
  );
};

export default NotFoundPage;
