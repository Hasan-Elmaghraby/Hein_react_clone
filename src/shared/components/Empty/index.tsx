import React from "react";
import styles from "./styles.module.scss";
import { Image } from "../Image";

interface Props {
  src: string;
  text: string;
}

export const Empty: React.FC<Props> = ({ src, text }) => {
  return (
    <div className={styles.empty}>
      <Image src={src} alt="empty" maxWidth="200px" />
      <p className={styles.text}> {text}</p>
    </div>
  );
};
