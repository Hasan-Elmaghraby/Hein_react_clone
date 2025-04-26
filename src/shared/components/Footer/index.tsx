import { Container } from "../Container";
import { NavLinks } from "./components/NavLinks";
import { Socials } from "./components/Socials";
import { Logo } from "./components/Logo";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Copyright } from "./components/Copyright";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <Logo />

          <div className={styles.column}>
            <h3 className={styles.title}>{t("footer.quickLinks")}</h3>
            <NavLinks />
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>{t("footer.followUs")}</h3>
            <Socials />
            <Copyright />
          </div>
        </div>
      </Container>
    </footer>
  );
};
