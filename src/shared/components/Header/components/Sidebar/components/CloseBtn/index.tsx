import React from "react";
import styles from "./styles.module.scss";

interface CloseBtnProps {
  onClick: () => void;
}

export const CloseBtn: React.FC<CloseBtnProps> = ({ onClick }) => {
  return (
    <div className={styles.closeBtn} onClick={onClick}>
      <span></span>
      <span></span>
    </div>
  );
};
