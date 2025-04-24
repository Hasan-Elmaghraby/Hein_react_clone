import styles from "./styles.module.scss";
import logo from "@public/images/footerLogo.png";

export const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img loading="lazy" src={logo} alt="logo" />
    </figure>
  );
};
