import React from "react";
import styles from "./styles.module.scss";

interface NavBtnProps {
  onClick: () => void;
  isNavOpen: boolean;
}
export const NavBtn: React.FC<NavBtnProps> = ({ onClick, isNavOpen }) => {
  return (
    <div
      className={`${styles.navBtn} ${isNavOpen && styles.active} `}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
