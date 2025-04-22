import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { NavBtn } from "./components/NavBtn";
import { Logo } from "./components/Logo";
import { Overlay } from "./components/Overlay";
import styles from "./styles.module.scss";
import { Container } from "../Container";
import logo from "@public/images/logo.png";

export const Header: React.FC = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const handleNavToggle = () => setNavIsOpen(!isNavOpen);

  const handleNavClose = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setNavIsOpen(false);
    }
  };

  return (
    <header className={styles.header}>
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
