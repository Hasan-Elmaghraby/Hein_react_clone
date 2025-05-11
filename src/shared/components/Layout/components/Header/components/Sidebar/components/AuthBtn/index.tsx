import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface AuthProps {
  type: string;
}

export const AuthBtn: React.FC<AuthProps> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <a
      href={type === "login" ? "/auth/signin" : "/auth/signup"}
      className={`${styles.btn} ${type === "login" && styles.logIn} ${
        type === "register" && styles.register
      }`}
    >
      {type === "login" && t("header.signIn")}
      {type === "register" && t("header.signUp")}
    </a>
  );
};
