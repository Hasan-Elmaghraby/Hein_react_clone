import { Sidebar } from "./components/Sidebar";
import { NavBtn } from "./components/NavBtn";
import { Logo } from "./components/Logo";
import { Overlay } from "./components/Overlay";
import styles from "./styles.module.scss";
import { Container } from "../Container";
import logo from "@public/images/logo.png";
import { useHeader } from "./hooks/useHeader";

export const Header: React.FC = () => {
  const { isNavOpen, handleNavToggle, handleNavClose, isHeaderFixed } =
    useHeader();
  return (
    <header
      className={`${styles.header} ${isHeaderFixed ? styles.headerFixed : ""}`}
    >
      <Container>
        <div className={styles.headerWrapper}>
          <Logo logo={logo} />
          <Sidebar
            isNavOpen={isNavOpen}
            logo={logo}
            onClick={handleNavToggle}
          />
          <NavBtn onClick={handleNavToggle} isNavOpen={isNavOpen} />
        </div>
      </Container>
      <Overlay
        onClick={handleNavToggle}
        onKeyDown={handleNavClose}
        isNavOpen={isNavOpen}
      />
    </header>
  );
};
