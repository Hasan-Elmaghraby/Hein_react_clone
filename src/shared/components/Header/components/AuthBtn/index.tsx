import React from "react";
import styles from "./styles.module.scss";

interface AuthProps {
  type: string;
}

export const AuthBtn: React.FC<AuthProps> = ({ type }) => {
  return (
    <button
      className={`${styles.btn} ${type === "login" && styles.logIn} ${
        type === "register" && styles.register
      }`}
    >
      {type === "login" && "تسجيل الدخول"}
      {type === "register" && "إنشاء حساب"}
    </button>
  );
};
