import { Container } from "../Container";
import { NavLinks } from "./components/NavLinks";
import { Socials } from "./components/Socials";
import { Logo } from "./components/Logo";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <Logo />
          <NavLinks />
          <Socials />
          {/* <div className={styles.copyright}>
            <span>Copyright &copy; 2023</span>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};
